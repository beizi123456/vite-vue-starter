/*
 * @Author: beizi 2606754686@qq.com
 * @Date: 2022-10-13 15:44:16
 * @LastEditors: beizi 2606754686@qq.com
 * @LastEditTime: 2022-10-13 18:05:24
 * @FilePath: /基础搭建/vite-vue-starter/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

import router from './router/index'
import store from './store/index'

createApp(App).use(ElementPlus).use(router).use(store).mount('#app')
