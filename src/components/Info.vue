<template>
  <div class="info" v-motion-pop-visible>
    <div >
      <h1 class="name" v-motion-slide-visible-left >
        Hi, I'm <span class="Name">Mohamed</span>
        <div class="hi inline-block">👋</div>
      </h1>
      <p class="p1">
        I am a
        <vue-writer
          :array="['Software Engineer', 'Frontend Developer']"
          class="inline-block  text-lg writer"
          :typeSpeed="100"
        />
      </p>
      <p class="p2">Welcome to my portfolio</p>
      <div class="flex mt-8 w-full" >
        <button @click="scrollSpecific('contacts')"
          id="btn1"
        >
          Hire Me
        </button>
        <button
          id="btn2"
          
        >
          <a href="/src/assets/CV.docx" download="CV.docx" >
            <i class="pi pi-download"></i>
          Download Resume
          </a>
        </button>
      </div>
    </div>
    <div class="img imgDiv !bg-transparent">
      <vue-flip :active-hover="true"  transition="3s"  >
        <template v-slot:front class="front">
          <img src="/src/assets/mee.jpg" alt="img" class="img" />
        </template>
        <template v-slot:back class="back">
        
          <p
            class="img img2 flex flex-col justify-center items-center font-bold  text-white !p-6"
          >
          <h1 class="mb-8 text-4xl">Overview</h1>
            Passionate Computer Science Student | Full Stack Developer.
            Currently in my third year, consistently achieving top grades, and
            driven by a genuine desire to innovate and create meaningful
            solutions.
          </p>
        </template>
      </vue-flip>
    </div>
  </div>
</template>

<script setup lang="ts">

const scrollSpecific = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
import { VueFlip } from "vue-flip";
</script>

<style scoped>
@import "tailwindcss";
#btn1{
  @apply p-3 bg-[#FFC100] px-10 rounded-3xl text-xl text-white font-semibold  cursor-pointer hover:scale-110 hover:bg-yellow-500 transition-all duration-300 ease-in-out mr-8 max-lg:p-2 max-lg:px-4 max-lg:text-lg;
}
#btn2{
  @apply p-2 max-lg:p-1 max-lg:px-4 text-[#ffc100] border-2 border-[#ffc100] px-10 rounded-3xl text-xl font-semibold cursor-pointer hover:scale-110 transition-all duration-300 hover:bg-[#111827]/[var(--bg-opacity)] [--bg-opacity:60%] ease-in-out max-lg:text-lg
}
.info {
  @apply text-black  relative z-20 pb-8 !w-11/12  !m-auto pt-10 flex justify-between !mt-24 border-b-2 border-b-white;
  @media (max-width: 900px) {
    @apply w-11/12 ml-7 mt-4 flex-col items-center;
  }
}
.Name{
  background: -webkit-linear-gradient(#f59e0b, #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.writer {
  @apply  text-3xl font-bold;
  background: -webkit-linear-gradient(#0532ad, #300259);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.name {
  @apply text-[4rem] font-bold font-bold text-white;
}
.img {
  @apply w-[25rem] h-[25rem] shadow-2xl shadow-[#08010f]  hover:shadow-[#450189]  rounded-full p-1;
}
.p1,
.p2 {
  @apply text-2xl font-bold text-white mt-4;
}
@media (max-width: 900px) {
  .name {
    @apply !text-xl;
  }
  .name span {
    @apply text-2xl;
  }
  .p1,
  .p2 {
    @apply text-lg;
  }
  .p1 .writer {
    @apply text-xl;
    letter-spacing: -1px;
  }
}
@media (max-width: 1210px) {
  .info {
    @apply !w-2/3;
  }
  .name {
    @apply !text-[1.8rem];
  }
  .p1,
  .p2 {
    @apply !text-[1.2rem];
  }
  .imgDiv {
    @apply mt-8 border-2 border-[#08010f];
  }
  .img {
    @apply w-[20rem] h-[20rem];
  }
}
.img2{
    background-image: url('src/assets/Dark Blue and Pink Futuristic Technology Background Instagram Story.png');

}
.hi {
  transform: rotate(-15deg);
  animation: hiHand 1500ms ease-out infinite !important;
  animation-delay: 1.5s !important;
}
@keyframes hiHand {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
