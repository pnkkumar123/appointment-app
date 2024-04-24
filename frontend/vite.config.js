import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

// vite.config.js

  resolve: {
    alias: {
      'slick-carousel/slick/slick.css': require.resolve('slick-carousel/slick/slick.css'),
      'slick-carousel/slick/slick-theme.css': require.resolve('slick-carousel/slick/slick-theme.css')
    }
  }
});
