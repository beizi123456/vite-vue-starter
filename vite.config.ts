/*
 * @Author: beizi 2606754686@qq.com
 * @Date: 2022-10-13 15:44:16
 * @LastEditors: beizi 2606754686@qq.com
 * @LastEditTime: 2022-10-13 16:43:49
 * @FilePath: /基础搭建/vite-vue-starter/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: './', //设置打包了路径
  server: {
    port: 4000, //设置服务启动端口号
    open: true, //设置服务启动时是否自动打开浏览器
    cors: true //允许跨域
    //设置代理
    // proxy:{
    //   '/api':{
    //     target:'http://xxx.xxx.xxx:8000',
    //     changeOrigin:true,
    //     secure:false,
    //     rewrite:(path)=>path.replace('/api/','/')
    //   }
    // }
  }
})
