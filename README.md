# Gallery

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)  
[![TypeScript](https://img.shields.io/badge/TS-4.x-blue)](#)  
[![Next.js](https://img.shields.io/badge/Next.js-14.x-lightgrey)](#)  
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-latest-brightgreen)](#)

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Architecture & Directory Structure](#architecture--directory-structure)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Setup](#setup)  
  - [Development](#development)  
  - [Production Build](#production-build)  
- [Configuration](#configuration)  
- [License](#license)  
- [Contact](#contact)

---

## Project Overview

Gallery is a sample project built with **Next.js** and **TailwindCSS**, using **TypeScript**.  
It demonstrates a modern front-end application setup with responsive design, environment configuration, and best practices for scalable code organization.

Use cases include:

- Portfolio sites, image galleries, or CMS-driven display of visual content  
- Starter boilerplate for experimenting with Next.js + Tailwind + TypeScript workflows  
- Learning or demonstration of dev to production pipelines  

---

## Features

- Clean, responsive UI built with TailwindCSS  
- Type safety via TypeScript  
- Fast local development with hot reloading  
- Configurable via environment variables and `next.config.js`  
- ESLint / linting + formatting best practices  

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js |
| **Styling** | TailwindCSS |
| **Language** | TypeScript |
| **Linting & Formatting** | ESLint, Prettier (if configured) |
| **Tooling** | Node.js, npm / yarn / pnpm |

---

## Architecture & Directory Structure
/

├── public/                ─ Static assets (images, sprites, etc.)

├── src/                   ─ Application source code

│   ├── pages/             ─ Next.js pages / routes

│   ├── components/        ─ Reusable UI components

│   ├── styles/            ─ Tailwind / global CSS

│   └── utils/             ─ Utility functions, helpers

├── .devcontainer.json     ─ Dev container config (optional)

├── tailwind.config.ts     ─ Tailwind configuration

├── next.config.ts         ─ Next.js configuration

├── tsconfig.json          ─ TypeScript config

├── package.json           ─ Dependencies & scripts

└── README.md              ─ This document


---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)  
- npm, yarn, or pnpm  
- Git  

### Setup

```bash
git clone https://github.com/dmascia/Gallery.git
cd Gallery
npm install
# or
yarn install
# or
pnpm install
```

### Development

Start the local development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 to view in browser.
Changes you make will auto-reload.

### Production Build
```bash
npm run build
npm start
# or using other package manager equivalents
```

## Configuration
	•	next.config.ts — for Next.js runtime and build-time configs
	•	tailwind.config.ts — controlling styles, themes, etc.
	•	.env.local (or other .env.*) — you can add environment variables if needed

## License

This project is licensed under the MIT License — see the LICENSE file for details.

⸻

## Contact

Project maintained by dmascia.
