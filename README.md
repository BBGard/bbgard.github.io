# My Personal Website
My personal website built with [Astro](https://astro.build).
A playground for me to learn about Astro and web development in general.

Feel free to check out the source code and use it as a template for your own website!

## 🚀 Project Structure

Inside the project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg       <-- Site favicon
├── src/
│   ├── assets/           <-- Static assets
│   │   └── ...
│   ├── components/       <-- Astro components
│   │   └── ...
│   ├── layouts/          <-- Astro layouts
│   │   └── ...
│   └── pages/            <-- Astro pages
|       |── posts/        <-- Blog posts
|       |   └── ...
│       └── index.astro   <-- Home page
└── package.json          <-- Project metadata and scripts
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` or `assets/` directories.

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

Feel free to check [Astro documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
