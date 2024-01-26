import { test, expect } from "@playwright/test";
import dotenv from 'dotenv'; 
dotenv.config();

const BASE_URL: string = process.env.URL || '';  
const PERSONAL_ACCESS_TOKEN: string = process.env.API_KEY || '';  

test('Users can list audit logs', async ({ request }) => {
    // Make an authenticated request to list audit logs.
    const response = await request.get(`${BASE_URL}/audit_logs`, {
      headers: {
        Authorization: `Token ${PERSONAL_ACCESS_TOKEN}`,
      },
    });

    expect(response.status()).toBe(200);
    const body = await response.json();

    expect(body.length).toBeGreaterThan(0);
    
    const firstLog = body[0];
    expect(firstLog.id).toBeGreaterThan(0);
    expect(firstLog.member_id).toBeGreaterThan(0);
    expect(firstLog.member_email).toBeTruthy();
    expect(firstLog.member_name).toBeTruthy();
    expect(firstLog.date).toBeTruthy();
    expect(['OTHER', 'UPDATE', 'CREATE']).toContain(firstLog.action_type);
    expect(firstLog.ip_address).toBeTruthy();
});
