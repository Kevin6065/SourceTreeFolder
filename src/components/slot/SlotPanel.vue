<script setup>
defineProps({
  active: String,
})
</script>

<template>
  <div class="panel">
    <slot :name="active" />
  </div>
</template>

<style scoped>
.panel {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
