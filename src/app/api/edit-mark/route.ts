import UserModel, { Mark, Site } from "@/(more)/models/User"
import dbConnect from "@/lib/dbConnect"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/options"

export async function POST(request: Request) {

    await dbConnect()
    try {
        const session = await getServerSession(authOptions)
        
        const { siteData, id } = await request.json()
        console.log(id);
        // console.log('mmmmm===', markparam);
        const user = await UserModel.findOne({ email: session?.user.email })

        if (user) {
            const markFind = user?.mark.find((i) => i?._id?.toString() === id)
            // console.log(markFind);

            if (markFind) {

                markFind.title = siteData?.title || '';
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
                    message: "Mark note found"
                },
                { status: 404 })
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