import { generateHMAC, reverseHMAC } from "../services/hmac.service";
import { generateOTP } from "../services/otp.service";

export function testServices(): void {
    const generateOTPkeke = generateOTP();
    const HMAC = process.env.SECRETO ? generateHMAC(generateOTPkeke, process.env.SECRETO) : console.log("non funker");
    console.log("OTP: "+generateOTPkeke+"\n");
    console.log("HMAC: "+HMAC+"\n");
    const secreto = process.env.SECRETO;
    console.log("HMAC REVERSO: " + (secreto ? reverseHMAC(HMAC, secreto, generateOTPkeke) : "no funko el desdigest") + "\n");
    console.log("HMAC REVERSO con otro secreto: " + (reverseHMAC(HMAC, 'secreto', generateOTPkeke)) + "\n");
}