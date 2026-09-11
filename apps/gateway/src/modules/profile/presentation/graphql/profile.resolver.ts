import { Query, Resolver } from "@nestjs/graphql";
import { QueryBus } from "@nestjs/cqrs";
import { ProfileModel } from "./models/profile.model";
import { GetProfileQuery } from "../../application/queries/get-profile/get-profile.query";

@Resolver()
export class ProfileResolver {
	constructor(private readonly queryBus: QueryBus) {}

	@Query(() => ProfileModel, { nullable: true })
	profile() {
		return this.queryBus.execute(new GetProfileQuery());
	}
}
