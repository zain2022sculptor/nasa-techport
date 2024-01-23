<script setup lang="ts">
import { getProjectDetailsApi } from '@/api/apis'
import { useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import PeopleTable from '../components/PeopleTable.vue'
import { watch } from 'vue'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
import TableHeading from '@/components/TableHeading.vue'

const toast = useToast()

const route = useRoute()

const {
  isFetching,
  isError,
  error,
  data: projectDetails
} = useQuery({
  queryKey: ['getProjects'],
  queryFn: () => getProjectDetailsApi(route.params.id)
})

watch(isFetching, () => {
  if (isError.value) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: error.value,
      life: 3000
    })
  }
})
</script>

<template>
  <div class="container">
    <Toast />
    <div v-if="isFetching">Loading...</div>
    <div v-else>
      <h1>{{ projectDetails?.title }}</h1>
      <p>{{ projectDetails?.description }}</p>
      <hr />
      <h1>Lead Organization</h1>
      <h3>{{ projectDetails?.leadOrganization?.organizationName }}</h3>
      <h4>{{ projectDetails?.leadOrganization?.organizationTypePretty }}</h4>
      <h4>{{ projectDetails?.leadOrganization?.city }}</h4>
      <p>Acronym: {{ projectDetails?.leadOrganization?.acronym }}</p>
      <hr />
      <h1>Supporting organzaitons</h1>
      <div
        v-for="organization in projectDetails?.supportingOrganizations"
        :key="organization.organizationId"
      >
        <h3>{{ organization?.organizationName }}</h3>
      </div>
      <hr />

      <TableHeading heading="Program Directors" />
      <PeopleTable :tableData="projectDetails?.programDirectors || []" />
      <hr />

      <TableHeading heading="Program Executives" />
      <PeopleTable :tableData="projectDetails?.programExecutives || []" />
      <hr />

      <TableHeading heading="Program Managers" />
      <PeopleTable :tableData="projectDetails?.programManagers || []" />
      <hr />

      <TableHeading heading="Project Managers" />
      <PeopleTable :tableData="projectDetails?.projectManagers || []" />
      <hr />

      <TableHeading heading="Principle investigators" />
      <PeopleTable :tableData="projectDetails?.principalInvestigators || []" />
      <hr />

      <TableHeading heading="Co-Investigators" />
      <PeopleTable :tableData="projectDetails?.coInvestigators || []" />
    </div>
  </div>
</template>

<style>
.container {
  margin-left: 40px;
  margin-right: 40px;
}
</style>
