import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function listAllTables() {
    console.log("Listing all tables in 'public' schema...");
    const { data: tables, error } = await supabase.from('pg_tables').select('tablename').eq('schemaname', 'public');

    if (error) {
        // Fallback: try to select from a known table and check error message
        console.log("Checking tables via query fallback...");
        const tablesToTry = ['cars', 'profiles', 'bookings', 'reviews', 'messages', 'notifications', 'agency_settings'];
        for (const table of tablesToTry) {
            const { error: te } = await supabase.from(table).select('id').limit(0);
            if (te) {
                console.log(`❌ Table '${table}' check error: ${te.message} (${te.code})`);
            } else {
                console.log(`✅ Table '${table}' exists.`);
            }
        }
    } else {
        console.log("Tables found:", tables?.map(t => t.tablename));
    }
}

listAllTables();
