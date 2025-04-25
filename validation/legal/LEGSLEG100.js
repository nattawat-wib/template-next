import { z } from "zod";

export const validation = {
    user: z.object({
        firstName: z.string().min(10),
        lastName: z.string(),
        age: z.number()
    })
}