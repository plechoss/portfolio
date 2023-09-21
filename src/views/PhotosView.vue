<script setup lang="ts">
import { computed, ref } from 'vue'
import { useDisplay } from 'vuetify'

const { xs, sm, md } = useDisplay()

const numPhotos = ref(47)

const cols = computed(() => {
  if (md.value) return 3
  if (sm.value) return 4
  if (xs.value) return 12
  else return 2
})

const numPhotosPerCol = computed(() => {
  return Math.floor(numPhotos.value * cols.value / 12)
})
</script>

<template>
  <v-container fluid class="pt-0 mt-0">
    <v-row class="pt-0 mt-0">
      <v-col v-for="colIdx in Array(12 / cols).keys()" :key="`col${colIdx}`" class="ma-0 pa-0" :cols="cols">
        <v-row
          v-for="i in Array(numPhotosPerCol)
            .fill(colIdx * numPhotosPerCol + 1)
            .map((x, y) => x + y)"
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
              <v-img :src="`/assets/photos/${i.toString().padStart(4, '0')}.jpg`"></v-img>
            </v-lazy>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
