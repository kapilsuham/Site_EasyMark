import { z } from "zod"

export const verificationCodeSchema=z.object({
    code:z.string().length(6,"code require 6 character")
    })