/*
 * @Author: beizi 2606754686@qq.com
 * @Date: 2022-10-13 16:54:06
 * @LastEditors: beizi 2606754686@qq.com
 * @LastEditTime: 2022-10-13 17:13:10
 * @FilePath: /基础搭建/vite-vue-starter/src/store/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore } from 'vuex'

const defaultState = {
  count: 0
}

export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})
