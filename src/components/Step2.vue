<script setup>
const props = defineProps(['form'])
</script>

<template>
  <div>
    <h2>步驟 2：輸入電子信箱</h2>
    <input v-model="form.email" placeholder="輸入 email" />
  </div>
</template>

<style scoped></style>
