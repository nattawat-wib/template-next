import { z, type ZodTypeAny } from "zod";


const zto = (schema: any): object => {
    return schema.shape
}

export const validation = {
    user: z.object({
        firstName: z.string().min(10).default("test default for firstname"),
        lastName: z.string().default(""),
        age: z.number().default(20),
    })
}

export const initForm = {
    user: zto(validation.user),
}

export type InitForm = {
    User: z.infer<typeof validation.user>;
}