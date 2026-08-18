# SBP

This repo contains HTML markup that is responsible for the look and feel of www.sheiksandbishop.com.

---

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
