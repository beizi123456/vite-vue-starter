<!--
 * @Author: beizi 2606754686@qq.com
 * @Date: 2022-10-13 16:51:24
 * @LastEditors: beizi 2606754686@qq.com
 * @LastEditTime: 2022-10-17 10:05:44
 * @FilePath: /基础搭建/vite-vue-starter/src/views/axios.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import axios from '../utils/axios'

export default defineComponent({
  setup() {
    axios
      .get('/users/xPoet')
      .then((res) => {
        console.log('res:', res)
      })
      .catch((err) => {
        console.log('err', err)
      })
  }
})
</script>
<style lang="stylus" scoped></style>
