# John Charles — Portfolio

A personal portfolio and resume site for showcasing my software engineering experience, technical skills, background, and contact information. Built with React, TypeScript, React Router, and Tailwind CSS.

## Pages

- `/` — Profile summary, technical skills, and quick links
- `/about` — My path from plumbing to software engineering
- `/resume` — Professional experience, skills, and education
- `/contact` — Contact form and direct contact links

## Requirements

- Node.js 24
- npm

## Getting started

Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite (usually <http://localhost:5173>).

## Contact form configuration

The contact form uses EmailJS. Create a `.env` file in the project root with the values from your EmailJS account:

```dotenv
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

These `VITE_` values are included in the client-side bundle, so they are not secrets. Use the EmailJS public key and configure allowed origins and template settings in EmailJS. Do not put private credentials in these variables. For production, set the same variables in the deployment platform's build environment before building the app.

## Checks and production build

```bash
npm test
npm run typecheck
npm run build
npm run start
```

`npm run start` serves the production build from `build/`. GitHub Actions runs the tests, typecheck, and build on pushes and pull requests.

## Deployment

Deploy the output of `npm run build` to a Node.js hosting platform and run `npm run start`. Use Node.js 24 and make sure the EmailJS `VITE_` variables are available during the build. A Dockerfile is also included; its build process should be configured to provide those values when building the client bundle.
