<template>
  <v-card class="mx-auto header" max-width="100%">
    <v-layout>
      <v-app-bar color="teal-darken-4">
        <template v-slot:image>
          <v-img gradient="to top right, #fc63dd, #ac0093"></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title class="name">
          {{ $t('menu.title') }}
          <v-icon>mdi-star-outline</v-icon>
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <div class="d-none d-md-flex">
          <v-btn variant="text" @click="scrollTo('math')" class="font-text">
            {{ $t('menu.navbar.math') }}
          </v-btn>
          <v-btn variant="text" @click="scrollTo('port')" class="font-text">
            {{ $t('menu.navbar.port') }}
          </v-btn>
          <v-btn variant="text" @click="scrollTo('history')" class="font-text">
            {{ $t('menu.navbar.history') }}
          </v-btn>
          <v-btn variant="text" @click="scrollTo('geo')" class="font-text">
            {{ $t('menu.navbar.geo') }}
          </v-btn>
        </div>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" temporary>
        <v-list>
          <v-list-item @click="scrollTo('math')">
            {{ $t('menu.navbar.math') }}
          </v-list-item>
          <v-list-item @click="scrollTo('port')">
            {{ $t('menu.navbar.port') }}
          </v-list-item>
          <v-list-item @click="scrollTo('history')">
            {{ $t('menu.navbar.history') }}
          </v-list-item>
          <v-list-item @click="scrollTo('geo')">
            {{ $t('menu.navbar.geo') }}
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)

const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    drawer.value = false
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: linear-gradient(90deg, rgb(134, 101, 186), #3f51b5);
  color: white;
}

.name {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 20px;
}

.font-text {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 15px;
  text-transform: capitalize;
}
</style>
