<script setup></script>

<template>
  <div>
    <router-link to="/">首頁</router-link> | <router-link to="/about">關於</router-link> |
    <router-link to="/users/Jerry/posts/1234">使用者資訊</router-link>
  </div>
</template>

<style scoped>
.top-navbar {
  background-color: #333;
  color: white;
  padding: 12px;
  display: flex;
  gap: 20px;
}

.router-link-active {
  color: #ffd04b;
}
</style>
