import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/(more)/models/User";

export async function GET(request: Request) {    
    const session = await getServerSession(authOptions)
    try {
            await dbConnect()
            const username = session!.user.username
            const user = await UserModel.findOne({ username })
            if (user) {
                const LifeTimeHasAccess = user.LifeTimeHasAccess
                const subscriptionHasAccess = user.subscriptionHasAccess
                return Response.json({
                    data: { LifeTimeHasAccess, subscriptionHasAccess },
                    message: 'user details send'
                })
            }
            return Response.json({
                success: false,
                message: 'Error finding user details in database'
            },
                {
                    status: 400
                })
       
    } catch (error) {
        console.log("Error finding user details in database", error);
        return Response.json({
            success: false,
            message: "Error finding user details in database"
        },
            {
                status: 500
            })

    }
}