import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { resolve } from 'path'

const pkg = require('./package.json')

import vue from '@vitejs/plugin-vue'

const banner =
  '/*!\n' +
  ` * ${pkg.name}.js v${pkg.version}\n` +
  ' * Contributed by AmirKian Adl and Shahriar Eshraghi' +
  '\n' +
  ` * (c) ${new Date().getFullYear()} \n` +
  ' * Released under the MIT License.\n' +
  ' */\n'


// https://vitejs.dev/config/
import postcss from 'postcss'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  root:"./playground",
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        postcss()
      ]
    }
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    lib: {
      entry: resolve(__dirname, 'src/entry-bundler.ts'),
      name: 'ircolor-uikit',
      fileName: 'index',
      formats: ['es', 'cjs', 'umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        banner,
        exports: 'auto'
      }
    }
  }
  
})
