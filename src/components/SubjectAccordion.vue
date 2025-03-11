<template>
  <v-container class="accordion-container">
    <h2>{{ subjectTitle }}</h2>

    <v-expansion-panels v-if="subjectData" class="full-panel">
      <v-expansion-panel v-for="module in subjectData.modules" :key="module.id">
        <v-expansion-panel-title>{{ module.name }}</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="content in module.contents"
              :key="content.id"
              collapse-icon="mdi-minus"
              expand-icon="mdi-plus"
            >
              <v-expansion-panel-title>{{ content.title }}</v-expansion-panel-title>
              <v-expansion-panel-text>
                <span>{{ content.description }}</span>

                <v-tabs v-model="activeTab" bg-color="#c019a6">
                  <v-tab value="aulas" class="vtab">{{ $t('accordion.class') }}</v-tab>
                  <v-tab value="exercicios" class="vtab">{{ $t('accordion.exercises') }}</v-tab>
                  <v-tab value="materiais" class="vtab">{{ $t('accordion.materials') }}</v-tab>
                </v-tabs>

                <v-window v-model="activeTab">
                  <v-window-item value="aulas">
                    <v-list bg-color="#FFF0F5">
                      <v-list-item v-for="item in module.options[0].checkList" :key="item.id">
                        <v-checkbox
                          v-model="item.checked"
                          :label="item.name"
                          color="#c019a6"
                        ></v-checkbox>
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

span,
h2 {
  padding: 10px;
}

span {
  font-size: small;
  font-family:
    'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
    sans-serif;
}

h2 {
  font-size: medium;
}

.vtab {
  text-transform: capitalize;
}

::v-deep(.v-checkbox .v-selection-control) {
  min-height: auto !important;
  height: auto !important;
}
</style>
