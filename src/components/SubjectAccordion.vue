<template>
  <v-container>
    <h2>{{ subject?.name }}</h2>
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
import { computed, onMounted } from 'vue'
import { useSubjectStore } from '../store/index'

const props = defineProps<{ subjectId: string }>()
const store = useSubjectStore()

onMounted(() => {
  if (!store.subjects[props.subjectId]) {
    store.fetchSubjects()
  }
})

const subject = computed(() => store.getSubject(props.subjectId))
</script>
