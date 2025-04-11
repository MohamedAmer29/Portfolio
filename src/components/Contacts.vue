<template>
  <div
    id="contacts"
    class="w-11/12 !mt-8 !pb-8 !m-auto !p-4 h-[44rem] relative max-md:h-fit"
  >
    <video
      autoplay
      loop
      muted
      class="absolute rounded-4xl top-0 left-0 w-full h-full object-cover opacity-95"
    >
      <source src="@/assets/contacts.mp4" type="video/mp4" />
    </video>
    <h1 class="text-4xl text-white font-bold relative">Contacts</h1>
    <div
      class="flex w-full !m-auto !p-4 !mt-8 text-white relative justify-between max-md:flex-col max-md:gap-4 max-md:w-full max-md:p-0 max-md:!mt-0"
    >
      <div class="w-1/3 max-md:w-full flex flex-col justify-around">
        <div v-motion-slide-visible-left :duration="500">
          <h1 class="text-2xl">Lest's chat Tell me about your project.</h1>
          <p>Let's create Something</p>
        </div>
        <p class="text-xl" v-motion-slide-visible-left :duration="600">
          <i class="pi pi-envelope mr-4"></i>Mail me at:<br />
          <span
            class="text-violet-600 cursor-pointer hover:text-violet-400"
            v-motion-slide-visible-left
            :duration="600"
          >
            <a href="mailto:m1o1h1a1a1@gmail.com">m1o1h1a1a1@gmail.com</a></span
          >
        </p>
        <p class="text-xl" v-motion-slide-visible-left :duration="600">
          <i class="pi pi-whatsapp mr-4"></i>Chat with me at:<br />
          <span
            class="text-violet-600 cursor-pointer hover:text-violet-400"
            v-motion-slide-visible-left
            :duration="600"
          >
            <a href="https://wa.me/+201009487734" target="_blank"
              >+201009487734</a
            ></span
          >
        </p>
        <p class="text-xl" v-motion-slide-visible-left :duration="600">
          <i class="pi pi-linkedin mr-4"></i>LinkedIn:<br />
          <span
            class="text-violet-600 cursor-pointer hover:text-violet-400"
            v-motion-slide-visible-left
            :duration="600"
          >
            <a
              href="https://www.linkedin.com/in/mohamed-amer-692415327/"
              target="_blank"
              >Mohamed Amer</a
            ></span
          >
        </p>
      </div>
      <div class="flex flex-col gap-4 w-1/2 relative max-md:w-full h-full">
        <form
          @submit.prevent="sendEmail"
          ref="form"
          id="form"
          v-motion-pop-visible
          :duration="500"
        >
          <div class="flex flex-col gap-4 formDiv">
            <h1 class="text-2xl w-fit">Send me a message</h1>
            <input
              type="text"
              placeholder="Fullname"
              name="name"
              required
              v-model="name"
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              v-model="name2"
            />
            <textarea class="hidden" name="time">
              {{ new Date(Date.now()).toLocaleDateString() }}
              {{ new Date(Date.now()).toLocaleTimeString() }}
            </textarea>
            <input
              type="text"
              placeholder="Subject"
              name="message"
              required
              v-model="name3"
            />
            <textarea
              name="textArea"
              placeholder="Aditional description"
              id="areaText"
              v-model="name4"
            ></textarea>
            <button class="self-start !bg-[#4F1C51] rounded-2xl !p-2">
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import emailjs from "@emailjs/browser";
import { ref } from "vue";
const name = ref<string>("");
const name2 = ref<string>("");
const name3 = ref<string>("");
const name4 = ref<string>("");
const sendEmail = () => {
  emailjs
    .sendForm("service_q52a46i", "template_bqrmuz8", "#form", {
      publicKey: "o4s-mSIrtA5IUv_HA",
    })
    .then(
      () => {
        name.value = "";
        name2.value = "";
        name3.value = "";
        name4.value = "";
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
};
</script>

<style scoped>
@import "tailwindcss";
.container {
  background-image: url("@/assets/contacts.mp4");
}
.formDiv {
  @apply border-4  rounded-3xl !p-4 max-md:w-full bg-black/[var(--bg-opacity)] [--bg-opacity:50%];
  animation-name: changeColor;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
.formDiv:hover {
  animation-duration: 0.8s;
}
.formDiv input,
textarea {
  @apply !mt-2 !p-2 !rounded-2xl   !border-b-[2px] !border-[#C68EFD]  w-4/5 bg-[#5e0089] focus:bg-[#b24fe0];
}
textarea {
  @apply h-32 max-md:h-24;
}
button {
  background: -webkit-linear-gradient(#d2f412, #de0772);
}
@keyframes changeColor {
  0% {
    border-top-color: #de0772;
    border-bottom-color: #de0772;
    border-left-color: #f59e0b;
    border-right-color: #f59e0b;

    /* border-y-[#ec4899] border-x-[#f59e0b]; */
  }
  50% {
    border-top-color: #f59e0b;
    border-bottom-color: #f59e0b;
    border-left-color: #de0772;
    border-right-color: #de0772;
    /* @apply border-x-[#ec4899] border-y-[#f59e0b]; */
  }
  100% {
    border-top-color: #de0772;
    border-bottom-color: #de0772;
    border-left-color: #f59e0b;
    border-right-color: #f59e0b;
    /* @apply border-y-[#ec4899] border-x-[#f59e0b]; */
  }
}
</style>
