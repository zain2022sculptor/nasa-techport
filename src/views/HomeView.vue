<script setup lang="ts">
import Button from 'primevue/button'
import { useRouter } from 'vue-router'

const router = useRouter()

function handleExploreProject() {
  router.push({
    name: 'projects'
  })
}
</script>

<template>
  <div class="background">
    <div class="container">
      <h1 class="heading">NASA's TechPort</h1>
      <Button @click="handleExploreProject">Explore projects</Button>
    </div>
  </div>
</template>

<style>
.background {
  background-image: url('../assets/galaxy.jpg');
  background-size: cover;
  height: 100vh;
  width: '100%';
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.heading {
  color: white;
}
</style>
