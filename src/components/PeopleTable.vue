<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

interface TableRow {
  contactId: string
  fullName: string
  primaryEmail: string
}

defineProps<{
  tableData: TableRow[]
}>()
</script>

<template>
  <DataTable :value="tableData" paginator :rows="5">
    <Column field="contactId" header="Contact ID"></Column>
    <Column field="fullName" header="Name"></Column>
    <Column field="primaryEmail" header="Email"></Column>
  </DataTable>
</template>
