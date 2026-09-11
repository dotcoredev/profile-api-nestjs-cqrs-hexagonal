import { Injectable } from "@nestjs/common";
import {
	ProfileReadModel,
	ProfileReadRepository,
} from "../../domain/ports/profile-read.repository";
import { PrismaService } from "@/infra/prisma/prisma.service";

@Injectable()
export class PrismaProfileRepository implements ProfileReadRepository {
	constructor(private readonly prisma: PrismaService) {}

	async getProfile(): Promise<ProfileReadModel | null> {
		return this.prisma.profile.findFirst({
			select: {
				name: true,
				description: true,

				skills: {
					select: {
						name: true,
					},
				},

				experience: {
					select: {
						company: true,
						position: true,
					},
				},

				projects: {
					select: {
						name: true,
					},
				},
			},
		});
	}
}
