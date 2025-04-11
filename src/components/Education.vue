<template>
  <div id="education">
    <div class="education">
      <h1 class="h1" v-motion-slide-visible-bottom :duration="400">
        Education
      </h1>
      <div
        class="flex flex-col gap-8 w-11/12 justify-center !m-auto overflow-auto !mb-8 scroll-smooth !p-4 border-b-2 border-white"
        style="scrollbar-width: thin; scrollbar-color: #a008ff #430280"
      >
        <v-timeline class="self-start">
          <v-timeline-item size="large">
            <template v-slot:icon>
              <v-avatar
                v-motion-fade-visible
                :duration="200"
                image="/src/assets/شعار_جامعة_بنها.png"
                class="bg-white"
              ></v-avatar>
            </template>
            <template v-slot:opposite>
              <span
                class="text-white text-lg font-semibold"
                v-motion-roll-visible-left
                :duration="400"
                >2022 - present</span
              >
            </template>
            <v-card
              class="elevation-2 text-white !bg-[#060216]"
              v-motion-roll-visible-right
              :duration="600"
            >
              <v-card-title class="text-h5 overflow-auto w-fit"
                >Faculty of Benha</v-card-title
              >
              <v-card-text class="text-white bg-[#060216]"
                >Faculty of Computer Science and Artificial Intelligence of
                Banha, Qalyubia, Egypt</v-card-text
              >
            </v-card>
          </v-timeline-item>
        </v-timeline>
        <v-timeline class="self-start">
          <v-timeline-item size="large">
            <template v-slot:icon>
              <v-avatar
                v-motion-fade-visible
                :duration="200"
                image="/src/assets/Ministry_of_Education_(Egypt)_logo_(wikiar).png"
                class="bg-white"
              ></v-avatar>
            </template>
            <template v-slot:opposite>
              <span
                class="text-white text-lg font-semibold"
                v-motion-roll-visible-right
                :duration="400"
                >2019 - 2022</span
              >
            </template>
            <v-card
              class="elevation-2"
              v-motion-roll-visible-right
              :duration="400"
            >
              <v-card-title
                class="text-h5 text-white bg-[#060216] overflow-hidden"
                >Ahmed Nabil</v-card-title
              >
              <v-card-text class="text-white bg-[#060216]"
                >High School of Martyr Ahmed Nabil Amara</v-card-text
              >
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Timeline from "primevue/timeline";
import Overview from "./Overview.vue";
</script>

<style scoped>
@import "tailwindcss";

.h1 {
  @apply text-center text-[6rem] self-start max-lg:text-[3rem];
  /* font-size: 72px; */
  background: -webkit-linear-gradient(#e7b3b3, #cdcccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
