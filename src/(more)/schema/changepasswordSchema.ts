import { z } from "zod"

export const changepasswordSchema=z.object({
    password:z.string().min(6,"password must be atleast 6 charactor")})    