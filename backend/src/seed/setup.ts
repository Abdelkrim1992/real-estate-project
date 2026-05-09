import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "";

const supabase = createClient(supabaseUrl, supabaseKey);

const SEED_DATA = [
    { 
        name: "Modern Beverly Hills Estate", 
        type: "Villa", 
        price: 12500000, 
        location: "Beverly Hills, CA", 
        image_url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80", 
        description: "An architectural masterpiece in the heart of Beverly Hills.", 
        available: true, 
        bedrooms: 6, 
        bathrooms: 8, 
        sqft: 8500, 
        property_status: "Sale"
    },
    { 
        name: "Penthouse at the Azure", 
        type: "Apartment", 
        price: 45000, 
        location: "New York, NY", 
        image_url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80", 
        description: "Live above the clouds in this stunning duplex penthouse.", 
        available: true, 
        bedrooms: 3, 
        bathrooms: 4, 
        sqft: 3200, 
        property_status: "Rent"
    },
];

async function setup() {
  console.log("🔧 Luxora Real Estate Database Setup");
  console.log("=".repeat(50));

  // Check if properties table exists
  console.log("\n📋 Checking if tables exist...");
  const { error: propError } = await supabase.from("properties").select("id").limit(1);

  if (propError && propError.message.includes("does not exist")) {
    console.log("\n❌ Tables don't exist yet. You need to create them first.\n");
    console.log("╔" + "═".repeat(58) + "╗");
    console.log("║  PLEASE DO THE FOLLOWING:                                ║");
    console.log("╠" + "═".repeat(58) + "╣");
    console.log("║                                                          ║");
    console.log("║  1. Copy ALL the SQL from:                               ║");
    console.log("║     backend/real-estate-migration.sql                    ║");
    console.log("║                                                          ║");
    console.log("║  2. Paste in the Supabase SQL Editor and click RUN       ║");
    console.log("║                                                          ║");
    console.log("║  3. Come back and run: npm run setup                     ║");
    console.log("║                                                          ║");
    console.log("╚" + "═".repeat(58) + "╝");
    process.exit(1);
  }

  if (propError) {
    console.error("❌ Unexpected error:", propError.message);
    process.exit(1);
  }

  console.log("✅ Properties table exists!");

  // Seed data
  console.log("\n🗑️  Clearing existing properties...");
  await supabase.from("properties").delete().neq("id", "00000000-0000-0000-0000-000000000000");

  console.log("🌱 Seeding properties...");
  const { data: inserted, error: insertError } = await supabase
    .from("properties")
    .insert(SEED_DATA)
    .select();

  if (insertError) {
    console.error("❌ Seed error:", insertError.message);
    process.exit(1);
  }

  console.log(`\n✅ Successfully seeded ${inserted?.length || 0} properties:`);
  inserted?.forEach((prop) => console.log(`   🏠 ${prop.name}`));
  console.log("\n🎉 Setup complete! Your database is ready.");
}

setup();

