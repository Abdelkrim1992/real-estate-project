import { supabase } from "./src/config/supabase.js";

async function testConnection() {
  console.log("Testing Supabase connection...");
  console.log("URL:", process.env.SUPABASE_URL);
  
  const { data, error } = await supabase.from('properties').select('count', { count: 'exact', head: true });
  
  if (error) {
    console.error("❌ Connection failed:", error.message);
  } else {
    console.log("✅ Connection successful! Found properties table.");
  }
}

testConnection();
