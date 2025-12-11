import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Use this structure to define the configuration based on the environment mode
export default defineConfig(({ mode }) => {
    // 1. Load environment variables
    const env = loadEnv(mode, '.', '');

    return {
      // 2. CRITICAL FIX: Use relative path (./) for deployment
      base: "./", 
      
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      
      // 3. Keep environment variable definitions
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      
      // 4. Keep path resolution aliases
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
