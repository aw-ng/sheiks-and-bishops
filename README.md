# SBP

This repo contains HTML markup that is responsible for the look and feel of www.sheiksandbishop.com.

---

## Project Overview

The Sheiks & Bishops website is a static frontend project built with HTML, Sass, and JavaScript.

The project uses:

- HTML for page structure
- Sass/SCSS for styling
- JavaScript for client-side functionality
- Bootstrap 5 for UI components and utilities
- Bootstrap Icons for icons
- Gulp for compiling Sass and JavaScript
- Browserify for bundling JavaScript
- Vite for local development
- Docker + Apache for serving the production build

The repository is responsible primarily for the website's frontend/look and feel.

---

## Tech Stack

| Technology         | Purpose                           |
| ------------------ | --------------------------------- |
| HTML5              | Page markup                       |
| CSS / SCSS         | Styling                           |
| JavaScript         | Client-side functionality         |
| Bootstrap 5        | UI framework                      |
| Bootstrap Icons    | Icons                             |
| Gulp               | Asset compilation                 |
| Sass               | SCSS compilation                  |
| Browserify         | JavaScript bundling               |
| Babel              | JavaScript transpilation          |
| Vite               | Local development server          |
| Docker             | Local production-like environment |
| Apache HTTP Server | Serving the website               |

---

## Project Structure

```text
sheiks-and-bishops/
│
├── .github/
│   └── workflows/                 # GitHub Actions workflows
├── assets/                        # Images, fonts and other static assets
├── pages/                         # HTML pages
├── scripts/                       # JavaScript source files
├── styles/                        # SCSS/CSS source files
├── dist/                          # Generated build files
├── .editorconfig                  # Editor configuration
├── .gitignore                     # Git ignored files
├── .htaccess                      # Apache rewrite rules
├── .prettierrc.json               # Prettier configuration
├── apache.conf                    # Apache configuration
├── certification.html             # Certification page
├── contact.html                   # Contact page
├── gallery.html                   # Gallery page
├── index.html                     # Main/home page
├── projects.html                  # Projects page
├── about.html                     # About page
├── under-construction.html        # Under construction page
├── docker-compose.yml             # Docker configuration
├── eslint.config.mjs              # ESLint configuration
├── gulpfile.js                    # Gulp build tasks
├── package.json                   # Dependencies and npm scripts
└── README.md                      # Project documentation
```

Note: dist/ contains generated files. In most cases, developers should modify the source files in styles/ and scripts/ rather than editing compiled files directly.

## Requirements

- Yarn `v1.22.22` package manager used for dependency management
- Node `v24.14.0`, [Node.js](https://nodejs.org) runtime requirement.
- npm
- Git
- Docker Desktop(if using the Docker workflow)

You can verify your installations with:

```bash
node    --version
npm     --version
yarn    --version
git     --version
docker  --version
```

## Setup

- Clone the repository `git clone git@github.com/aw-ng/sheiks-and-bishops.git`.
- Run `yarn install && yarn build && yarn dev` to start the local development server.
- Application should now be accessible at port 5577 using [http://localhost:5577](http://localhost:5577).

## Available Scripts

yarn dev

Starts the Vite development server.

```bash
yarn dev
```

Useful for normal frontend development and quick browser feedback.

yarn watch

Watches the SCSS and JavaScript source directories and recompiles assets when changes are detected.

```bash
yarn watch
```

The Gulp watcher monitors:

styles/**/\*.scss
scripts/**/*.js

and automatically runs the corresponding compilation task when files change.

yarn compile:css

Compiles SCSS into CSS.

```bash
yarn compile:css
```

yarn compile:js

Bundles and minifies the JavaScript.

```bash
yarn compile:js
```

yarn build

Runs both CSS and JavaScript compilation.

```bash
yarn build
```

Equivalent to:

```bash
yarn compile:css
yarn compile:js
```

yarn start

Builds the project and starts the Docker/Apache environment.

```bash
yarn start
```

The Docker configuration exposes Apache on:

http://localhost:5577

yarn prettier

Formats project files using Prettier.

```bash
yarn prettier
```

yarn format

Runs ESLint with automatic fixing enabled.

```bash
yarn format
```

## Environment Variables

This project currently does not require environment variables for the standard frontend development workflow.

There is no documented .env configuration required to run the project.

## Common Issues

1. yarn or npm command not found

Make sure Node.js and your package manager are installed.

Check:

```bash
node --version
yarn --version
```

If Yarn is unavailable, you can use npm instead:

```bash
npm install
npm run dev
```

2. Dependencies are missing

If you encounter errors such as:

Cannot find module ...

```bash
rm -rf node_modules
yarn install
```

On Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
yarn install
```

3. Build files are missing

Run:

```bash
yarn build
```

This compiles both the SCSS and JavaScript.

4. SCSS changes are not appearing

Run:

```bash
yarn compile:css
```

For continuous development:

```bash
yarn watch
```

5. JavaScript changes are not appearing

Run:

```bash
yarn compile:js
```

Or use:

```bash
yarn watch
```

Make sure your JavaScript changes are being made in scripts/ rather than directly in generated files.

6. Docker container is already running

Check:

```bash
docker ps -a
```

Then stop the existing container:

```bash
docker compose down
```

Start it again:

```bash
docker compose up -d
```

7. Port 5577 is already in use

The Docker configuration maps host port 5577 to Apache's port 80.

You can change the port in docker-compose.yml.

For example:

```yaml
ports:
    - '8080:80'
```

The site would then be available at:

http://localhost:8080

8. Page URLs are not working correctly

The project includes Apache rewrite rules for routing requests to HTML files.

If clean URLs work in Docker but not through another local server, check that the server supports the project's rewrite configuration.
