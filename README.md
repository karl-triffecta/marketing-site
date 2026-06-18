Triffecta marketing site built using Astro for static site generation (SSG), Preact for behaviour and Tailwind for styling

# Astro FAQ

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

# Triffecta FAQ

## Dev Setup

```bash
# brew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew update
brew doctor
brew install nvm

# Follow prompts, e.g. mkdir, setup shell profile
source ~/.zshrc

# nvm install
nvm install

# npm
npm install
```

### Run locally

```bash
npm run dev
```

Access on http://localhost:4321/marketing-site/ until moved to domain
After domain is setup, reset base

Production accessible on: https://karl-triffecta.github.io/marketing-site/

### Build site for release

```bash
npm run format
npm run build
```

### Project setup

Commands used to setup this project for reference (dev only requirements)

```bash
# https://docs.astro.build/en/install-and-setup/
npm create astro@latest
# https://docs.astro.build/en/guides/integrations-guide/preact/
npx astro add preact
# https://docs.astro.build/en/guides/styling/#tailwind
npx astro add tailwind

# https://docs.astro.build/en/guides/integrations-guide/sitemap/
npx astro add sitemap

# https://ota-meshi.github.io/eslint-plugin-astro/user-guide/
npm install --save-dev eslint eslint-plugin-astro
npm install --save-dev @typescript-eslint/parser

# https://docs.astro.build/en/editor-setup/#prettier
# https://github.com/tailwindlabs/prettier-plugin-tailwindcss
npm install --save-dev prettier prettier-plugin-astro prettier-plugin-tailwindcss

# https://www.npmjs.com/package/intl-tel-input
npm install intl-tel-input utils
```

### Helpers

```bash
nvm install && npm install && npm run dev
```
