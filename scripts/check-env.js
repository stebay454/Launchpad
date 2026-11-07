import { findMissing } from "./env.js";

const required = ["API_URL", "API_KEY"];
const missing = findMissing(process.env, required);

if (missing.length > 0) {
  console.error(`Missing required env vars: ${missing.join(", ")}`);
  process.exitCode = 1;
} else {
  console.log("All required env vars are present.");
}