<template>
  <div :class="context.theme">
    <h1>🌐 多語系與主題切換</h1>
    <ThemeToggler />
    <LanguageSwitcher />
    <ContextUser />
  </div>
</template>

<script setup>
import { ref, provide, reactive } from 'vue'
import { AppContextKey } from '../provide/context-key'
import { createAppContext } from '../provide/context'
import ThemeToggler from './ThemeToggler.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import ContextUser from './ContextUser.vue'

const context = createAppContext() //帶入 reactive 狀態
// provide(AppContextKey, context) //使用symbol key 將 context往下傳
</script>

<style scoped>
.light {
  background-color: #fff;
  color: #000;
}
.dark {
  background-color: #222;
  color: #fff;
}
</style>
