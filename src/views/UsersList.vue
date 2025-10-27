<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const users = ref(['Alice', 'Bob', 'Charlie'])
const router = useRouter()

// 點擊後導向
const goToUser = (user) => {
  router.push({
    name: 'UserDetail', // 對應 router 設定的 route name
    params: { username: user }, // 傳遞參數
  })
}
</script>

<template>
  <div>
    <h3>使用者清單</h3>
    <ul>
      <li
        v-for="(user, index) in users"
        :key="index"
        @click="goToUser(user)"
        style="cursor: pointer"
      >
        {{ user }}
      </li>
      <hr />
      <button
        @click="
          () => {
            router.push({ name: 'profile', query: { q: 'book', page: '1' } })
          }
        "
      >
        router.query
      </button>
      <!-- <li>Alice</li> -->
      <!-- <li>Bob</li>
      <li>Charlie</li> -->
    </ul>
  </div>
</template>

<style scoped></style>
