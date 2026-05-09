import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkCars() {
    console.log("Checking cars in database...");
    const { data: cars, error } = await supabase.from('cars').select('*');

    if (error) {
        console.error("❌ Failed to fetch cars:", error.message);
    } else {
        console.log("Cars found:", cars?.length);
        cars?.forEach(car => {
            console.log(`- ${car.name}: image_url = "${car.image_url}"`);
        });
    }
}

checkCars();
