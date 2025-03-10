<template>
  <main class="home-container">
    <section id="math"><MathSubject /></section>
    <section id="port"><PortugueseSubject /></section>
    <section id="history"><HistorySubject /></section>
    <section id="geo"><GeographySubject /></section>
  </main>
</template>

<script setup lang="ts">
import MathSubject from '../components/MathSubject.vue'
import PortugueseSubject from '../components/PortugueseSubject.vue'
import HistorySubject from '../components/HistorySubject.vue'
import GeographySubject from '../components/GeographySubject.vue'
</script>

<style scoped>
.home-container {
  scroll-snap-type: y mandatory;
  overflow-y: visible;
  height: 100vh;
}

section {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}
</style>
