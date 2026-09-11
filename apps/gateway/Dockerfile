
FROM node:24-bookworm-slim AS base
WORKDIR /app
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

RUN apt-get update \
    && apt-get install -y --no-install-recommends openssl ca-certificates \
    && rm -rf /var/lib/apt/lists/*

FROM base AS builder
COPY . .
RUN pnpm install --frozen-lockfile
RUN PROFILE_DATABASE_URI="postgresql://postgres:postgres@localhost:5432/postgres" \
    pnpm --filter @app/gateway exec prisma generate
RUN pnpm --filter @app/gateway build

FROM base AS runner
ENV NODE_ENV=production
COPY --from=builder /app /app
EXPOSE 3000
CMD ["pnpm", "--filter", "@app/gateway", "start:prod"]