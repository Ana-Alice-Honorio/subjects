<template>
  <v-container class="accordion-container" fluid>
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
              <v-expansion-panel-title>
                {{ content.title }}
                <small class="summary">
                  📽 {{ countTotal(module, 'Aulas') }} {{ $t('accordion.class') }} | ✏️
                  {{ countTotal(module, 'Exercícios') }} {{ $t('accordion.exercises') }} | 📄
                  {{ countTotal(module, 'Materiais') }} {{ $t('accordion.materials') }}
                </small>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <span>{{ content.description }}</span>

                <v-tabs v-model="activeTab[content.id]" bg-color="#c019a6" dense scrollable>
                  <v-tab value="aulas" class="vtab">{{ $t('accordion.class') }}</v-tab>
                  <v-tab value="exercicios" class="vtab">{{ $t('accordion.exercises') }}</v-tab>
                  <v-tab value="materiais" class="vtab">{{ $t('accordion.materials') }}</v-tab>
                </v-tabs>

                <v-window v-model="activeTab[content.id]" dense>
                  <v-window-item value="aulas">
                    <v-list bg-color="#FFF0F5" dense>
                      <v-list-item v-for="item in module.options[0].checkList" :key="item.id">
                        <v-checkbox
                          v-model="item.checked"
                          :label="item.name"
                          color="#c019a6"
                          :style="{
                            textTransform: 'capitalize',
                            fontSize: 'small',
                            fontFamily: 'Lucida Sans',
                          }"
                        ></v-checkbox>
                      </v-list-item>
                    </v-list>
                  </v-window-item>

                  <v-window-item value="exercicios">
                    <v-list bg-color="#FFF0F5" dense>
                      <v-list-item v-for="item in module.options[1].checkList" :key="item.id">
                        <p>{{ item.name }}</p>
                      </v-list-item>
                    </v-list>
                  </v-window-item>

                  <v-window-item value="materiais">
                    <v-list bg-color="#FFF0F5" dense>
                      <v-list-item v-for="item in module.options[2].checkList" :key="item.id">
                        <a href="#" @click.prevent="downloadMaterial(item)">{{ item.name }}</a
                        >⬆
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
import type { Module, Option } from '@/store'

const props = defineProps<{ subject: string }>()
const store = useSubjectStore()

const subjectData = computed(() => store.getSubject(props.subject))
const subjectTitle = computed(() => subjectData.value?.name || 'Matéria')

const activeTab = ref<{ [key: string]: string }>({})

const downloadMaterial = (item: { id: number; name: string }) => {
  console.log(`Baixando: ${item.name}`)
  alert(`Download de ${item.name} sendo simulado❗❗`)
}

const countTotal = (module: Module, type: string): number => {
  const option = module.options.find((opt: Option) => opt.name === type)
  return option ? option.checkList.length : 0
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
  margin: 0;
  padding: 0;
}

h2 {
  font-size: medium;
}

.summary {
  font-size: 12px;
  color: gray;
  display: block;
  margin-top: 4px;
  padding: 5px;
}

.vtab,
a,
p {
  text-transform: capitalize;
  font-size: small;
  font-family:
    'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
    sans-serif;
}

::v-deep(.v-checkbox .v-selection-control) {
  min-height: auto !important;
  height: auto !important;
}

::v-deep(.v-input__details) {
  all: unset !important;
}

a {
  text-decoration: none;
}

@media (max-width: 600px) {
  .summary {
    font-size: 10px;
  }

  .vtab {
    font-size: smaller;
  }

  h2 {
    font-size: 18px;
  }

  .accordion-container {
    width: 100%;
    padding: 10px;
  }

  .v-tabs,
  .v-window {
    width: 100%;
    margin: 0;
  }

  .v-expansion-panel-title {
    font-size: smaller;
  }

  .v-expansion-panel-text {
    font-size: small;
  }
}
</style>
