<script setup>
import { useRoute } from 'vue-router'
const router = useRoute()
const { q, page } = router.query
</script>

<template>
  <div>
    <h3>個人檔案</h3>
    <p>這是目前登入使用者的資料。</p>

    <div>
      <h2>搜尋結果頁</h2>
      <p>$route取得 -關鍵字：{{ $route.query.q }}</p>
      <p>$route取得 -頁碼：{{ $route.query.page }}</p>
      <p>script取得 -關鍵字：{{ q }}</p>
      <p>script取得 -頁碼：{{ page }}</p>
    </div>
  </div>
</template>

<style scoped></style>
