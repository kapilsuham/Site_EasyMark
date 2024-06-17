import { sendVerificationEmail } from "@/(more)/helpers/sendVerificationEmail"
import dbConnect from "@/lib/dbConnect"
import UserModel from "@/(more)/models/User"
export async function POST(request:Request) {
    await dbConnect()
    try {
        const verifyCode=Math.floor(100000+Math.random()*900000).toString()
        
        const expiryDate=new Date()
        expiryDate.setHours(expiryDate.getHours()+1)
        
        
        
        const {username,email}=await request.json()
        await UserModel.findOneAndUpdate({
            username,
            email,
            isVerified:false
        },{verifyCode,verifyCodeExpiry:expiryDate})    

    // send verification mail
    const emailResponse=await sendVerificationEmail(
        email,
        username,
        verifyCode
    )
    if (!emailResponse.message) {
        return Response.json(
            {success:false,
             message:emailResponse.message
            },
            {status:500}
        )}
    return Response.json(
        {success:true,
            message:"code send successfullyl"
        },
        {status:201})
 } catch (error) {
        console.log("Error sending code",error)
        return Response.json({
            success:false,
            message:"Error sending code"
        },{
            status:500
        })
    }
}