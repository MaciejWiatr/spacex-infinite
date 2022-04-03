![app img](https://i.imgur.com/NrKDbEA.png)

# SpaceX infinite scroll 🌠

Infinite scroll App made with React/Next.js and SpaceX GraphQL API

## Demo

https://spacex-infinite.vercel.app/

## Features

- Infinite scroll (duh)
- GraphQL API Fetching with graphql-request library
- SSR-based launch details page
- E2E Tests with Cypress.io
- Sleek design system buildt with Tailwind.css
- Auto-generated GraphQL types and client using graphql-codegen
- Plop.js-based component scaffolding
- Responsive UI
- Loading indicator
- _Samsung internet and Safari compatibility (learned it the hard way)_

## Installation

Install my-project with npm

```bash
npm install
```

### Run tests

```bash
npm run test:prod
```

### Run development server

```bash
npm run dev
```

### Things I've learned while building this project

- Basics of atomic design
- That the Samsung internet and Safari are the 21st century internet explorers

### Problems I had to solve

**Infinite scrolling mixed with search caused a lot of unnecessary re-renders and api calls**

- had to deeply investigate scenarios in which function fetchNext() was invoked, it led me to conclusion that my code have fetch loop problems which I fixed by optimizing useLaunches hook and avoiding unnecessary calls to fetchNext() function outside the useLaunches

**Safari and samsung internet compatibility**

- My friend let me know that my app crashes on his phone and as it later turned out both Samsung and Apple had this issue. I jumped into the IOS simulator on browserstack.com and successfully replicated the issue. The problem was the usage of Array.at() which is apparently not supported on apple nor Samsung, after removing it everything went back to normal.

## Screenshots

![App Screenshot](https://i.imgur.com/kUMFkss.png)
![Mobile screenshots](https://i.imgur.com/v4eYwuQ.png)

#### Post scriptum

_Only cool programmers are able to click on the button placed in the footer..._
