import { z } from "zod"

export const addmark=z.object({
    title:z.string().max(10,"title can't exceed 20 charactor"),
})
