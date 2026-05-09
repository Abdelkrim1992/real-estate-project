import { Router, Request, Response } from "express";
import { supabaseAdmin } from "../config/supabase.js";
import { authMiddleware, AuthRequest } from "../middleware/auth.js";
import crypto from "crypto";

const router = Router();

// POST /api/properties/upload-image — Upload property image to Supabase Storage (protected)
router.post("/upload-image", authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const { imageData, fileName } = req.body;
        if (!imageData) {
            res.status(400).json({ error: "No image data provided" });
            return;
        }

        // Extract base64 data from data URL
        const matches = imageData.match(/^data:(.+);base64,(.+)$/);
        if (!matches) {
            res.status(400).json({ error: "Invalid image format. Expected base64 data URL." });
            return;
        }

        const contentType = matches[1];
        const base64Data = matches[2];
        const buffer = Buffer.from(base64Data, "base64");

        // Generate unique filename
        const ext = contentType.split("/")[1] || "png";
        const uniqueName = `${crypto.randomUUID()}.${ext}`;
        const filePath = `properties/${uniqueName}`;

        // Upload to Supabase Storage
        const { data, error } = await supabaseAdmin.storage
            .from("property-images")
            .upload(filePath, buffer, {
                contentType,
                cacheControl: "3600",
                upsert: false,
            });

        if (error) {
            console.error("Supabase storage error:", error);
            res.status(500).json({ error: "Failed to upload image: " + error.message });
            return;
        }

        // Get public URL
        const { data: urlData } = supabaseAdmin.storage
            .from("property-images")
            .getPublicUrl(filePath);

        res.json({ url: urlData.publicUrl });
    } catch (err) {
        console.error("Error uploading image:", err);
        res.status(500).json({ error: "Failed to upload image" });
    }
});

// GET /api/properties — List all properties with optional filters
router.get("/", async (req: Request, res: Response) => {
    try {
        let query = supabaseAdmin.from("properties").select("*");

        // If 'all' query param is NOT true, only show available properties
        if (req.query.all !== "true") {
            query = query.eq("available", true);
        }

        if (req.query.type && req.query.type !== "All Types") {
            query = query.eq("type", req.query.type);
        }
        if (req.query.location && req.query.location !== "All Locations") {
            query = query.eq("location", req.query.location);
        }
        if (req.query.status && req.query.status !== "All Status") {
            query = query.eq("property_status", req.query.status);
        }

        const { data, error } = await query;

        if (error) throw error;

        // Map to frontend-compatible format
        const properties = (data || []).map((prop) => {
            const imgPath = prop.image_url || prop.img || "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80";

            return {
                id: prop.id,
                name: prop.name,
                price: typeof prop.price === 'number' ? `$${prop.price.toLocaleString()}` : prop.price ? `$${prop.price}` : "$0",
                type: prop.type,
                location: prop.location,
                description: prop.description,
                img: imgPath,
                bedrooms: prop.bedrooms || 0,
                bathrooms: prop.bathrooms || 0,
                sqft: prop.sqft || 0,
                property_status: prop.property_status || "Sale",
                year: prop.year || 2024,
                features: prop.features || [],
                specifications: prop.specifications || {},
                images: prop.images || [imgPath],
                host_name: prop.host_name,
                host_avatar: prop.host_avatar,
                host_location: prop.host_location,
                status: prop.status || "Available",
                condition: prop.condition || "Excellent",
                availability_days: prop.availability_days || ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            };
        });

        res.json(properties);
    } catch (err) {
        console.error("Error fetching properties:", err);
        res.status(500).json({ error: "Failed to fetch properties" });
    }
});

// GET /api/properties/:id — Get single property
router.get("/:id", async (req: Request, res: Response) => {
    try {
        const { data, error } = await supabaseAdmin
            .from("properties")
            .select("*")
            .eq("id", req.params.id)
            .single();

        if (error || !data) {
            res.status(404).json({ error: "Property not found" });
            return;
        }

        res.json({
            id: data.id,
            name: data.name,
            price: typeof data.price === 'number' ? `$${data.price.toLocaleString()}` : `$${data.price}`,
            type: data.type,
            location: data.location,
            description: data.description,
            img: data.image_url,
            bedrooms: data.bedrooms,
            bathrooms: data.bathrooms,
            sqft: data.sqft,
            property_status: data.property_status,
            year: data.year,
            features: data.features || [],
            specifications: data.specifications || {},
            images: data.images || [],
            host_name: data.host_name,
            host_avatar: data.host_avatar,
            host_location: data.host_location,
            condition: data.condition || "Excellent",
            availability_days: data.availability_days || ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        });
    } catch (err) {
        console.error("Error fetching property:", err);
        res.status(500).json({ error: "Failed to fetch property" });
    }
});

// POST /api/properties — Create a new property (protected)
router.post("/", authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const body = { ...req.body };

        // Standardize field names from frontend
        const price = body.price || (body.price_val ? parseFloat(String(body.price_val).replace(/[^0-9.]/g, "")) : 0);
        const image_url = body.image_url || body.img || "";

        // Only include fields that exist in the database
        const allowedColumns = [
            'name', 'type', 'price', 'location', 'image_url', 'description', 
            'status', 'available', 'availability_days', 'bedrooms', 'bathrooms', 'sqft',
            'property_status', 'year', 'features', 'specifications', 'images', 
            'host_name', 'host_avatar', 'host_location', 'condition'
        ];

        const insertData: Record<string, any> = {
            available: true,
            status: body.status || "Available",
            location: body.location || "",
            description: body.description || "",
            image_url,
            price
        };

        Object.keys(body).forEach(key => {
            if (allowedColumns.includes(key) && body[key] !== undefined) {
                insertData[key] = body[key];
            }
        });

        // Ensure critical fields are present
        if (!insertData.name || !insertData.type || !insertData.price) {
            res.status(400).json({ error: "Missing required property fields (name, type, price)" });
            return;
        }

        const { data, error } = await supabaseAdmin
            .from("properties")
            .insert(insertData)
            .select("*")
            .single();

        if (error) {
            console.error("Supabase insert error:", error);
            throw error;
        }
        res.status(201).json({
            id: data.id,
            name: data.name,
            price: `$${data.price.toLocaleString()}`,
            type: data.type,
            location: data.location,
            description: data.description,
            status: data.status,
            property_status: data.property_status,
            condition: data.condition || "Excellent",
        });
    } catch (err) {
        console.error("Error creating property:", err);
        res.status(500).json({ error: "Failed to create property" });
    }
});

// PUT /api/properties/:id — Update a property (protected)
router.put("/:id", authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const body = { ...req.body };
        
        // Map frontend fields
        if (body.img !== undefined && body.image_url === undefined) {
            body.image_url = body.img;
            delete body.img;
        }

        const allowedColumns = [
            'name', 'type', 'price', 'location', 'image_url', 'description', 
            'status', 'available', 'availability_days', 'bedrooms', 'bathrooms', 'sqft',
            'property_status', 'year', 'features', 'specifications', 'images', 
            'host_name', 'host_avatar', 'host_location', 'condition'
        ];

        const payload: Record<string, any> = {};
        Object.keys(body).forEach(key => {
            if (allowedColumns.includes(key)) {
                payload[key] = body[key];
            }
        });

        const { data, error } = await supabaseAdmin
            .from("properties")
            .update(payload)
            .eq("id", req.params.id)
            .select("*")
            .single();

        if (error || !data) {
            console.error("Supabase update error:", error);
            res.status(404).json({ error: "Property not found or update failed" });
            return;
        }

        res.json({
            id: data.id,
            name: data.name,
            price: `$${data.price.toLocaleString()}`,
            type: data.type,
            location: data.location,
            description: data.description,
            status: data.status,
            property_status: data.property_status,
        });
    } catch (err) {
        console.error("Error updating property:", err);
        res.status(500).json({ error: "Failed to update property" });
    }
});

// DELETE /api/properties/:id — Delete a property (protected)
router.delete("/:id", authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const { error } = await supabaseAdmin
            .from("properties")
            .delete()
            .eq("id", req.params.id);

        if (error) throw error;
        res.json({ success: true, id: req.params.id });
    } catch (err) {
        console.error("Error deleting property:", err);
        res.status(500).json({ error: "Failed to delete property. It may have active inquiries." });
    }
});

// POST /api/properties/bulk-delete — Bulk delete properties (protected)
router.post("/bulk-delete", authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const { ids } = req.body;
        if (!ids || !Array.isArray(ids)) {
            res.status(400).json({ error: "Invalid property IDs" });
            return;
        }
        const { error } = await supabaseAdmin
            .from("properties")
            .delete()
            .in("id", ids);

        if (error) throw error;
        res.json({ success: true, count: ids.length });
    } catch (err) {
        console.error("Error bulk deleting properties:", err);
        res.status(500).json({ error: "Failed to bulk delete properties" });
    }
});

export default router;

