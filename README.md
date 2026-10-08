# Portfolio

## Chatbot setup

The floating chat assistant answers questions from `src/data/profile.js` (fill in the `TODO` fields) using Groq's free API through a Vercel serverless function (`api/chat.js`), so the key never reaches the browser.

1. Create a free key at https://console.groq.com/keys.
2. Local dev: copy `.env.example` to `.env.local`, add the key, then run `npx vercel dev` (plain `npm run dev` does not serve `/api`).
3. Production: add `GROQ_API_KEY` in the Vercel project's Environment Variables and redeploy.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
