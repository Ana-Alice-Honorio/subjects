<template>
  <main class="home-container">
    <section id="math"><SubjectAccordion subject="math" /></section>
    <section id="portuguese"><SubjectAccordion subject="portuguese" /></section>
    <section id="history"><SubjectAccordion subject="history" /></section>
    <section id="geography"><SubjectAccordion subject="geography" /></section>
  </main>
</template>

<script setup lang="ts">
import SubjectAccordion from '../components/SubjectAccordion.vue'
</script>

<style scoped>
.home-container {
  height: 100vh;
}

section {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
</style>
