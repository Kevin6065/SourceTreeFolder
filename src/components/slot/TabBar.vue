<script setup>
import { ref } from 'vue'
import SlotPanel from './SlotPanel.vue'
const selected = ref('profile')
const tabs = [
  { lable: '個人資料', value: 'profile' },
  { lable: '設定', value: 'settings' },
  { lable: '聯絡資訊', value: 'contact' },
]
</script>

<template>
  <button v-for="tab in tabs" @click="selected = tab.value">{{ tab.lable }}</button>
  <SlotPanel :active="selected">
    <template #[selected]>
      <p>這是 {{ selected }} 的內容</p>
    </template>
  </SlotPanel>
</template>

<style scoped></style>
