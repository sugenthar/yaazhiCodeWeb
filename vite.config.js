import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import handler from './api/execute.js';

function executeApiPlugin() {
  const middleware = (req, res) => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      req.body = body;
      res.status = (code) => { res.statusCode = code; return res; };
      res.json = (data) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
      };
      await handler(req, res);
    });
  };

  return {
    name: 'yaazhicode-api-middleware',
    configureServer(server) {
      server.middlewares.use('/api/execute', middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/execute', middleware);
    },
  };
}

export default defineConfig({
  plugins: [react(), executeApiPlugin()],
  server: {
    port: 5173,
    host: true,
  },
});
