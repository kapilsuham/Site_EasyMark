import { z } from "zod"

export const forgetPasswordCodeSchema=z.object({
    password:z.string().min(6,"password must be atleast 6 charactor"),
    code:z.string().length(6,"code require 6 character")
    })