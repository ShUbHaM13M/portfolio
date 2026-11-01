# Shubham Maurya — Portfolio

Personal portfolio and blog built with SvelteKit. The site presents projects, work experience, skills, a resume, and articles stored as Markdown content in `cms/`.

## Branches

- `master` is the current Svelte 4 version. It uses Node.js 20.
- `upgrade-to-svelte-5` contains the in-progress Svelte 5 migration. Its package configuration uses Node.js 22.

Check out the branch you intend to work on before installing dependencies, since the Svelte and Node.js versions differ.

## Requirements

- Node.js version specified by the checked-out branch (`20.x` on `master`; `22.x` on `upgrade-to-svelte-5`)
- pnpm (the repository includes `pnpm-lock.yaml`)

## Getting started

```sh
pnpm install
pnpm dev
```

The development server is available at the URL printed by Vite (typically `http://localhost:5173`). To open it in a browser:

```sh
pnpm dev -- --open
```

## Available scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local development server. |
| `pnpm build` | Build the production site. |
| `pnpm preview` | Preview the production build locally. |
| `pnpm check` | Run Svelte and TypeScript checks. |
| `pnpm lint` | Check formatting with Prettier and lint with ESLint. |
| `pnpm format` | Format project files with Prettier. |
| `pnpm story:dev` | Start the Histoire component workshop. |
| `pnpm story:build` | Build the Histoire component workshop. |
| `pnpm story:preview` | Preview the built Histoire workshop. |

The build runs the configured postbuild image optimization script as well.

## Content

Blog posts, project descriptions, resume details, skills, and work history are maintained as Markdown files under `cms/`. The SvelteKit routes and components that render the portfolio are under `src/`.

## Deployment

The project uses `@sveltejs/adapter-auto`. Select and configure a SvelteKit adapter if the deployment platform requires a specific adapter; see the [SvelteKit adapter documentation](https://svelte.dev/docs/kit/adapters).
