import UserModel, { Mark, Site } from "@/(more)/models/User"
import dbConnect from "@/lib/dbConnect"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/options"

export async function POST(request: Request) {

    await dbConnect()
    try {
        const session = await getServerSession(authOptions)
        // console.log(session);
        await UserModel.deleteOne({ email: session?.user.email })
            return Response.json(
                {
                    success: false,
                    message: "Account deleted successfully"
                },
                { status: 201 })
    } catch (error) {
        console.log("Error in deleting", error)
        return Response.json({
            success: false,
            message: "Error in deleting"
        }, {
            status: 500
        })
    }
}