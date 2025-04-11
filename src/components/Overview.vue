<template>
  <div class="container" id="overview">
    <div class="overview">
      <h1 class="h1" v-motion-slide-visible-left :duration="1500">Overview</h1>
      <div class="flex justify-between max-lg:flex-col h-fit">
        <div class="img">
          <img
            v-motion-fade-visible
            :duration="2000"
            src="/src/assets/mee.jpg"
            alt="image"
          />
          <div class="flex flex-col">
            <div class="mb-4 mt-4 above">
              <button class="mr-2" v-motion-slide-visible-left :duration="1200">
                Facebook
              </button>
              <button
                class="ml-4"
                v-motion-slide-visible-right
                :duration="1200"
              >
                <a
                  href="https://www.linkedin.com/in/mohamed-amer-692415327/"
                  target="_blank"
                  >LinkedIn</a
                >
              </button>
            </div>
            <button
              class="self-center"
              v-motion-roll-visible-bottom
              :duration="1200"
            >
              <a href="https://github.com/MohamedAmer29" target="_blank"
                >GitHub</a
              >
            </button>
          </div>
        </div>
        <p class="p1" v-motion-slide-visible-right :duration="1500">
          I am a software engineer with a passion for building web applications.
          I have experience in full-stack development, including front-end and
          back-end technologies. I am always eager to learn new skills and
          improve my knowledge in the field.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Info from "./Info.vue";
</script>

<style scoped>
@import "tailwindcss";
.overview {
  @apply text-black  relative z-20 pb-8 !w-11/12   !mx-auto pt-4 flex flex-col justify-between px-4 border-b-2 border-b-white font-bold hover:shadow-2xl !mt-8 mb-8  shadow-violet-700  max-lg:!pl-10;
  overflow: hidden;

  background-image: url("/src/assets/Revised.png");

  @media (max-width: 900px) {
    @apply w-11/12 ml-7 mt-4 flex-col items-center;
  }
}
img {
  @apply w-[15rem] h-[15rem] shadow-2xl shadow-[#08010f] hover:shadow-[#450189]  rounded-full p-1;
}
.img {
  @apply w-[15rem] bg-transparent p-1 mb-4;
}
.h1 {
  @apply text-center text-[6rem] self-start max-lg:text-[3rem];
  /* font-size: 72px; */
  background: -webkit-linear-gradient(#eee, #6e6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
button {
  @apply relative z-20 text-white font-bold py-2 px-4 rounded-xl hover:shadow-2xl shadow-violet-600 cursor-pointer hover:opacity-85;
  background: linear-gradient(to right, #0b0a17, #520b8b);
}
.above button {
  background: linear-gradient(to right, #050594, #350f52);
  @apply text-white font-bold py-2 px-4;
}
.p1 {
  @apply text-xl font-bold inline-block w-2/3 text-white mt-4 max-lg:text-lg;
}
/* .container {
  @apply object-cover bg-cover bg-no-repeat bg-center  pb-8 !w-[100vw];
  background-image: url("/src/assets/Purple Gradient Futuristic Background Instagram Story.png");
} */
</style>
