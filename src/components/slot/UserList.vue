<script setup>
const users = [
  { id: 1, name: '小明', email: 'ming@example.com' },
  { id: 2, name: '小美', email: 'mei@example.com' },
]
</script>

<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      <!-- scoped slot: 傳出 user 給父層 -->
      <slot :user="user">
        <!-- fallback：若父層沒傳插槽 -->
        {{ user.name }}
      </slot>
    </li>
  </ul>
</template>

<style scoped></style>
