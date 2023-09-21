<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import router from './router'
import { useDisplay } from 'vuetify'

const { xs, sm } = useDisplay()

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

</script>

<template>
  <v-app>
    <v-app-bar density="prominent" elevation="0" fluid>
      <v-row align="center" justify="center" class="fill-height mt-0">
        <v-spacer />
        <v-col v-if="!(sm || xs)">
          <span
            @click="goTo('/photos')"
            class="text-button font-weight-bold text-grey-darken-2 nav-link"
            >PHOTOS</span
          >
        </v-col>
        <v-col>
          <span @click="goTo('/photos')" class="text-h5 nav-link"> PLESKOWICZ </span>
        </v-col>
        <v-col v-if="!(sm || xs)">
          <span
            @click="goTo('/about')"
            class="text-button text-grey-darken-2 font-weight-bold nav-link"
            >ABOUT</span
          >
        </v-col>
        <v-spacer />
      </v-row>
      <template #append>
        <v-app-bar-nav-icon v-if="xs || sm" @click="onNavigationDrawerButtonClick"></v-app-bar-nav-icon>
      </template>
    </v-app-bar>
    <v-main> <router-view> </router-view> </v-main>
    <v-navigation-drawer v-model="navDrawer" location="right" :disable-resize-watcher="true" floating>
      <v-list-item v-for="link in links" :key="link.name">
        <span @click="goTo(link.to)" class="text-button nav-link"> {{ link.name }} </span>
      </v-list-item>
    </v-navigation-drawer>
  </v-app>
</template>

<style>
.nav-link:hover {
  cursor: pointer;
}
.v-main {
  width: 100vw !important;
}
#app {
  margin: 0px !important;
  padding: 0px !important;
}
.v-toolbar__content {
  text-align: center !important;
}
</style>
