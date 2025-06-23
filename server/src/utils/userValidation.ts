import { z } from "zod"


export const userProfileSchema = z.object({
        username: z.string().min(3, { message: "username cannot be empty!" }),
        password: z.string().min(3, { message: "password cannot be empty!" })
})
