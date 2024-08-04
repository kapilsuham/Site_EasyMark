import UserModel, { Mark, Site } from "@/(more)/models/User"
import dbConnect from "@/lib/dbConnect"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/options"

export async function POST(request: Request) {

    await dbConnect()
    try {
        const session = await getServerSession(authOptions)
        // console.log(session);
        const param = await request.json()
        // console.log('===', param);
        const user = await UserModel.findOne({ email: session?.user.email })
        if (user) {
            const markFind = user.mark.find((i) => i.title === param.mark)
            console.log(markFind);
            
            if (!markFind) {
                return Response.json(
                    {
                        success: false,
                        message: "Mark does not exists"
                    },
                    { status: 201 })
            }
            markFind.deleteOne()
            await user.save()
            return Response.json(
                {
                    success: true,
                    message: "Mark deleted"
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
        console.log("Error in updating", error)
        return Response.json({
            success: false,
            message: "Error in updating"
        }, {
            status: 500
        })
    }
}