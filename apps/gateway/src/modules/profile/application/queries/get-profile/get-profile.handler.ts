import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetProfileQuery } from "./get-profile.query";
import { ProfileReadRepository } from "@/modules/profile/domain/ports/profile-read.repository";

@QueryHandler(GetProfileQuery)
export class GetProfileHandler implements IQueryHandler<GetProfileQuery> {
	constructor(private readonly profileRepository: ProfileReadRepository) {}

	async execute() {
		const profile = await this.profileRepository.getProfile();
		return profile;
	}
}
