<script setup>
import axios from 'axios'
import { reactive } from 'vue'

const tableData = reactive([])

let apiService = axios.create({
  baseURL: 'http://localhost:8080',
})

const queryProduct = () => {
  // GET
  apiService
    .get('/api/queryAllProducts')
    .then((response) => {
      console.log('🚀 ~ queryProduct ~ response:', response)
      Object.assign(tableData, response.data)
    })
    .catch((error) => console.error(error))
}
</script>

<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="product_price" label="Price" />
      <el-table-column prop="description" label="Description" />
      <el-table-column prop="image" label="Image" />
    </el-table>

    <el-button type="primary" @click="queryProduct()">查詢產品</el-button>
  </div>
</template>

<style scoped></style>
