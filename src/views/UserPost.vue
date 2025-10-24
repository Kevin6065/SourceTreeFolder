<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const username = computed(() => route.params.username)
const postId = computed(() => route.params.postId)
</script>

<template>
  <label>template 直接取用 route params</label>
  <div>User {{ $route.params.username }} with post {{ $route.params.postId }}</div>
  <label>script setup 取用 route params</label>
  <div>User {{ username }} with post {{ postId }}</div>
</template>

<style scoped></style>
