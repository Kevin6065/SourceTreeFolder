<script setup>
defineProps({
  // 基礎類型檢查
  // （給出 `null` 和 `undefined` 值則會跳過任何類型檢查）
  propA: Number,
  // 多種可能的類型
  propB: [String, Number],
  // 必傳，且為 String 類型
  propC: {
    type: String,
    required: true,
  },
  // 必傳，但可以是 null
  propD: {
    type: [String, null],
    required: true,
  },
  // 有默認值的數字
  propE: {
    type: Number,
    default: 100,
  },
  // 有默認值的對象
  propF: {
    type: Object,
    // 對象或數組的默認值
    // 必須從一個工廠函數返回。
    // 該函數接收組件所接收到的原始 prop 作為參數。
    default(rawProps) {
      return { message: 'hello' }
    },
  },
  // 自定義類型校驗函數
  // 在 3.4+ 中完整的 props 作為第二個參數傳入
  propG: {
    validator(value, props) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].includes(value)
    },
  },
  // 有默認值的函數
  propH: {
    type: Function,
    // 不像對象或數組的默認，這不是一個
    // 工廠函數。這會是一個用來作為默認值的函數
    default() {
      return () => 'Default function'
    },
  },
  disabled: Boolean,
})
</script>

<template>
  <div>name : {{ disabled }}</div>
</template>

<style scoped></style>
