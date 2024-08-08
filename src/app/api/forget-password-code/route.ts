import { sendVerificationEmail } from "@/(more)/helpers/sendVerificationEmail"
import dbConnect from "@/lib/dbConnect"
import UserModel from "@/(more)/models/User"
export async function POST(request: Request) {
    await dbConnect()
    try {
        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString()
        const expiryDate = new Date()
        expiryDate.setHours(expiryDate.getHours() + 1)
        const { email, username } = await request.json()
        if (email) {
            await UserModel.findOneAndUpdate({
                email,
                isVerified: true
            }, { verifyCode, verifyCodeExpiry: expiryDate })
            const user = await UserModel.findOne({ email, isVerified: true })
            // console.log(user?.username);

            if (user) {
                const username = user.username
                // send verification mail
                const emailResponse = await sendVerificationEmail(
                    email,
                    username,
                    verifyCode
                )
                if (!emailResponse.message) {
                    return Response.json(
                        {
                            success: false,
                            message: emailResponse.message
                        },
                        { status: 500 }
                    )
                }
            }
            return Response.json(
                {
                    data: user,
                    message:'Code Send'
                },
                { status: 201 })
        }
        if (username) {
            await UserModel.findOneAndUpdate({
                username,
                isVerified: true
            }, { verifyCode, verifyCodeExpiry: expiryDate })
            const user = await UserModel.findOne({ username })
            if (user) {
                const email = user?.email
                // send verification mail
                const emailResponse = await sendVerificationEmail(
                    email,
                    username,
                    verifyCode
                )
                if (!emailResponse.message) {
                    return Response.json(
                        {
                            success: false,
                            message: emailResponse.message
                        },
                        { status: 500 }
                    )
                }
            }
            return Response.json(
                {
                    data: user
                },
                { status: 201 })
        }

    } catch (error) {
        console.log("Error sending code", error)
        return Response.json({
            success: false,
            message: "Error sending code"
        }, {
            status: 500
        })
    }
}