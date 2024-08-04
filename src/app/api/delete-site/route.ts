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
            const markFind = user.mark.find((i) => i?.title === data?.markTitle)
            const siteFind = markFind?.site.find((i) => i?._id?.toString() === data?.id)
            // console.log(siteFind);

            if (siteFind) {
                siteFind.deleteOne()
                await user.save()
                return Response.json(
                    {
                        success: true,
                        message: "Deleted successfully"
                    },
                    { status: 201 })
            }
            return Response.json(
                {
                    success: false,
                    message: "Site not found"
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
        console.log("Error in deleting", error)
        return Response.json({
            success: false,
            message: "Error in deleting"
        }, {
            status: 500
        })
    }
}