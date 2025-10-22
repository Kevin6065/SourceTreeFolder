<script setup>
import TabPanel from './TabPanel.vue'

const tabs = ['news', 'events', 'contact']
</script>

<template>
  <TabPanel :tabs="tabs">
    <template #news>
      <p>📰 最新新聞：Vue 3 正式釋出！</p>
    </template>

    <template #events>
      <p>📅 活動資訊：本月 15 號社群聚會</p>
    </template>

    <template #contact>
      <p>📧 聯絡我們：hello@example.com</p>
    </template>
  </TabPanel>
</template>

<style scoped></style>
