import dbConnect from "@/lib/dbConnect"
import UserModel from "@/(more)/models/User"
import bcrypt from "bcryptjs"
export async function POST(request: Request) {
    await dbConnect()
    try {
        const { username, password } = await request.json()        
        const user = await UserModel.findOne({ username, isVerified: true,oneTimeHasAccess:true })
        
        if (user) {
            const hashedPassword = await bcrypt.hash(password, 10)
            user.password = hashedPassword
            user.oneTimeHasAccess=false
            await user.save()
        }


        return Response.json(
            {
                success: true,
                message: "password updated successfully"
            },
            { status: 201 })
    } catch (error) {
        // console.log("Error updating password",error)
        return Response.json({
            success: false,
            message: "Error updating password"
        }, {
            status: 500
        })
    }
}