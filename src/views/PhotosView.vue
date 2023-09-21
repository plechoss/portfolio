<script setup lang="ts">
</script>

<template>
  <!-- <v-container fluid>
      </v-container> -->
  <v-container fluid>
    <v-row class="d-flex flex-row">
      <v-col class="d-flex child-flex">
        <span class="text-h3"> Tytuł strony </span>
      </v-col>
    </v-row>
    <v-row class="d-flex flex-row">
      <v-col class="d-flex child-flex">
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum
        </span>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-img :src="`../src/assets/photos/0001.jpg`"></v-img>
      </v-col>
    </v-row>
    <!-- <v-row>
          <v-col
            v-for="i in Array(10)
              .fill(10)
              .map((x, y) => x + y)"
            :key="i"
            class="d-flex child-flex"
          >
            <v-img :src="`../src/assets/photos/00${i}.jpg`"></v-img>
          </v-col>
          <v-col
            v-for="i in Array(10)
              .fill(20)
              .map((x, y) => x + y)"
            :key="i"
            class="d-flex child-flex"
          >
            <v-img :src="`../src/assets/photos/00${i}.jpg`"></v-img>
          </v-col>
          <v-col
            v-for="i in Array(30)
              .fill(10)
              .map((x, y) => x + y)"
            :key="i"
            class="d-flex child-flex"
          >
            <v-img :src="`../src/assets/photos/00${i}.jpg`"></v-img>
          </v-col>
          <v-col
            v-for="i in Array(10)
              .fill(40)
              .map((x, y) => x + y)"
            :key="i"
            class="d-flex child-flex"
          >
            <v-img :src="`../src/assets/photos/00${i}.jpg`"></v-img>
          </v-col>
        </v-row> -->
    <v-row class="d-flex child-flex">
      <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
          cover
          class="bg-grey-lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
  <!--     
    <v-navigation-drawer v-model="navDrawer" location="right" sticky>
      <v-list-item v-for="link in links" :key="link.name">
        {{ link.name }}
      </v-list-item>
    </v-navigation-drawer> -->
</template>
