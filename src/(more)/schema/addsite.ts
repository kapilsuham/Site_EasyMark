import { z } from "zod"

export const addsite=z.object({
    title:z.string().max(20,"title can't exceed 20 charactor"),
    home:z.string(),
    page:z.string(),
    icon:z.string(),
})
