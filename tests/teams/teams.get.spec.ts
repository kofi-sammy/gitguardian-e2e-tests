import {test, expect } from "@playwright/test";
import dotenv from 'dotenv'; 
dotenv.config();

const BASE_URL: string = process.env.URL || '';  
const PERSONAL_ACCESS_TOKEN: string = process.env.API_KEY || '';  

test('Users can list teams', async ({request}) => {
  // Make an authenticated request to list teams.
  const response = await request.get(`${BASE_URL}/teams`, {
    headers: {
      Authorization: `Token ${PERSONAL_ACCESS_TOKEN}`,
    },
  });
  
  expect(response.status()).toBe(200);
  const body = await response.json();

  expect(body.length).toBeGreaterThan(0);

  const firstTeam = body[0];
  expect(firstTeam.id).toBeGreaterThan(0);
  expect(firstTeam.name).toBeTruthy();
  const isGlobal = typeof firstTeam.is_global;
  expect(isGlobal).toBe('boolean');
});