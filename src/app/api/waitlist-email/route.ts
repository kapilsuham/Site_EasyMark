import dbConnect from "@/lib/dbConnect"
import UserModel from "@/(more)/models/User"
export async function POST(request:Request) {
    await dbConnect()
    try {
        const {email}=await request.json()
        
        const existingUser=await UserModel.findOne({
            email})
            console.log(existingUser);
    if (existingUser) {
        return Response.json({
            success:true,
            message:"username already joined"

        },{status:500})
    }    
    else{
        const newUser=new UserModel({
         email 
        })
        await newUser.save()
        
    }
    return Response.json(
        {success:true,
            message:"User waitlisted"
        },
        {status:201})
 } catch (error) {
        console.log("Error waitlisting User",error)
        return Response.json({
            success:false,
            message:"Error waitlisting User"
        },{
            status:500
        })
    }
}