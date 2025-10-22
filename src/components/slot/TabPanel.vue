<script setup>
import { ref } from 'vue'

const props = defineProps({
  tabs: Array,
})

const activeTab = ref(props.tabs[0])
</script>

<template>
  <div class="tab-panel">
    <div class="tab-nav">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = tab"
        :class="{ active: activeTab === tab }"
      >
        {{ tab }}
      </button>
    </div>

    <div class="tab-content">
      <slot :name="activeTab" />
    </div>
  </div>
</template>

<style scoped>
.tab-nav button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f1f1f1;
  margin-right: 2px;
}
.tab-nav button.active {
  font-weight: bold;
  color: #42b983;
  border-bottom: 2px solid #42b983;
  padding-bottom: 4px;
  margin-bottom: -2px;
}
</style>
