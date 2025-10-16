import { z } from 'zod';

const AppConfigSchema = z.object({
  apiUrl: z
    .string({
      error: `Please provide the variable NEXT_PUBLIC_API_URL`,
    })
    .url({
      message: 'The variable NEXT_PUBLIC_API_URL must be a valid URL',
    }),
});

const appConfig = AppConfigSchema.parse({
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
});

export default appConfig;
