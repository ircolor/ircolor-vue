import { createApp } from 'vue'
import App from './App.vue'

import '../src/styles/main.css'

import * as uipack from "../src/entry-bundler"

createApp(App).use(uipack.install).mount('#app')
