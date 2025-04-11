<template>
  <div
    id="container"
    style="scrollbar-width: thin; scrollbar-color: #a008ff #430280"
  >
    <div class="!relative">
      <Navbar />
      <Info />
      <Overview />
      <Education />
      <Services />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";

import Education from "./components/Education.vue";
import Info from "./components/Info.vue";
import Services from "./components/Services.vue";
import Skills from "./components/Skills.vue";
import Navbar from "./components/Navbar.vue";
import Overview from "./components/Overview.vue";
import Projects from "./components/Projects.vue";
import Contacts from "./components/Contacts.vue";
import Footer from "./components/Footer.vue";

onMounted(() => {
  addEventListener("scroll", () => {
    const scroller = document.getElementById("scroller");

    const scroller1 = document.getElementById("scroller1");
    const scroller2 = document.getElementById("scroller2");
    const backTopdown = document.getElementById("backTopdown");

    if (scrollY > 100) {
      if (scroller && scroller1) {
        scroller.classList.remove("bg-transparent");
        scroller1.classList.remove("bg-transparent");
        scroller.classList.add("opacity-90");
        scroller1.classList.add("opacity-90");
      }
    } else {
      if (scroller && scroller1) {
        scroller.classList.add("bg-transparent");
        scroller1.classList.add("bg-transparent");
      }
    }
    if (scrollY > 100) {
      if (scroller2) {
        scroller2.classList.remove("bg-transparent");

        scroller2.classList.add("opacity-90");
      }
    } else {
      if (scroller2) {
        scroller2.classList.add("bg-transparent");
      }
    }
  });
  addEventListener("scroll", () => {
    const backTopdown = document.getElementById("backTopdown");
    if (scrollY > 500) {
      if (backTopdown) {
        backTopdown.classList.remove("hidden");
      }
    } else {
      if (backTopdown) {
        backTopdown.classList.add("hidden");
      }
    }
  });
});
</script>

<style scoped>
@import "tailwindcss";
#container {
  @apply object-cover bg-cover bg-no-repeat bg-center !w-full !h-[400%];
  background-image: url("/src/assets/Purple Gradient Futuristic Background Instagram Story.png");
  height: 100vh;
}
</style>
