<template>
  <div id="services">
    <h1 class="text-4xl font-bold text-white !mb-10 w-11/12 !m-auto">
      My Services
    </h1>
    <div
      class="grid grid-cols-3 gap-14 w-11/12 !m-auto !p-4 gridDiv border-b-2 max-lg:gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-4 border-b-white !mb-8"
    >
      <div v-motion-slide-visible-bottom :duration="800">
        <img src="/src/assets/coding.png" alt="coding image" />
        <h1>Web Developing</h1>
        <p>I am FrontEnd Developer with using vuejs</p>
      </div>
      <div v-motion-slide-visible-bottom :duration="800">
        <img src="/src/assets/keyboard.png" alt="typing image" />
        <h1>Technical Writing</h1>
        <p>Technical writing</p>
      </div>
      <div v-motion-slide-visible-bottom :duration="800">
        <img src="/src/assets/application.png" alt="application image" />
        <h1>Application Development</h1>
        <p>I use Java for bulding Applications</p>
      </div>
      <div v-motion-slide-visible-bottom :duration="800">
        <img src="/src/assets/api.png" alt="backend image" />
        <h1>BackEnd Developer</h1>
        <p>I use Node for backend</p>
      </div>
      <div v-motion-slide-visible-bottom :duration="800">
        <img src="/src/assets/system-administration.png" alt="IT image" />
        <h1>Basic IT Stuff</h1>
        <p>I have Knowledge in basic networking</p>
      </div>
      <div v-motion-slide-visible-bottom :duration="800">
        <img src="/src/assets/content-management.png" alt="support image" />
        <h1>Technical Support</h1>
        <p>I have basic information of A+</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Education from "./Education.vue";
</script>

<style scoped>
@import "tailwindcss";
.gridDiv div {
  @apply bg-[#181c3c] text-white flex items-center justify-center flex-col rounded-2xl hover:shadow-2xl hover:bg-[#181c3c]/[var(--bg-opacity)] [--bg-opacity:80%] !shadow-amber-700;
  h1 {
    @apply text-2xl font-bold mb-2;
    background: -webkit-linear-gradient(#f59e0b, #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  img {
    @apply w-2/5 h-2/5 mb-4;
  }
}
</style>
