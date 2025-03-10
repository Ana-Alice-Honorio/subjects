<template>
  <v-container>
    <h2>Matemática</h2>
    <v-expansion-panels>
      <v-expansion-panel v-for="module in subject?.modules" :key="module.id">
        <v-expansion-panel-title>{{ module.name }}</v-expansion-panel-title>
        <v-expansion-panel-text>
          <p>{{ module.content }}</p>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSubjectStore } from '../stores/index'

const store = useSubjectStore()
const subject = computed(() => store.getSubject('math'))
</script>
