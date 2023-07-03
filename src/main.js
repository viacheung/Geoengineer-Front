import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import gridLayout from 'vue-grid-layout'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'

import {createPinia} from 'pinia'


const app = createApp(App)

app.use(router).use(gridLayout).use(ElementPlus).use(ContextMenu).use(createPinia()).mount('#app')
