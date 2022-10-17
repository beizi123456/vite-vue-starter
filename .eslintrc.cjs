/*
 * @Author: beizi 2606754686@qq.com
 * @Date: 2022-10-13 18:01:30
 * @LastEditors: beizi 2606754686@qq.com
 * @LastEditTime: 2022-10-17 10:50:44
 * @FilePath: /vite-vue-starter/.eslintrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
  }
}
