import './styles/main.css'
import type { App } from 'vue'
import * as components from './components'


const install = (app: App) => {
    const componentsList  = components as any
    for (const key in componentsList) {
        app.component(key, componentsList[key])
      }
  }
export {components,install}
