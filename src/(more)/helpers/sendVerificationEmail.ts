import { resend } from "@/lib/resend";
import { ApiResponse } from "@/(more)/types/ApiResponse";
import VerificationEmail from "../../../emails/VerificationEmail";
import { SITE_NAME } from "../../app/ConfigApp";
export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string
):Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: `Verification code | ${SITE_NAME}`,
            react: VerificationEmail({username,otp:verifyCode}),
          });
        return {
            sucess:true,message:"verification message send"
        }
    } catch (emailError) {
        console.log("Error send verification email",emailError);
        return {
            sucess:false,message:"Failed to send message"
        }
    }
}