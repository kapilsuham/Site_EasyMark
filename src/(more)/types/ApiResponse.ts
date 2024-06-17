import { User } from "../models/User";

export interface ApiResponse{
    sucess:boolean,
    message:string,
    data?:User
}