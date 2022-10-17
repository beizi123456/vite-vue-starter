/*
 * @Author: beizi 2606754686@qq.com
 * @Date: 2022-10-13 17:17:04
 * @LastEditors: beizi 2606754686@qq.com
 * @LastEditTime: 2022-10-13 17:50:39
 * @FilePath: /基础搭建/vite-vue-starter/src/utils/axios.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'https://api.github.com'

const axios = Axios.create({
  baseURL,
  timeout: 20000 //请求超时20s
})

//前置拦截器(发起请求之前的拦截)
axios.interceptors.request.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

//后置拦截器(获取响应时的拦截)
axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      ElMessage.error(`Code:${code}.Message:${msg}`)
      console.log(`[Axios Error]`, error.response)
    } else {
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default axios
