<template>
  <v-container class="accordion-container">
    <h2>{{ subjectTitle }}</h2>

    <v-expansion-panels v-if="subjectData" class="full-panel">
      <v-expansion-panel v-for="module in subjectData.modules" :key="module.id">
        <v-expansion-panel-title>{{ module.name }}</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-expansion-panels>
            <v-expansion-panel v-for="content in module.contents" :key="content.id">
              <v-expansion-panel-title>{{ content.title }}</v-expansion-panel-title>
              <v-expansion-panel-text>
                <p>{{ content.description }}</p>

                <v-tabs v-model="activeTab" bg-color="#c019a6">
                  <v-tab value="aulas">Aulas</v-tab>
                  <v-tab value="exercicios">Exercícios</v-tab>
                  <v-tab value="materiais">Materiais</v-tab>
                </v-tabs>

                <v-window v-model="activeTab">
                  <v-window-item value="aulas">
                    <v-list bg-color="#FFF0F5">
                      <v-list-item v-for="item in module.options[0].checkList" :key="item.id">
                        <v-checkbox v-model="item.checked" :label="item.name"></v-checkbox>
                      </v-list-item>
                    </v-list>
                  </v-window-item>

                  <v-window-item value="exercicios">
                    <v-list bg-color="#FFF0F5">
                      <v-list-item v-for="item in module.options[1].checkList" :key="item.id">
                        <p>{{ item.name }}</p>
                      </v-list-item>
                    </v-list>
                  </v-window-item>

                  <v-window-item value="materiais">
                    <v-list bg-color="#FFF0F5">
                      <v-list-item v-for="item in module.options[2].checkList" :key="item.id">
                        <a href="#" @click.prevent="downloadMaterial(item)">{{ item.name }}</a>
                      </v-list-item>
                    </v-list>
                  </v-window-item>
                </v-window>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useSubjectStore } from '@/store/index'

const props = defineProps<{ subject: string }>()
const store = useSubjectStore()

const subjectData = computed(() => store.getSubject(props.subject))
const subjectTitle = computed(() => subjectData.value?.name || 'Matéria')

const activeTab = ref('aulas')

const downloadMaterial = (item: { id: number; name: string }) => {
  console.log(`Baixando: ${item.name}`)
  alert(`Download de ${item.name} sendo simulado❗❗`)
}

onMounted(async () => {
  await store.fetchSubjects()
})
</script>

<style scoped>
.accordion-container {
  width: 80%;
  max-width: 900px;
}
.full-panel {
  width: 100%;
}

p,
h2 {
  padding: 10px;
}

h2 {
  font-size: medium;
}

.vtab {
  text-transform: capitalize;
}
</style>
