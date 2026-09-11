export interface ProfileReadModel {
	name: string;
	description: string;

	skills: {
		name: string;
	}[];

	experience: {
		company: string;
		position: string;
	}[];

	projects: {
		name: string;
	}[];
}

export abstract class ProfileReadRepository {
	abstract getProfile(): Promise<ProfileReadModel | null>;
}
