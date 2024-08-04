import dbConnect from "@/lib/dbConnect"
import UserModel from "@/(more)/models/User"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/options"
import Mark from "@/app/(app)/mark/[mark]/page"

export async function POST(request: Request) {
    
    await dbConnect()
    try {
        const session = await getServerSession(authOptions)
        // console.log(session);
        const param = await request.json()
        // console.log('mmmmm===', param);
        const user = await UserModel.findOne({ email: session?.user.email })
        const mark = user?.mark.find((i)=>i.title===param.mark)
        if (user && mark) {            
            return Response.json(
                {
                    success: true,
                    data:mark,
                    message: "Mark fetched successfully"
                },
                { status: 201 })
            }
            return Response.json(
                {
                    success: false,
                    message: "User not found"
                },
                { status: 404 })
    } catch (error) {
        // console.log("Error updating password",error)
        return Response.json({
            success: false,
            message: "Error updating Mark"
        }, {
            status: 500
        })
    }
}

export async function GET() {
    
    await dbConnect()
    try {
        const session = await getServerSession(authOptions)
        // console.log(session);
        const user = await UserModel.findOne({ email: session?.user.email })
        if (user) {            
            return Response.json(
                {
                    success: true,
                    data:user.mark,
                    message: "Mark fetched successfully"
                },
                { status: 201 })
            }
            return Response.json(
                {
                    success: false,
                    message: "User not found"
                },
                { status: 404 })
    } catch (error) {
        // console.log("Error updating password",error)
        return Response.json({
            success: false,
            message: "Error updating Mark"
        }, {
            status: 500
        })
    }
}