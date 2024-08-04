import UserModel from "@/(more)/models/User"
import dbConnect from "@/lib/dbConnect"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/options"

export async function POST(request: Request) {

    await dbConnect()
    try {
        const session = await getServerSession(authOptions)
        // console.log(session);
        const data = await request.json()
        console.log('===', data);
        const user = await UserModel.findOne({ email: session?.user.email })
        if (user) {
            const markFind = user.mark.find((i) => i?.title === data?.markTitle)
            // console.log(markFind);
            
            if (markFind) {
                if (data?.move === 'up') {
                    const markFindNext = user.mark.find((i) => i?.title === data?.prev)
                    console.log(markFindNext)
                    if (markFindNext) {
                        markFindNext.rank = markFind.rank;
                        markFind.rank = markFind.rank - 1
                        await user.save()
                        return Response.json(
                            {
                                success: true,
                                message: "Updated successfully"
                            },
                            { status: 201 })
                    }
                }
                if (data?.move === 'down') {
                    const markFindBackward = user.mark.find((i) => i?.title === data?.next)
                    if (markFindBackward) {
                        markFindBackward.rank = markFind.rank;
                        markFind.rank = markFind.rank + 1
                        await user.save()
                        return Response.json(
                            {
                                success: true,
                                message: "Updated successfully"
                            },
                            { status: 201 })
                    }
                }
                return Response.json(
                    {
                        success: false,
                        message: "Mark not found"
                    },
                    { status: 404 })

            }
            return Response.json(
                {
                    success: false,
                    message: "Mark not found"
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