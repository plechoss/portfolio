<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { computed, ref } from 'vue'
import router from './router'
import { useDisplay } from 'vuetify'
const { name } = useDisplay()

const navDrawer = ref(false)
const links = ref([
  { name: 'photos', to: '/photos' },
  { name: 'about', to: '/about' }
])

function onNavigationDrawerButtonClick() {
  navDrawer.value = !navDrawer.value
}

function goTo(path: string) {
  router.push(path)
}

const breakpoint = computed(() => {
  return name.value
})
</script>

<template>
  <v-app>
    <v-main> </v-main>
  </v-app>
  <v-app-bar density="compact">
    <v-spacer />
    <span @click="goTo('/photos')" class="text-button font-weight-bold text-grey-darken-2 nav-link"
      >PHOTOS</span
    >
    <v-toolbar-title class="flex text-center">
      <v-span @click="goTo('/photos')" class="text-h5 nav-link"> MICHAŁ PLESKOWICZ </v-span>
    </v-toolbar-title>
    <span @click="goTo('/about')" class="text-button text-grey-darken-2 font-weight-bold nav-link"
      >ABOUT</span
    >
    <v-spacer />
    <template #append>
      <v-app-bar-nav-icon dark @click="onNavigationDrawerButtonClick"></v-app-bar-nav-icon>
    </template>
  </v-app-bar>
  <router-view></router-view>
</template>

<style scoped>
.nav-link:hover {
  cursor: pointer;
}
img {
  width: 100%;
}
</style>
