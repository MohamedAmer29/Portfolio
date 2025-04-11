<template>
  <header class="">
    <div class="wrapper">
      <div
        class="nav bg-[#111827]/[var(--bg-opacity)] [--bg-opacity:80%] left-12 h-full !w-11/12 relative !left-12 bg-transparent transition-all duration-300 rounded-b-2xl"
        id="scroller2"
        v-if="!mobile"
      >
        <div class="lego w-1/2">
          <div class="scroll-smooth cursor-pointer" @click="scrollTop">
            <div
              class="self-center !mb-8 w-fit bg-[#FF8DC7]/[var(--bg-opacity)] [--bg-opacity:60%] home hover:[--bg-opacity:80%] h-8 rounded-2xl"
            >
              <img
                src="/src/assets/icon.ico"
                class="w-26 !h-26 translate-y-[-35px]"
              />
            </div>
          </div>
        </div>
        <div class="links">
          <div
            @click="scrollSpecific('overview')"
            class="block scroll-smooth text-white transition !ease-linear hover:text-yellow-300 duration-100 text-2xl md:text-lg"
          >
            About Me
          </div>
          <div
            @click="scrollSpecific('education')"
            class="block text-white scroll-smooth transition !ease-linear duration-100 text-2xl md:text-lg"
          >
            Education
          </div>
          <div
            @click="scrollSpecific('services')"
            class="scroll-smooth transition !ease-linear duration-300 text-2xl md:text-lg"
          >
            Services
          </div>
          <div
            @click="scrollSpecific('skills')"
            class="scroll-smooth transition !ease-linear duration-300 text-2xl md:text-lg"
          >
            Skills
          </div>
          <div
            @click="scrollSpecific('projects')"
            class="scroll-smooth transition !ease-linear duration-300 text-2xl md:text-lg"
          >
            Projects
          </div>
          <div
            @click="scrollSpecific('contacts')"
            class="scroll-smooth transition !ease-linear duration-300 text-2xl md:text-lg"
          >
            Contacts
          </div>
        </div>
      </div>
      <button
        v-if="mobile && !mobile2"
        @click="mobile1Slider = !mobile1Slider"
        class="fixed z-50 bottom-8 left-2 rounded-full !w-10 !h-10 text-2xl text-white font-bold"
        id="flip"
      >
        <i class="pi pi-times"></i>
      </button>
      <div
        class="mobileNav relative"
        v-if="mobile && !mobile2 && mobile1Slider"
      >
        <div
          class="slider bg-white"
          @click="active = !active"
          :class="active ? 'active' : ''"
        >
          <div @click="scrollTop" class="flex gap-4">
            <i class="self-center home translate-[-6px] !w-20 !h-8 rounded-2xl">
              <img
                src="/src/assets/icon.ico"
                class="!w-20 translate-y-[-20px]"
              />
            </i>
            <!-- <i
              class="pi pi-home"
              style="font-size: 2rem"
              @click="active = false"
            >
              <span>Home</span></i
            > -->
          </div>
          <div @click="scrollSpecific('overview')">
            <i
              class="pi pi-info-circle"
              @click="active = false"
              style="font-size: 2rem"
            >
              <span>About Me</span></i
            >
          </div>
          <div @click="scrollSpecific('education')">
            <i class="pi pi-graduation-cap"><span>Education</span></i>
          </div>
          <div @click="scrollSpecific('services')">
            <i class="pi pi-cog">
              <span>Services</span>
            </i>
          </div>
          <div @click="scrollSpecific('skills')">
            <i class="pi pi-trophy">
              <span>Skills</span>
            </i>
          </div>

          <div @click="scrollSpecific('projects')">
            <i class="pi pi-briefcase">
              <span>Projects</span>
            </i>
          </div>
          <div @click="scrollSpecific('contacts')">
            <i class="pi pi-id-card">
              <span>Contacts</span>
            </i>
          </div>
        </div>
      </div>
      <div class="mobileNav2" v-if="mobile2">
        <div
          class="flex justify-between w-[95vw] pl-4 fixed top-5 !w-11/12 bg-transparent rounded-b-2xl"
        >
          <div @click="scrollTop">
            <div
              class="!ml-2 !p-2 bg-[#FC5185]/[var(--bg-opacity)] [--bg-opacity:80%] rounded-4xl bg-transparent"
              id="scroller"
            >
              <div>
                <img src="/src/assets/logo0.png" class="w-20 !h-12" />
              </div>
            </div>
          </div>
          <div
            class="!ml-2 !p-2 !h-fit rounded-full bg-[#FC5185]/[var(--bg-opacity)] [--bg-opacity:80%] bg-transparent"
            id="scroller1"
          >
            <i
              class="pi pi-bars cursor-pointer text-white"
              style="font-size: 2rem"
              @click="slide = !slide"
            ></i>
          </div>
        </div>

        <div
          class="slider2"
          v-if="slide"
          @click.self="active = !active"
          :class="active ? 'active2' : ''"
        >
          <div @click="scrollSpecific('overview')">
            <i
              @click="active = false"
              class="pi pi-info-circle"
              style="font-size: 2rem"
            >
              <span>About Me</span></i
            >
          </div>
          <div @click="scrollSpecific('education')">
            <i @click="active = false" class="pi pi-graduation-cap"
              ><span>Education</span></i
            >
          </div>
          <div @click="scrollSpecific('services')">
            <i @click="active = false" class="pi pi-cog">
              <span>Services</span>
            </i>
          </div>
          <div @click="scrollSpecific('skills')">
            <i @click="active = false" class="pi pi-trophy">
              <span>Skills</span>
            </i>
          </div>

          <div @click="scrollSpecific('projects')">
            <i @click="active = false" class="pi pi-briefcase">
              <span>Projects</span>
            </i>
          </div>
          <div @click="scrollSpecific('contacts')">
            <i @click="active = false" class="pi pi-id-card">
              <span>Projects</span>
            </i>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
    <button
      id="backTopdown"
      @click="scrollTop"
      class="fixed bottom-8 right-6 bg-violet-700 text-white !w-10 !h-10 !p-2 rounded-full z-50 hidden"
    >
      <i class="pi pi-arrow-down" id="backTopArrow"></i>
    </button>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const mobile = ref<boolean>(false);
const mobile2 = ref<boolean>(false);
const active = ref<boolean>(false);
const mobile1Slider = ref<boolean>(true);
const slide = ref<boolean>(false);

// const showSlider = () => {
//   show.value = !show.value;
// };
const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const scrollSpecific = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
onMounted(() => {
  if (window.innerWidth < 1000) {
    mobile.value = true;
  } else {
    mobile.value = false;
  }
  if (window.innerWidth < 650) {
    mobile2.value = true;
  } else {
    mobile2.value = false;
  }
  addEventListener("resize", () => {
    if (window.innerWidth < 1000) {
      mobile.value = true;
    } else {
      mobile.value = false;
    }
  });
  addEventListener("resize", () => {
    if (window.innerWidth < 650) {
      mobile2.value = true;
    } else {
      mobile2.value = false;
    }
  });
});
</script>

<style scoped>
@import "tailwindcss";
.wrapper {
  @apply flex justify-between items-center   relative z-30 w-full;
}
.nav {
  @apply flex fixed mt-1 top-0  !text-white justify-between w-full pl-8 h-20 pt-6;
}
.links {
  @apply flex justify-between w-2/5 pr-10;
  @media (max-width: 1215px) {
    @apply w-3/5;
  }
}
.nav .links div {
  @apply !text-[1.11rem] !font-semibold scroll-smooth cursor-pointer hover:!text-yellow-300;
  @media (max-width: 900px) {
    @apply ml-4;
  }
  @media (max-width: 900px) {
    @apply ml-6;
  }
}
.nav .links div:hover {
  @apply !text-yellow-300;
}
/* #slideIcon i {
  @apply right-0;
} */
/* .active {
  @apply !w-65;
} */
.active2 {
  @apply !w-40;
}
.slider {
  @apply fixed flex flex-col top-0 left-0 h-[110vh]  w-[3.8rem] text-xl pt-2 pl-1.5  overflow-hidden hover:w-50 pt-6  flex flex-col overflow-hidden whitespace-nowrap py-2 rounded-r-xl !bg-[#430280] hover:!bg-[#430280]/[var(--bg-opacity)] [--bg-opacity:60%] !text-white;
  transition: all 0.5s ease-in-out;
  i {
    @apply w-2 !text-xl;
  }
  span {
    @apply ml-6 !text-lg;
  }
}
.slider2 {
  @apply fixed flex flex-col top-0 left-0 h-[100vh]  w-[3.5rem] !text-sm pt-3 pl-4  overflow-hidden hover:w-40  flex flex-col overflow-hidden whitespace-nowrap py-3 rounded-r-xl !bg-[#430280] hover:!bg-[#430280]/[var(--bg-opacity)] [--bg-opacity:60%]  !text-white;
  transition: all 0.5s ease-in-out;
  i {
    @apply w-2 !text-[1.2rem];
  }
  span {
    @apply ml-4 text-[1.2rem];
  }
}

.slider div {
  @apply p-4 py-6  hover:bg-[#a008ff] hover:opacity-80 mr-2 rounded-xl cursor-pointer;
}
.slider2 div {
  @apply p-1 py-4   hover:bg-[#a008ff] hover:opacity-80 mr-1 rounded-xl cursor-pointer;
}
#backTopdown {
  background-color: rgb(117, 37, 191);
  transition: transform 0.5s ease-in-out;
}
#backTopdown:hover {
  background-color: #f59e0b;
  transform: rotate(180deg) scale(1.2);
}
#flip {
  background-color: #a5158c;
  transition: transform 0.5s ease-in-out;
}
#flip:hover {
  background: -webkit-linear-gradient(#f59e0b, #ec4899);
  transform: rotate(90deg) scale(1.2);
}
</style>
