<script setup lang="ts">
import { onBeforeMount, onDeactivated, ref, watch } from 'vue'
function keyUpHandler(e: KeyboardEvent) {
  if (e.key === 'ArrowRight') {
    nextPhoto()
  } else if (e.key === 'ArrowLeft') {
    previousPhoto()
  }
}
onBeforeMount(() => {
  window.addEventListener('keyup', keyUpHandler)
})
onDeactivated(() => {
  window.removeEventListener('keyup', keyUpHandler)
})

const props = defineProps<{
  isOpen: boolean
  numPhotos: number
  startingIndex: number
}>()
const currentIndex = ref(props.startingIndex)

watch(
  () => props.startingIndex,
  (newIndex: number) => {
    currentIndex.value = newIndex
  }
)

function nextPhoto() {
  currentIndex.value++
  if (currentIndex.value > props.numPhotos) {
    currentIndex.value = 1
  }
}

function previousPhoto() {
  currentIndex.value--
  if (currentIndex.value < 1) {
    currentIndex.value = props.numPhotos - 1
  }
}
</script>

<template>
  <v-overlay :model-value="isOpen" class="align-center justify-center">
    <v-container id="top-container" fluid>
      <v-row align="center" class="my-1 py-0" style="z-index: 2 !important">
        <v-spacer />
        <v-col cols="1" class="my-0 py-0 text-left">
          <v-icon
            icon="mdi-close"
            @click="$emit('closeGallery')"
            size="x-large"
            color="#000000"
          ></v-icon>
        </v-col>
      </v-row>
      <v-row align="center" class="fill-height pt-0 mt-0">
        <v-col cols="1" class="text-right nav-column py-0" @click="previousPhoto">
          <v-row align="center" class="fill-height">
            <v-col>
              <v-icon icon="mdi-less-than" size="x-large" color="#000000"></v-icon>
            </v-col>
          </v-row>
        </v-col>
        <v-col :key="currentIndex" style="height: 100% !important" class="py-0">
          <v-row align="center" class="fill-height">
            <v-col class="py-0">
              <v-img
                :src="`${currentIndex.toString().padStart(4, '0')}.jpg`"
                :max-height="'85vh'"
                :max-width="'80vw'"
              >
              </v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="1" class="text-left nav-column py-0" @click="nextPhoto">
          <v-row align="center" class="fill-height">
            <v-col>
              <v-icon icon="mdi-greater-than" size="x-large" color="#000000"></v-icon>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-overlay>
</template>
<style>
.v-overlay__content {
  width: 100%;
  height: 100vh;
}

.v-overlay__scrim {
  opacity: 0.9 !important;
  background-color: #ffffff !important;
}

#top-container {
  height: 100vh !important;
}

.nav-column {
  cursor: pointer;
  height: 100% !important;
}

#blank-icon {
  opacity: 0 !important;
}
</style>
