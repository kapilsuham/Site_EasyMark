import UserModel, { Mark, Site } from "@/(more)/models/User"
import dbConnect from "@/lib/dbConnect"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/options"

export async function POST(request: Request) {

    await dbConnect()
    try {
        const session = await getServerSession(authOptions)
        // console.log(session);
        const user = await UserModel.findOne({ email: session?.user.email })
        if (user) {
            user.mark = [] 
            // console.log(marks);
            
            await user.save()
            return Response.json(
                {
                    success: false,
                    message: "Account reset successfully"
                },
                { status: 201 })
        }
        return Response.json(
            {
                success: false,
                message: "user note found"
            },
            { status: 404 })
    } catch (error) {
        console.log("Error in reseting", error)
        return Response.json({
            success: false,
            message: "Error in reseting"
        }, {
            status: 500
        })
    }
}