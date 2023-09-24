<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { computed, ref } from 'vue'
import router from './router'
import { useBreakpoints } from './helpers/breakpoints'

const { isSmallScreen } = useBreakpoints()

const navDrawer = ref(false)
const links = ref([
  { name: 'photos', to: '/' },
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
    <v-app-bar :density="isSmallScreen ? 'default' : 'prominent'" elevation="0" fluid>
      <v-row align="center" justify="center" class="fill-height my-0 px-4">
        <v-spacer v-if="!isSmallScreen" />
        <v-col v-if="!isSmallScreen">
          <span
            @click="goTo('/')"
            class="text-caption font-weight-bold text-grey-darken-2 nav-link"
            >PHOTOS</span
          >
        </v-col>
        <v-col :class="isSmallScreen ? 'text-left' : ''">
          <span @click="goTo('/')" class="text-h6 nav-link"> PLESKOWICZ </span>
        </v-col>
        <v-col v-if="!isSmallScreen">
          <span
            @click="goTo('/about')"
            class="text-caption text-grey-darken-2 font-weight-bold nav-link"
            >ABOUT</span
          >
        </v-col>
        <v-spacer />
      </v-row>
      <template #append>
        <v-app-bar-nav-icon
          icon="mdi-instagram"
          href="https://www.instagram.com/plesk0t"
        ></v-app-bar-nav-icon>
        <v-app-bar-nav-icon
          v-if="isSmallScreen"
          @click="onNavigationDrawerButtonClick"
        ></v-app-bar-nav-icon>
      </template>
    </v-app-bar>
    <v-main> <router-view> </router-view> </v-main>
    <v-navigation-drawer
      v-model="navDrawer"
      location="right"
      :disable-resize-watcher="true"
      floating
    >
      <v-list-item v-for="link in links" :key="link.name">
        <span @click="goTo(link.to)" class="text-button font-weight-bold nav-link">
          {{ link.name }}
        </span>
      </v-list-item>
    </v-navigation-drawer>

    <v-footer class="text-center d-flex flex-column">
      <div>
        <span class="text-caption text-grey-darken-1"> © Michał Pleskowicz 2023 </span>
      </div>
      <v-divider></v-divider>
    </v-footer>
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
