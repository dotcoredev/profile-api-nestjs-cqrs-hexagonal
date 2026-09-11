import { z } from "zod";

export const postgresConfigSchema = z
	.object({
		PROFILE_DATABASE_URI: z.string().min(1),
	})
	.transform((env) => ({
		connectionString: env.PROFILE_DATABASE_URI,
	}));

export type PostgresConfigType = z.infer<typeof postgresConfigSchema>;
