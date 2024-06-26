import mongoose,{Schema,Document} from "mongoose";
export interface User extends Document{
    username:string,
    email:string,
    password:string,
    verifyCode:string,
    verifyCodeExpiry:Date,
    isVerified:boolean, 
    oneTimeHasAccess:boolean, 
    subscriptionHasAccess:boolean,
    userImage:string,
    createdAt:Date,
}
const UserSchema:Schema<User>=new Schema({
    username:{
        type: String,
        required:[true,'username is required'],
        trim:true,
        unique:true
    } ,
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        trim:true,
        match:[/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,"please use a valid email"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    verifyCode:{
        type:String,
        required:[true,'Verify Code is required']
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true,'verify Code Expiry is required']
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    oneTimeHasAccess:{
        type:Boolean,
        default:false,
    },
   
    subscriptionHasAccess:{
        type:Boolean,
        default:false
    },
    userImage:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    
})
const UserModel=(mongoose.models.User as mongoose.Model<User>)|| mongoose.model<User>("User",UserSchema)
export default UserModel




/////////////////////////////////// for waitlist email




// export interface UserWaitlist extends Document{
//     email:string,
// }
// const UserSchema:Schema<UserWaitlist>=new Schema({
//     email:{
//         type:String,
//         required:[true,"email is required"],
//         unique:true,
//         match:[/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,"please use a valid email"]
//     }
// })
// const UserModel=(mongoose.models.User as mongoose.Model<UserWaitlist>)|| mongoose.model<UserWaitlist>("UserWaitlist",UserSchema)
// export default UserModel