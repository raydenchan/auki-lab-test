import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
const path = require('path')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  base: '',  

  build: {
    outDir: "dist/",
    rollupOptions: {
      external: ['jquery'],
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        globals: {
          jquery: "$",
        },
      },
    }
    /*
    rollupOptions: {
      external: ["jquery"],
      output: {
        globals: {
          jquery: "$",
        },
      },
    },*/
    
  },

  resolve: {
    alias:{
      '@' : path.resolve( __dirname, './src')
    }
  },
  
})
