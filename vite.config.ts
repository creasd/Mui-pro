import path from 'path';

import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import viteEslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteEslint()],
  resolve: {
    alias: {'@': path.resolve(__dirname, 'src')}
  },
  server: {
    port: 8000,
    proxy: {
      '/v1/graphql': 'http://demobox-its.xyfolder.com/',
      '/api': 'http://demobox-its.xyfolder.com/',
      '/file': 'http://demobox-its.xyfolder.com/',
      '/hooks': 'http://demobox-its.xyfolder.com/'
    }
  }
});
