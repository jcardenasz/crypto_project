import crypto from "crypto";

export function generateHMAC(message: string, secret: string): string {
  return crypto.createHmac("sha256", secret).update(message).digest("hex");
}
