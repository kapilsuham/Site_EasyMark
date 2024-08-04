import UserModel, { Mark, Site } from "@/(more)/models/User"
import dbConnect from "@/lib/dbConnect"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/options"

export async function POST(request: Request) {

    await dbConnect()
    try {
        const session = await getServerSession(authOptions)
        // console.log(session);
        const data = await request.json()
        // console.log('===', data);
        const user = await UserModel.findOne({ email: session?.user.email })
        if (user) {
            const markFind = user.mark.find((i) => i.title === data.title)
            
            if (!markFind) {
                if (user. || Object.keys(user.mark).length < 2) {

                    const rank = user?.mark.length ?? 0;
                    const title = data?.title;
                    const site: any = [];
                const newMark = { title, site, rank }
                user?.mark?.push(newMark as Mark)
                await user.save()
                return Response.json(
                    {
                        success: true,
                        message: "updated successfully"
                    },
                    { status: 201 })
                }
                return Response.json(
                    {
                        success: false,
                        message: "Plan limit reached"
                    },
                    { status: 401 })
            }
                return Response.json(
                {
                    success: false,
                    message: "Mark already exists"
                },
                { status: 401 })
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