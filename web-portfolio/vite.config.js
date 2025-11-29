import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'raykoshima.xyz',
      'x08wccg0g0csk08o4cko08kw.68.183.186.199.sslip.io', // Add your host here
      'uwssok0wo0cs048cw4sok084.185.241.210.72.sslip.io'
    ],
    host: true,
    port: 5173
  }
});
