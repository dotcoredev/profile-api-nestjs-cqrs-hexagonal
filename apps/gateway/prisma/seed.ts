import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/client";

const adapter = new PrismaPg({
	connectionString: process.env.PROFILES_DATABASE_URI!,
});

const prisma = new PrismaClient({
	adapter,
});

async function main() {
	// Чтобы повторный seed не создавал дубли
	await prisma.skill.deleteMany();
	await prisma.experience.deleteMany();
	await prisma.project.deleteMany();
	await prisma.profile.deleteMany();

	await prisma.profile.create({
		data: {
			name: "Nikolay",
			description:
				"Full-stack developer specializing in Node.js, NestJS, React and Next.js.",

			skills: {
				create: [
					{ name: "TypeScript" },
					{ name: "Node.js" },
					{ name: "NestJS" },
					{ name: "React" },
					{ name: "Next.js" },
					{ name: "PostgreSQL" },
					{ name: "Prisma" },
					{ name: "Docker" },
				],
			},

			experience: {
				create: [
					{
						company: "Tech Company",
						position: "Full-stack Developer",
					},
					{
						company: "Startup",
						position: "Backend Developer",
					},
				],
			},

			projects: {
				create: [
					{ name: "Exora" },
					{ name: "RAG Second Brain" },
					{ name: "Microservices Platform" },
				],
			},
		},
	});
}

main()
	.then(() => {
		console.log("Seed completed");
	})
	.catch(console.error)
	.finally(async () => {
		await prisma.$disconnect();
	});
