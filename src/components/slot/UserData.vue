<script setup>
import UserList from './UserList.vue'
</script>

<template>
  <UserList>
    <!-- ✅ 接收子元件傳來的 user 變數 -->
    <template #default="{ user }">
      <strong>{{ user.name }}</strong>
      （{{ user.email }})
    </template>
  </UserList>
</template>

<style scoped></style>
