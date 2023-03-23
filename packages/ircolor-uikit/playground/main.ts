import { createApp } from 'vue'
import App from './App.vue'

// import './assets/style/main.css'
import 'ircolor-icons/pack/css/ircolor-icons.css'

import * as uipack from "../src/entry-bundler"

createApp(App).use(uipack.install).mount('#app')
