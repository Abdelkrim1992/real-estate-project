import { supabase } from "./src/config/supabase.js";

async function testTrigger() {
  const email = `trigger-test-${Math.floor(Math.random() * 1000)}@gmail.com`;
  const password = 'Password123!';
  const fullName = 'Trigger Test';

  console.log(`Testing trigger for ${email}...`);
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName }
    }
  });

  if (error) {
    console.error("❌ Signup failed:", error.message);
    return;
  }

  console.log("✅ Signup successful. User ID:", data.user?.id);

  // Wait a bit for trigger to run
  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log("Checking if profile was created...");
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', data.user?.id)
    .single();

  if (profileError) {
    console.error("❌ Profile creation failed (trigger might be broken):", profileError.message);
  } else {
    console.log("✅ Profile created successfully!", profile);
  }
}

testTrigger();
