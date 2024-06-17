import dbConnect from "@/lib/dbConnect";
import UserModel from "@/(more)/models/User";
import {z} from 'zod'
import { UserNameValidation } from "@/(more)/schema/signUpSchema";


const UsernameQuerySchema= z.object({
    username:UserNameValidation
})
export async function GET(request:Request) {
   await dbConnect()
   try {
    const {searchParams}=new URL(request.url)
    const queryParam={
        username:searchParams.get('username')  
    }
    const result=UsernameQuerySchema.safeParse(queryParam)
    // console.log(result);
    if (!result.success) {
        const usernameErrors=result.error.format().username?._errors || []
        return Response.json({
            success:false,
            message:usernameErrors?.length>0?usernameErrors.join(', '):'Invalid query parameter'
        },
        {
            status:400
        })
    }
    const {username}=result.data
    const existingVerifiedUser=await UserModel.findOne({username,isVerified:true})
    // console.log(existingVerifiedUser);
    
    if (existingVerifiedUser) {
        return Response.json({
            success:false,
            message:'Already taken'
        },
        {
            status:400
        })
    }
    return Response.json({
        success:true,
        message:'unique'
    },
    {
        status:400
    })
   } catch (error) {
    console.log("Error checking username",error);
    return Response.json({
        success:false,
        message:"Error checking username"
    },
    {
        status:500
    })
    
   }
}