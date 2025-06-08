<template>
  <header></header>

  <main class="mainClass">
    <SpacingComponent />
  </main>
</template>

<script setup lang="ts">
import SpacingComponent from './components/SpacingComponent.vue'
</script>

<style scoped>
.mainClass {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
