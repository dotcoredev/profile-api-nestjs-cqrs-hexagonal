import { databaseEnv } from "@/config";
import { PrismaModule } from "@/infra/prisma/prisma.module";
import { ProfileModule } from "@/modules/profile/profile.module";
import { Module } from "@nestjs/common";
import { HealthController } from "./app.controller";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [databaseEnv],
		}),
		PrismaModule,
		ProfileModule,
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: true,
		}),
	],
	controllers: [HealthController],
})
export class AppModule {}
