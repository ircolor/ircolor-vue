import './styles/style/main.css'
import type { App } from 'vue'
import * as components from './components'

export const version = __APP_VERSION__

const install = (app: App) => {
    const componentsList  = components as any
    for (const key in componentsList) {
        app.component(key, componentsList[key])
      }
  }
export {components,install}
