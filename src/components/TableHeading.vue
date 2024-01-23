<script setup lang="ts">
defineProps<{
  heading: string
}>()
</script>
<template>
  <h1 class="heading" data-test="heading">{{ heading }}</h1>
</template>

<style>
.heading {
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #b4bec9;
}
</style>
