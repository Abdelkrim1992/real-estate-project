import { Router, Request, Response } from "express";
import { supabaseAdmin } from "../config/supabase.js";
import { authMiddleware, AuthRequest } from "../middleware/auth.js";
import { broadcastEvent } from "../wsServer.js";

const router = Router();

// GET /api/inquiries — Get user's inquiries (protected)
router.get("/", authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const { data, error } = await supabaseAdmin
            .from("inquiries")
            .select("*, properties(name, image_url)")
            .eq("user_id", req.userId!)
            .order("created_at", { ascending: false });

        if (error) throw error;

        const inquiries = (data || []).map((i: Record<string, unknown>) => ({
            id: i.id,
            property_id: i.property_id,
            property_name: (i.properties as Record<string, unknown>)?.name || "Unknown",
            property_img: (i.properties as Record<string, unknown>)?.image_url || "",
            preferred_date: i.preferred_date,
            preferred_time: i.preferred_time,
            location: i.pickup_location,
            status: i.status,
            created_at: i.created_at,
        }));

        res.json(inquiries);
    } catch (err) {
        console.error("Error fetching inquiries:", err);
        res.status(500).json({ error: "Failed to fetch inquiries" });
    }
});

// POST /api/inquiries — Create an inquiry (protected)
router.post("/", authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const { property_id, preferred_date, preferred_time, message, guest_name, guest_email, guest_phone } = req.body;

        if (!property_id || !preferred_date) {
            res.status(400).json({ error: "Missing required inquiry fields" });
            return;
        }

        const { data, error } = await supabaseAdmin
            .from("inquiries")
            .insert({
                user_id: req.userId!,
                property_id,
                preferred_date,
                preferred_time: preferred_time || "Morning",
                guest_name: guest_name || "",
                guest_email: guest_email || "",
                guest_phone: guest_phone || "",
                guest_message: message || "",
                status: "pending",
            })
            .select("*, properties(name, image_url)")
            .single();

        if (error) throw error;

        const inquiryResult = {
            id: data.id,
            property_id: data.property_id,
            property_name: (data.properties as Record<string, unknown>)?.name || "Unknown",
            property_img: (data.properties as Record<string, unknown>)?.image_url || "",
            preferred_date: data.preferred_date,
            preferred_time: data.preferred_time,
            status: data.status,
            created_at: data.created_at,
        };

        // Broadcast to dashboard WebSocket clients
        broadcastEvent("NEW_INQUIRY", inquiryResult);

        // Persistent notification
        await supabaseAdmin.from("notifications").insert({
            title: "New Property Inquiry",
            description: `${inquiryResult.property_name} requested by client`,
            type: "booking",
            resource_id: inquiryResult.id,
            status: "unread",
        });

        res.status(201).json(inquiryResult);
    } catch (err) {
        console.error("Error creating inquiry:", err);
        res.status(500).json({ error: "Failed to create inquiry" });
    }
});

// PATCH /api/inquiries/:id — Update inquiry status (protected)
router.patch("/:id", authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const { status } = req.body;
        const validStatuses = ["pending", "confirmed", "completed", "cancelled"];

        if (!status || !validStatuses.includes(status)) {
            res.status(400).json({ error: "Invalid status" });
            return;
        }

        const { data, error } = await supabaseAdmin
            .from("inquiries")
            .update({ status })
            .eq("id", req.params.id)
            .eq("user_id", req.userId!)
            .select()
            .single();

        if (error || !data) {
            res.status(404).json({ error: "Inquiry not found" });
            return;
        }

        res.json(data);
    } catch (err) {
        console.error("Error updating inquiry:", err);
        res.status(500).json({ error: "Failed to update inquiry" });
    }
});

// POST /api/inquiries/guest — Create a guest inquiry (public)
router.post("/guest", async (req: Request, res: Response) => {
    try {
        const {
            property_id,
            property_name,
            preferred_date,
            preferred_time,
            guest_name,
            guest_email,
            guest_phone,
            guest_message,
        } = req.body;

        if ((!property_id && !property_name) || !preferred_date) {
            res.status(400).json({ error: "Missing required inquiry fields" });
            return;
        }

        let finalPropertyId = property_id;
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        if (finalPropertyId && !uuidRegex.test(finalPropertyId)) {
            finalPropertyId = null;
        }

        if (!finalPropertyId && property_name) {
            const { data: propRow, error: propError } = await supabaseAdmin
                .from("properties")
                .select("id")
                .eq("name", property_name)
                .limit(1)
                .single();

            if (propError || !propRow) {
                res.status(404).json({ error: `Property "${property_name}" not found.` });
                return;
            }
            finalPropertyId = propRow.id;
        }

        const { data, error } = await supabaseAdmin
            .from("inquiries")
            .insert({
                user_id: null,
                property_id: finalPropertyId,
                preferred_date,
                preferred_time: preferred_time || "Morning",
                guest_name: guest_name || "",
                guest_email: guest_email || "",
                guest_phone: guest_phone || "",
                guest_message: guest_message || "",
                status: "pending",
            })
            .select("*, properties(name, image_url)")
            .single();

        if (error) throw error;

        const inquiryResult = {
            id: data.id,
            property_id: data.property_id,
            property_name: (data.properties as Record<string, unknown>)?.name || "Property",
            property_img: (data.properties as Record<string, unknown>)?.image_url || "",
            guest_name: data.guest_name || "",
            status: data.status,
            created_at: data.created_at,
        };

        broadcastEvent("NEW_INQUIRY", inquiryResult);

        await supabaseAdmin.from("notifications").insert({
            title: "New Guest Inquiry",
            description: `${inquiryResult.guest_name} interested in ${inquiryResult.property_name}`,
            type: "booking",
            resource_id: inquiryResult.id,
            status: "unread",
        });

        res.status(201).json(inquiryResult);
    } catch (err) {
        console.error("Error creating guest inquiry:", err);
        res.status(500).json({ error: "Failed to create inquiry" });
    }
});

// Admin: GET /api/inquiries/admin — Get ALL inquiries (protected)
router.get("/admin", authMiddleware, async (_req: AuthRequest, res: Response) => {
    try {
        const { data, error } = await supabaseAdmin
            .from("inquiries")
            .select("*, properties(name, image_url)")
            .order("created_at", { ascending: false });

        if (error) throw error;

        const inquiries = (data || []).map((i: any) => ({
            id: i.id,
            property_id: i.property_id,
            property_name: i.properties?.name || "Unknown Property",
            property_img: i.properties?.image_url || "",
            guest_name: i.guest_name || "",
            guest_email: i.guest_email || "",
            guest_phone: i.guest_phone || "",
            preferred_date: i.preferred_date,
            preferred_time: i.preferred_time,
            status: i.status,
            created_at: i.created_at,
        }));

        res.json(inquiries);
    } catch (err) {
        console.error("Error fetching admin inquiries:", err);
        res.status(500).json({ error: "Failed to fetch inquiries" });
    }
});

// Admin: PATCH /api/inquiries/admin/:id — Update ANY inquiry status (protected)
router.patch("/admin/:id", authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const { status } = req.body;
        const { data, error } = await supabaseAdmin
            .from("inquiries")
            .update({ status })
            .eq("id", req.params.id)
            .select("*, properties(name, image_url)")
            .single();

        if (error || !data) {
            res.status(404).json({ error: "Inquiry not found" });
            return;
        }

        res.json(data);
    } catch (err) {
        console.error("Error updating admin inquiry:", err);
        res.status(500).json({ error: "Failed to update inquiry" });
    }
});

// Admin: DELETE /api/inquiries/admin/:id — Delete ANY inquiry (protected)
router.delete("/admin/:id", authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const { error } = await supabaseAdmin
            .from("inquiries")
            .delete()
            .eq("id", req.params.id);

        if (error) throw error;
        res.json({ success: true, id: req.params.id });
    } catch (err) {
        console.error("Error deleting admin inquiry:", err);
        res.status(500).json({ error: "Failed to delete inquiry" });
    }
});

export default router;

