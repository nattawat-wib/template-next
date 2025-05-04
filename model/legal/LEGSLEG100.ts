import zto from "@/helper/zto";
import { z } from "zod";

export const validation = {
    user: z.object({
        firstName: z.string().optional().default("string"),
        // lastName: z.string().default("string"),
        // age: z.number().max(25).min(10).default(22),
        // array: z.string().array().optional().default([]),
        // enum: z.enum(["A", "B"]).optional().default("B"),
        // boolean: z.boolean().default(true),
        // date: z.date(),
        // never: z.string().email(),
    })
}

export const initForm = {
    user: zto(validation.user),
}

export interface InitForm {
    User: z.infer<typeof validation.user>;
}