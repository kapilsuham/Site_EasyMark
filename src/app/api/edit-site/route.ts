import UserModel, { Mark, Site } from "@/(more)/models/User"
import dbConnect from "@/lib/dbConnect"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/options"

export async function POST(request: Request) {

    await dbConnect()
    try {
        const session = await getServerSession(authOptions)
        // console.log(session);

        const { siteData, param, markparam } = await request.json()
        // console.log('mmmmm===', markparam);
        const user = await UserModel.findOne({ email: session?.user.email })

        if (user) {
            const markFind = user.mark.find((i) => i.title === markparam)
            // console.log(markFind);
            
            const site = markFind?.site.find((i) => i.title === param.mark)
            // console.log(site);
            
            if (site) {

                site.title = siteData?.title || '';
                site.home = siteData?.home || '';
                site.icon = siteData?.icon || '';
                site.page = siteData?.page || '';
                if (siteData?.home.slice(-1) === '/') {
                    site.home = siteData?.home.slice(0, -1) || '';
                }
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
                    success: true,
                    message: "site not found"
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