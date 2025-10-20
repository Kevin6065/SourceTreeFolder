<script setup>
const props = defineProps(['form'])
</script>

<template>
  <div>
    <h2>步驟 3：確認資訊</h2>
    <p>姓名：{{ form.name }}</p>
    <p>Email：{{ form.email }}</p>
  </div>
</template>

<style scoped></style>
