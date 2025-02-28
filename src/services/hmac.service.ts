import crypto from "crypto";
import { Buffer } from "buffer"; // Import Buffer explicitly

export function generateHMAC(otp: string, secret: string): string {
  return crypto.createHmac("sha256", secret).update(otp).digest("hex");
}

export function reverseHMAC(hmac: any, secret: string, otp: string): string {
    return crypto.createHmac("sha256", secret).update(otp).digest("hex") === hmac ? otp : "ERROR: HMAC does not match";
}