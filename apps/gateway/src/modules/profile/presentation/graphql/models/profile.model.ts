import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SkillModel {
	@Field()
	name: string;
}

@ObjectType()
export class ExperienceModel {
	@Field()
	company: string;

	@Field()
	position: string;
}

@ObjectType()
export class ProjectModel {
	@Field()
	name: string;
}

@ObjectType()
export class ProfileModel {
	@Field()
	name: string;

	@Field()
	description: string;

	@Field(() => [SkillModel])
	skills: SkillModel[];

	@Field(() => [ExperienceModel])
	experience: ExperienceModel[];

	@Field(() => [ProjectModel])
	projects: ProjectModel[];
}
