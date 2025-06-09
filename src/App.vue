<template>
  <header></header>
  <main class="mainClass">
    <SpacingComponent @spacingDetails="logSpacingValues" />
  </main>
</template>

<script setup lang="ts">
import SpacingComponent from './components/SpacingComponent.vue'
import type { SpacingEmitPayload } from './shared/spacingTypes'

const logSpacingValues = (payload: SpacingEmitPayload) => {
  console.log('Spacing details:', payload)
}
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
