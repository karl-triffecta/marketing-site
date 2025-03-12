
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

### Build site for release

```bash
npm run build
```

### Project setup

Commands used to setup this project or reference

``` bash
npm create astro@latest
npx astro add preact
npx astro add tailwind
```
