

## Features

- β‘οΈ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- π [File based routing](./src/pages)

- π¦ [Components auto importing](./src/components)

- π [State Management via Pinia](https://pinia.esm.dev/)

- π [Layout system](./src/layouts)

- π² [PWA](https://github.com/antfu/vite-plugin-pwa)

- π¨ [Windi CSS](https://github.com/windicss/windicss) - next generation utility-first CSS framework

- π [Use icons from any icon sets, with no compromise](https://github.com/antfu/unplugin-icons)

- π [I18n ready](./locales)

- π [Markdown Support](https://github.com/antfu/vite-plugin-md)

- π₯ Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- π₯ [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- π¨ Server-side generation (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg)

- π¦ Critical CSS via [critters](https://github.com/GoogleChromeLabs/critters)

- π¦Ύ TypeScript, of course

- βοΈ E2E Testing with [Cypress](https://cypress.io/) on [GitHub Actions](https://github.com/features/actions)

- βοΈ Deploy on Netlify, zero-config

<br>

## Pre-packed

### UI Frameworks

- [Windi CSS](https://github.com/windicss/windicss) (On-demand [TailwindCSS](https://tailwindcss.com/)) - lighter and faster, with a bunch of additional features!
  - [Windi CSS Typography](https://windicss.org/plugins/official/typography.html)

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [πIcΓ΄nes](https://icones.netlify.app/)
- [`unplugin-icons`](https://github.com/antfu/unplugin-icons) - icons as Vue components

## Usage

### Development

Just run and visit http://localhost:3333

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way, and your App will be live in a minute.

## Why

I have created several Vite apps recently. Setting the configs up is kinda the bottleneck for me to make the ideas simply come true within a very short time.

So I made this starter template for myself to create apps more easily, along with some good practices that I have learned from making those apps. It's strongly opinionated, but feel free to tweak it or even maintains your own forks. [(see community maintained variation forks)](#variations)
