<template>
  <main class="home-container">
    <section id="math"><SubjectAccordion subjectId="math" /></section>
    <section id="port"><SubjectAccordion subjectId="portuguese" /></section>
    <section id="history"><SubjectAccordion subjectId="history" /></section>
    <section id="geo"><SubjectAccordion subjectId="geography" /></section>
  </main>
</template>

<script setup lang="ts">
import SubjectAccordion from '../components/SubjectAccordion.vue'
</script>
