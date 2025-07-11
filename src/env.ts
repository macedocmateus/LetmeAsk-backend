import { z } from 'zod'

const envSchema = z.object({
    // Coerce converte string para number
    PORT: z.coerce.number().default(3333),
    DATABASE_URL: z.string().url().startsWith('postgresql://')
})

export const env = envSchema.parse(process.env)