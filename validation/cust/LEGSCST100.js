const { z } = require("zod");

export const formUserValidation = z.object({
    firstName: z.string().min(10),
    lastName: z.string(),
})