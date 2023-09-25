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
      <v-row align="center" class="fill-height">
        <v-col cols="1" class="text-right nav-column" @click="previousPhoto">
          <v-row align="center" class="fill-height">
            <v-col>
              <v-icon icon="mdi-less-than" size="x-large" color="#000000"></v-icon>
            </v-col>
          </v-row>
        </v-col>
        <v-col :key="currentIndex">
          <v-img
            :src="`${currentIndex.toString().padStart(4, '0')}.jpg`"
            :max-height="'85vh'"
            :max-width="'80vw'"
          >
          </v-img>
        </v-col>
        <v-col cols="1" class="text-left nav-column align-center" @click="nextPhoto">
          <v-row align="center" class="fill-height">
            <v-col>
              <v-icon icon="mdi-greater-than" size="x-large" color="#000000"></v-icon>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-icon
        id="close-icon"
        icon="mdi-close"
        @click="$emit('closeGallery')"
        size="x-large"
        color="#000000"
      ></v-icon>
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

#close-icon {
  position: absolute;
  top: 40px;
  right: 56px;
}

.nav-column {
  cursor: pointer;
  height: 100% !important;
}
</style>
