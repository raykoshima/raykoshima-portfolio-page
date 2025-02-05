import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'x08wccg0g0csk08o4cko08kw.68.183.186.199.sslip.io' // Add your host here
    ],
    host: true,
    port: 5173
  }
});
