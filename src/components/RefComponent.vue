<script setup>
import { ref } from 'vue'

const items = ref([
  { id: 1, name: '蘋果', placeholder: '請輸入數量' },
  { id: 2, name: '橘子', placeholder: '請輸入數量' },
  { id: 3, name: '香蕉', placeholder: '請輸入數量' },
])

//設置每個輸入框 ref
const inputData = ref([])

// 設置輸入框的 ref
const setInputRef = (index) => (el) => {
  inputData.value[index] = el
}

const focusFirstInput = () => {
  //清除每個輸入框的值
  inputData.value.forEach((item) => {
    item.value = ''
  })
  // 透過 inputRefs.value[0] 取得第一個輸入框
  if (inputData.value[0]) {
    inputData.value[0].focus()
  }
}
// 當按下 "送出" 按鈕時，取得每個輸入框的值
const submit = () => {
  inputData.value.forEach((item, index) => {
    // 取得每個輸入框的值
    console.log(`${items.value[index].name} 數量 ${item.value}`)
  })
}
</script>

<template>
  <div>
    <div v-for="(item, index) in items" :key="item.id">
      <label> {{ item.name }}</label>
      <input type="text" :ref="setInputRef(index)" :placeholder="item.placeholder" />
    </div>
    <button @click="focusFirstInput">重新輸入(聚焦第一個輸入框)</button>
    <button @click="submit">送出</button>
  </div>
</template>

<style scoped>
/* 添加一些樣式 */
input {
  margin: 5px;
}
</style>
