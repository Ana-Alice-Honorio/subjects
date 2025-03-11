<template>
  <v-container class="accordion-container">
    <h2>{{ subjectTitle }}</h2>

    <v-expansion-panels v-if="subjectData" class="full-panel">
      <v-expansion-panel v-for="module in subjectData.modules" :key="module.id">
        <v-expansion-panel-title>{{ module.name }}</v-expansion-panel-title>
        <v-expansion-panel-text>
          <p>{{ module.content }}</p>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <p v-else>Carregando...</p>
  </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useSubjectStore } from '@/store/index'

const props = defineProps<{ subject: string }>()
const store = useSubjectStore()

onMounted(() => {
  store.fetchSubjects()
})

const subjectData = computed(() => store.getSubject(props.subject))
const subjectTitle = computed(() => subjectData.value?.name || 'Matéria')

onMounted(() => {
  console.log('Dados carregados para:', props.subject, subjectData.value)
})
</script>

<style scoped>
.accordion-container {
  width: 100vh;
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
}

.full-panel {
  width: 100%;
  max-width: 100%;
}

h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}
</style>
