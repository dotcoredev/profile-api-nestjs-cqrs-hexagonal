import { registerAs } from "@nestjs/config";

import { EnvZodValidate } from "@orbitral/common";
import { postgresConfigSchema, PostgresConfigType } from "../interfaces";

export const databaseEnv = registerAs<PostgresConfigType>("postgres", () => {
	const data = EnvZodValidate<PostgresConfigType>(
		postgresConfigSchema,
		process.env,
	);
	return data;
});
