import { Router, Request, Response } from "express";
import { supabaseAdmin } from "../config/supabase.js";
import { authMiddleware, AuthRequest } from "../middleware/auth.js";

const router = Router();

// In-memory fallback if the Supabase table 'agency_settings' is not yet created
let inMemorySettings = {
    id: "default",
    business_name: "Luxora",
    tagline: "Discover Your Dream Home.",
    hero_title: "Find Your Perfect Sanctuary.",
    hero_subtitle: "Experience the pinnacle of luxury living with our exclusive collection of premium properties and estates.",
    phone: "+1 (555) 789-0123",
    email: "contact@luxora.com",
    address: "Beverly Hills, CA",
    working_hours: "Mon — Sat, 9am — 7pm",
    stats_properties: 150,
    stats_sold: 1200,
};

// GET /api/settings — Public, returns agency settings
router.get("/", async (_req: Request, res: Response) => {
    try {
        const { data, error } = await supabaseAdmin
            .from("agency_settings")
            .select("*")
            .limit(1)
            .single();

        if (error) {
            if (error.code === '42P01') {
                console.warn("⚠️ Table 'agency_settings' does not exist yet. Returning in-memory settings. Please run the SQL migration.");
                res.json(inMemorySettings);
                return;
            }
            throw error;
        }

        res.json(data);
    } catch (err) {
        console.error("Error fetching settings:", err);
        // Fallback to in-memory on any other fetch error
        res.json(inMemorySettings);
    }
});

// PUT /api/settings — Protected, updates agency settings
router.put("/", authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const payload = req.body;

        try {
            // First try to get existing settings
            const { data: existing, error: selectError } = await supabaseAdmin
                .from("agency_settings")
                .select("id")
                .limit(1)
                .single();

            // If the table doesn't exist, this will throw 42P01
            if (selectError && selectError.code === '42P01') {
                throw selectError;
            }

            let result;

            if (existing) {
                // Update existing row
                const { data, error } = await supabaseAdmin
                    .from("agency_settings")
                    .update({
                        ...payload,
                        updated_at: new Date().toISOString(),
                    })
                    .eq("id", existing.id)
                    .select()
                    .single();

                if (error) throw error;
                result = data;
            } else {
                // Insert new row
                const { data, error } = await supabaseAdmin
                    .from("agency_settings")
                    .insert({
                        ...payload,
                        id: 'default'
                    })
                    .select()
                    .single();

                if (error) throw error;
                result = data;
            }

            res.json(result);
            return;
        } catch (dbError: any) {
            if (dbError.code === '42P01') {
                console.warn("⚠️ Table 'agency_settings' does not exist yet. Updating in-memory settings.");
                inMemorySettings = { ...inMemorySettings, ...payload };
                res.json(inMemorySettings);
                return;
            }
            throw dbError; // rethrow other DB errors
        }

    } catch (err) {
        console.error("Error updating settings:", err);
        res.status(500).json({ error: "Failed to update settings" });
    }
});

export default router;

