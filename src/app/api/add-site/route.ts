import UserModel, { Mark, Site } from "@/(more)/models/User"
import dbConnect from "@/lib/dbConnect"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/options"

export async function POST(request: Request) {

    await dbConnect()
    try {
        const session = await getServerSession(authOptions)
        // console.log(session);

        const { siteData, param } = await request.json()
        // console.log('mmmmm===', param);
        const user = await UserModel.findOne({ email: session?.user.email })

        const markFind = user?.mark.find((i) => i.title === param.mark)
        if (user && markFind) {
            // console.log(Object.keys(markFind.site).length);

            if (user.LifeTimeHasAccessGold || Object.keys(markFind.site).length < 5) {
                const rank = markFind?.site[markFind?.site.length - 1]?.rank ?? 0;
                const title = siteData?.title || '';
                const icon = siteData?.icon || '';
                const page = siteData?.page || '';
                let home = siteData?.home || '';
                if (siteData?.home.slice(-1) === '/') {
                    home = siteData?.home.slice(0, -1) || '';
                }
                const newSite = { title, home, icon, page, rank: rank + 1 }
                markFind?.site.push(newSite as Site)
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