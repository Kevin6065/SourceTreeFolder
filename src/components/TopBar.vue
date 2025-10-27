<script setup></script>

<template>
  <div>
    <router-link to="/">首頁</router-link> | <router-link to="/about">關於</router-link> |
    <router-link to="/users/Jerry/posts/1234">使用者資訊</router-link>|
    <router-link to="/users">使用者</router-link>|
    <router-link :to="{ name: 'UsersX', params: { id: 'u123' } }">使用者資料</router-link>|
    <router-link to="/users/list">使用者清單</router-link>|
    <router-link to="/users/profile">個人檔案</router-link>|
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
