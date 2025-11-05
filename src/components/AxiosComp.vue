<script setup>
import axios from 'axios'
import { ref } from 'vue'

const columns = ref([
  {
    propval: 'id',
    label: 'ID',
  },
  {
    propval: 'name',
    label: 'Name',
  },
  {
    propval: 'product_price',
    label: 'Price',
  },
  {
    propval: 'description',
    label: 'Description',
    width: 200,
  },
  {
    propval: 'image',
    label: 'Image',
  },
])

const tableData = ref([])
const editForm = ref({
  id: '',
  name: '',
  price: '',
  description: '',
  image: '',
})

let apiService = axios.create({
  baseURL: 'http://localhost:8080',
})

const queryProduct = async () => {
  // GET
  await apiService
    .get('/api/queryAllProducts')
    .then((response) => {
      tableData.value = response.data
      // Object.assign(tableData.value, response.data)
      // Object.assign(tableData, response.data)
    })
    .catch((error) => console.error(error))
}

const handleEdit = (index, row) => {
  editForm.value = row
}
const handleDelete = async (index, row) => {
  console.log(index, row)
  await apiService
    .delete('/api/deleteProduct/' + row.id)
    .then((response) => {
      console.log(response)
      if (response.status === 200) {
        queryProduct()
      }
    })
    .catch((error) => console.error(error))
}
const submitForm = async () => {
  await apiService
    .put('/api/updateProduct', editForm.value)
    .then((response) => {
      console.log(response)
      if (response.status === 200) {
        queryProduct()
      }
    })
    .catch((error) => console.error(error))
}
</script>

<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        v-for="(column, index) in columns"
        :prop="column.propval"
        :label="column.label"
        :key="index"
        :width="column.width"
      />
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"> Edit </el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-button type="primary" @click="queryProduct()">查詢產品</el-button>
    <el-form
      ref="formRef"
      :model="editForm"
      label-width="100px"
      style="max-width: 400px; margin: auto"
    >
      <el-form-item label="產品名稱" prop="name">
        <el-input v-model="editForm.name" />
      </el-form-item>

      <el-form-item label="描述" prop="description">
        <el-input v-model="editForm.description" type="textarea" />
      </el-form-item>

      <el-form-item label="價格" prop="product_price">
        <el-input-number v-model="editForm.price" :min="0" />
      </el-form-item>

      <el-form-item label="圖片 URL" prop="image">
        <el-input v-model="editForm.image" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped></style>
