<script setup lang="ts">
import { computed } from 'vue'
import { useBreakpoints } from '../helpers/breakpoints'

const { isSmallScreen } = useBreakpoints()

const cols = computed(() => {
  return isSmallScreen.value ? '12' : '6'
})
</script>


<template>
  <v-container>
    <v-row align="center">
      <v-col :cols="cols">
        <v-img src="/assets/photos/profile.jpg" max-width="500" class="mx-auto"></v-img>
      </v-col>
      <v-col :cols="cols">
        <p class="text-h3 font-weight-bold">ABOUT</p>
        <p class="text-subtitle-1 font-italic">
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
          will uncover many web sites still in their infancy. Various versions have evolved over the
          years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
</style>
