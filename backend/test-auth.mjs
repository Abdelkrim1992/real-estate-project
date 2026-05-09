const API_URL = 'http://localhost:5000/api';

async function testAuth() {
  const email = `john.doe.${Math.floor(Math.random() * 1000)}@gmail.com`;
  const password = 'Password123!';
  const fullName = 'Test User';

  console.log(`Testing registration for ${email}...`);
  try {
    const regRes = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, full_name: fullName }),
    });
    const regData = await regRes.json();
    console.log("Registration response:", regRes.status, regData);

    if (regRes.ok) {
      console.log(`Testing login for ${email}...`);
      const loginRes = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const loginData = await loginRes.json();
      console.log("Login response:", loginRes.status, loginData);
    }
  } catch (err) {
    console.error("Test failed:", err);
  }
}

testAuth();
