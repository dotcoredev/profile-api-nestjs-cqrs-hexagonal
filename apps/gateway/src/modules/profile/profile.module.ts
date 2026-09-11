import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { ProfileResolver } from "./presentation/graphql/profile.resolver";
import { GetProfileHandler } from "./application/queries/get-profile/get-profile.handler";
import { ProfileReadRepository } from "./domain/ports/profile-read.repository";
import { PrismaProfileRepository } from "./infrastructure/persistence/prisma-profile.repository";

@Module({
	imports: [CqrsModule],

	providers: [
		ProfileResolver,

		GetProfileHandler,

		{
			provide: ProfileReadRepository,
			useClass: PrismaProfileRepository,
		},
	],
})
export class ProfileModule {}
