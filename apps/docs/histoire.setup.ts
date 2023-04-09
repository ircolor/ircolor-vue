// src/histoire.setup.ts
import './src/style.css'
import 'ircolor-uikit/dist/style.css' // Import global CSS
import * as uipack from "ircolor-uikit"
import { defineSetupVue3 } from '@histoire/plugin-vue'

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.use(uipack.install)// Add IRCOLOR UIkit
})