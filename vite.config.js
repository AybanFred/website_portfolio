import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// Dev only: serves /api/chat from api/chat.js so `npm run dev` works without
// `vercel dev`. In production Vercel runs the same file as a serverless function.
const devApi = (env) => ({
  name: 'dev-api',
  apply: 'serve',
  configureServer(server) {
    Object.assign(process.env, env)

    server.middlewares.use('/api/chat', async (req, res) => {
      const chunks = []
      for await (const chunk of req) chunks.push(chunk)
      try {
        req.body = chunks.length ? JSON.parse(Buffer.concat(chunks).toString()) : {}
      } catch {
        req.body = {}
      }

      res.status = (code) => {
        res.statusCode = code
        return res
      }
      res.json = (data) => {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(data))
        return res
      }

      try {
        const { default: handler } = await server.ssrLoadModule('/api/chat.js')
        await handler(req, res)
      } catch (err) {
        server.config.logger.error(err.stack || String(err))
        res.status(500).json({ error: 'Chatbot failed to load.' })
      }
    })
  },
})

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), devApi(loadEnv(mode, process.cwd(), ''))],
}))
