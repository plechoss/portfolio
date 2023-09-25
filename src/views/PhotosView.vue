<script setup lang="ts">
import { computed, ref } from 'vue'
import { useDisplay } from 'vuetify'

import PhotoGallery from '@/components/PhotoGallery.vue'

const { xs, sm, md } = useDisplay()
const imgClass = computed(() => {
  return xs.value ? 'small-screen' : ''
})

const numPhotos = ref(47)

const cols = computed(() => {
  if (md.value) return 3
  if (sm.value) return 4
  if (xs.value) return 12
  else return 2
})

const numPhotosPerCol = computed(() => {
  return Math.floor((numPhotos.value * cols.value) / 12)
})

const isGalleryOpen = ref(false)
const galleryIndex = ref(0)

function openGallery(i: number) {
  if (xs.value) return
  console.log('opening gallery')
  galleryIndex.value = i
  isGalleryOpen.value = true
}

function closeGallery() {
  isGalleryOpen.value = false
}
</script>

<template>
  <v-container fluid class="pt-0 mt-0">
    <v-row class="pt-0 mt-0">
      <v-col
        v-for="colIdx in Array(12 / cols).keys()"
        :key="`col${colIdx}`"
        class="ma-0 pa-0"
        :cols="cols"
      >
        <v-row
          v-for="i in Array(numPhotosPerCol + 1)
            .fill(colIdx + 1)
            .map((x, y) => x + (12 / cols) * y)"
          :key="i"
          no-gutters
        >
          <v-col>
            <v-lazy
              :min-height="100"
              :options="{ threshold: 0.5 }"
              transition="fade-transition"
              class="pr-1 pb-1 pt-0 pl-0"
            >
              <v-img
                :src="`small-${i.toString().padStart(2, '0')}.jpg`"
                :class="imgClass"
                @click="openGallery(i)"
              ></v-img>
            </v-lazy>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <template v-if="!xs">
    <photo-gallery
      :is-open="isGalleryOpen"
      :starting-index="galleryIndex"
      :num-photos="numPhotos"
      @close-gallery="closeGallery"
    ></photo-gallery>
  </template>
</template>

<style scoped>
.v-img:not(.small-screen):hover {
  cursor: pointer !important;
}
</style>
