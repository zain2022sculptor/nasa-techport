<script setup lang="ts">
import Button from 'primevue/button'
import { ref, watch } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import { useRouter } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import { getProjectsApi } from '../api/apis'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'

const toast = useToast()

const router = useRouter()

const updatedDate = ref()

const {
  isError,
  error,
  isFetching,
  refetch,
  data: projects
} = useQuery({
  queryKey: ['getProjects'],
  queryFn: () => getProjectsApi(updatedDate.value)
})

const handleOnClick = () => {
  console.log('button is clicked')
  refetch()
}

function handleOpenDetails(event: any) {
  router.push({
    path: `/projects/${event.data.projectId}`
  })
}

watch(isFetching, () => {
  if (isError.value) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: error.value,
      life: 3000
    })
  }
  if (!isFetching.value) {
    if (projects?.value?.length === 0) {
      toast.add({
        severity: 'error',
        summary: 'Info',
        detail: 'No record found',
        life: 3000
      })
    }
  }
})
</script>

<template>
  <div class="background">
    <div class="container">
      <Toast />
      <h1>List of Projects</h1>
      <p>Select date for the last updated projects</p>
      <InputText class="date-picker" type="date" v-model="updatedDate" />
      <Button class="submit-button" label="Submit" @click="handleOnClick" />
    </div>
    <div class="data-table">
      <DataTable
        :loading="isFetching"
        :value="projects"
        paginator
        :rows="5"
        :rowsPerPageOptions="[5, 10, 20]"
        selectionMode="single"
        @row-select="handleOpenDetails"
        :tableStyle="{ minHeight: '300px', backgroundColor: '#c298d8' }"
      >
        <Column field="projectId" header="Project ID"></Column>
        <Column field="acronym" header="Acronym"></Column>
        <Column field="title" header="Title"></Column>
        <Column field="website" header="Website"></Column>
        <Column field="lastUpdated" header="Last Updated"></Column>
      </DataTable>
    </div>
  </div>
</template>

<style>
.date-picker {
  width: 400px;
  height: 40px;
  margin-left: 10px;
  margin-right: 10px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.submit-button {
  height: 40px;
  width: 100px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
}
.background {
  background-image: url('../assets/galaxy.jpg');
  background-size: cover;
  height: 100vh;
  width: '100%';
}
.data-table {
  margin: 40px;
}
</style>
