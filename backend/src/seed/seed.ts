import { supabaseAdmin } from "../config/supabase.js";
import dotenv from "dotenv";

dotenv.config();

const propertiesData = [
    { 
        name: "Modern Beverly Hills Estate", 
        type: "Villa", 
        price: 12500000, 
        location: "Beverly Hills, CA", 
        image_url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80", 
        description: "An architectural masterpiece in the heart of Beverly Hills. This sprawling estate offers unparalleled luxury with panoramic city views, an infinity pool, and a private cinema.", 
        available: true, 
        bedrooms: 6, 
        bathrooms: 8, 
        sqft: 8500, 
        property_status: "Sale",
        condition: "Excellent"
    },
    { 
        name: "Penthouse at the Azure", 
        type: "Apartment", 
        price: 45000, 
        location: "New York, NY", 
        image_url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80", 
        description: "Live above the clouds in this stunning duplex penthouse. Featuring floor-to-ceiling windows overlooking Central Park, a private terrace, and 24/7 concierge service.", 
        available: true, 
        bedrooms: 3, 
        bathrooms: 4, 
        sqft: 3200, 
        property_status: "Rent",
        condition: "New"
    },
    { 
        name: "Coastal Contemporary Mansion", 
        type: "Villa", 
        price: 8900000, 
        location: "Malibu, CA", 
        image_url: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80", 
        description: "Breathtaking oceanfront living with direct beach access. This contemporary home features open-concept living spaces, a chef's kitchen, and a wraparound sun deck.", 
        available: true, 
        bedrooms: 5, 
        bathrooms: 6, 
        sqft: 5800, 
        property_status: "Sale",
        condition: "Excellent"
    },
    { 
        name: "Skyline View Loft", 
        type: "Apartment", 
        price: 2500000, 
        location: "Chicago, IL", 
        image_url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80", 
        description: "A sophisticated urban retreat featuring industrial-chic design elements, high ceilings, and stunning views of the Chicago skyline.", 
        available: true, 
        bedrooms: 2, 
        bathrooms: 2, 
        sqft: 1800, 
        property_status: "Sale",
        condition: "New"
    },
    { 
        name: "Lakefront Serenity Villa", 
        type: "Villa", 
        price: 15000, 
        location: "Lake Tahoe, NV", 
        image_url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80", 
        description: "Escape to nature in this luxurious lakefront villa. Perfect for year-round entertainment with a private dock, hot tub, and cozy stone fireplaces.", 
        available: true, 
        bedrooms: 4, 
        bathrooms: 5, 
        sqft: 4200, 
        property_status: "Rent",
        condition: "Excellent"
    }
];

async function seed() {
    console.log("🌱 Seeding Luxora database...");

    // Clear existing properties
    const { error: deleteError } = await supabaseAdmin.from("properties").delete().neq("id", "00000000-0000-0000-0000-000000000000");
    if (deleteError) {
        console.error("Error clearing properties:", deleteError.message);
    }

    // Insert properties
    const { data, error } = await supabaseAdmin.from("properties").insert(propertiesData).select();

    if (error) {
        console.error("Error seeding properties:", error.message);
        process.exit(1);
    }

    console.log(`✅ Seeded ${data.length} properties successfully!`);
    data.forEach((prop) => console.log(`   - ${prop.name} (${prop.id})`));

    process.exit(0);
}

seed();

