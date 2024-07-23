# my-mini-ecommerce
A mini e-shop gallery for POC purposes =)

## Features

Already packed:
- Product Listing
- Layout selection (grid/list)
- Pagination
- Cart management (add/remove products to/from cart)
- Product Details
- Dark Theme toggle
- Search
- Sorting
- Filters
- Multilanguage with locale switcher

In progress:
- Rate Product
- Add to favorites
- Select Delivery Options
- Payment form


## Architecture & Technical choices breakdown

### Architecture
I chose to organise this project according to the Atomic Design, since it enhances code reusage, maintainance, and provides comprehensive navigation through the components by easily establishing the logic links between them.

### Technical stack
- **Vuejs:** is an evident choice since it's the framework with which I've been working for years now.
- **PrimeVue:** a nice discovery during my last mission, very rich UI library with an excellent documentation and easy plug & code.
- **TailwindCSS:** one of the most known CSS frameworks, an easy choice for high speed styling.
- **JS over TS:** Typescript is a very good choice for code quality and maintanance insurance, but classic Javascript is better for quick development. Also, there are some plugins that are not (yet) very compatible with typescript.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

## Used Libraries

Here's a list of used libraries and tools:

- [Primevue](https://primevue.org/) : an excellent UI component library for Vuejs developed by the legendary PrimeFaces team.
- [TailwindCSS](https://tailwindcss.com): a useful CSS framework for styling with classes.
- [Fake Store API](https://fakestoreapi.com): it's all in the name!