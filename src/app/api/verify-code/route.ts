import dbConnect from "@/lib/dbConnect";
import UserModel from "@/(more)/models/User";
export async function POST(request: Request) {
    await dbConnect()
    try {
        const { username, code } = await request.json()
        const decodedUsername = decodeURI(username)
        const user = await UserModel.findOne({ username: decodedUsername })
        if (!user) {
            return Response.json({
                success: false,
                message: 'Account not found'
            },
                {
                    status: 500
                })
        }
        const isCodeValid = user.verifyCode === code
        const isCodeExpired = new Date(user.verifyCodeExpiry) > new Date()
        if (user.isVerified) {
            if (isCodeValid && isCodeExpired) {
                user.isVerified = true,
                    user.LifeTimeHasAccess = true
                await user.save()

                return Response.json({
                    success: true,
                    message: 'User verified successfully'
                },
                    {
                        status: 200
                    })
            }
          
        }
        if (isCodeValid && isCodeExpired && !user.isVerified) {
            user.isVerified = true,
                await user.save()

            return Response.json({
                success: true,
                message: 'Account verified successfully'
            },
                {
                    status: 200
                })
        }
        else if (!isCodeValid) {
            return Response.json({
                success: false,
                message: 'Verification code is incorrect'
            },
                {
                    status: 400
                })
        }
        else if (!isCodeExpired) {
            return Response.json({
                success: false,
                message: 'Verification code is expired'
            },
                {
                    status: 400
                })
        }
    } catch (error) {
        console.log("Error checking username", error);
        return Response.json({
            success: false,
            message: "Error checking username"
        },
            {
                status: 500
            })

    }
}