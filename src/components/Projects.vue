<template>
  <h1
    class="text-4xl text-white font-bold !mt-8 w-11/12 !px-4 !m-auto"
    id="projects"
  >
    My Projects
  </h1>
  <div
    class="!mt-2 !p-4 w-11/12 !m-auto grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12 mt-10 mb-10 container !pb-8 border-b-2 border-b-white"
  >
    <div
      v-motion-pop-visible
      :duration="500"
      class="rounded-lg shadow-lg flex flex-col justify-between !mb-2 hover:shadow-2xl shadow-white"
    >
      <div class="imgWrapper relative">
        <img
          class="h-[24rem] max-md:h-[20rem] max-sm:h-[16rem] rounded-t-2xl"
          src="/src/assets/gameblogs.png"
          alt="Game Blogs Image"
        />
        <div
          class="absolute opacity-0 w-full h-full top-0 rounded-t-lg flex justify-center items-center hover:!opacity-100 z-50 transition-all bg-gray-600/[var(--bg-opacity)] [--bg-opacity:50%] !duration-300 max-sm:!opacity-100 max-sm:hover:!opacity-100 max-sm:absolute max-sm:h-[4rem] max-sm:!bg-transparent max-sm:!justify-between max-sm:!p-2"
        >
          <div
            class="w-14 h-14 rounded-full border-3 border-gray-400 hover:border-white cursor-pointer !p-2 hover:!opacity-100 transition-all duration-300"
          >
            <a
              href="https://github.com/MohamedAmer29/GameBlogs"
              target="_blank"
            >
              <img src="/src/assets/code.png" alt="Code Image" />
            </a>
          </div>
          <div
            class="w-14 h-14 rounded-full border-3 border-gray-400 hover:border-white cursor-pointer !p-2 hover:!opacity-100 !ml-4 transition-all duration-300"
          >
            <a
              href="https://playful-churros-d0e416.netlify.app/"
              target="_blank"
            >
              <img src="/src/assets/eye.png" alt="Eye Image" />
            </a>
          </div>
        </div>
      </div>
      <div class="textWrapper mt-2 bg-[#102E50] !p-4">
        <h1 class="text-2xl text-white font-bold">Game Blogs</h1>
        <p
          class="text-white font-light leading-8 max-sm:text-sm max-sm:leading-6"
        >
          This is an app that publishs posts about games and most player or
          popular games We have two actors in this app<br />
          1- User : who will use the app.<br />
          2- Admin: who will publish the posts.
        </p>
        <div class="gap-2 mt-4 text-wrap h-[5rem]">
          <p class="mb-6 text-wrap">
            <span>Vue3</span>
            <span>TypeScript</span>
            <span>Firebase</span>
          </p>
          <p>
            <span>Tailwind</span>
            <span>Html</span>
          </p>
        </div>
      </div>
    </div>
    <div
      v-motion-pop-visible
      :duration="550"
      class="rounded-lg shadow-lg flex flex-col justify-between !mb-2 hover:shadow-2xl shadow-white"
    >
      <div class="imgWrapper relative">
        <img
          class="h-[24rem] max-md:h-[20rem] max-sm:h-[16rem] rounded-t-2xl"
          src="/src/assets/Res.png"
          alt="Game Blogs Image"
        />
        <div
          class="absolute opacity-0 w-full h-full top-0 rounded-t-lg flex justify-center items-center hover:!opacity-100 z-50 transition-all bg-gray-600/[var(--bg-opacity)] [--bg-opacity:50%] !duration-300 max-sm:!opacity-100 max-sm:hover:!opacity-100 max-sm:absolute max-sm:h-[4rem] max-sm:!bg-transparent max-sm:!justify-between max-sm:!p-2"
        >
          <div
            class="w-14 h-14 rounded-full border-3 border-gray-400 hover:border-white cursor-pointer !p-2 hover:!opacity-100 transition-all duration-300"
          >
            <a
              href="https://github.com/MohamedAmer29/Restaurants"
              target="_blank"
            >
              <img src="/src/assets/code.png" alt="Code Image" />
            </a>
          </div>
          <div
            class="w-14 h-14 rounded-full border-3 border-gray-400 hover:border-white cursor-pointer !p-2 hover:!opacity-100 !ml-4 transition-all duration-300"
          >
            <a
              href="https://unique-griffin-fbaaf6.netlify.app/"
              target="_blank"
            >
              <img src="/src/assets/eye.png" alt="Eye Image" />
            </a>
          </div>
        </div>
      </div>
      <div class="textWrapper mt-2 bg-[#102E50] !p-4">
        <h1 class="text-2xl text-white font-bold">Restaurant app</h1>
        <p
          class="text-white font-light leading-8 max-sm:text-sm max-sm:leading-6"
        >
          In this app we sorts all restaurants names, address and contacts.<br />
          You have the ablity to<br />
          update its information and delete it, Add restaurant and Update tab to
          updata a restaurant information
        </p>
        <div class="gap-2 mt-4 text-wrap h-[5rem]">
          <p class="mb-6 text-wrap">
            <span>Vue3</span>
            <span>TypeScript</span>
            <span>Pinia</span>
          </p>
          <p>
            <span>Tailwind</span>
            <span>Html</span>
          </p>
        </div>
      </div>
    </div>
    <div
      v-motion-pop-visible
      :duration="600"
      class="rounded-lg shadow-lg flex flex-col justify-between !mb-2 hover:shadow-2xl shadow-white"
    >
      <div class="imgWrapper relative">
        <img
          class="h-[24rem] max-md:h-[20rem] max-sm:h-[16rem] rounded-t-2xl"
          src="/src/assets/quizes.png"
          alt="Game Blogs Image"
        />
        <div
          class="absolute opacity-0 w-full h-full top-0 rounded-t-lg flex justify-center items-center hover:!opacity-100 z-50 transition-all bg-gray-600/[var(--bg-opacity)] [--bg-opacity:50%] !duration-300 max-sm:!opacity-100 max-sm:hover:!opacity-100 max-sm:absolute max-sm:h-[4rem] max-sm:!bg-transparent max-sm:!justify-between max-sm:!p-2"
        >
          <div
            class="w-14 h-14 rounded-full border-3 border-gray-400 hover:border-white cursor-pointer !p-2 hover:!opacity-100 transition-all duration-300"
          >
            <a
              href="https://github.com/MohamedAmer29/Simple-Quizes_App"
              target="_blank"
            >
              <img src="/src/assets/code.png" alt="Code Image" />
            </a>
          </div>
          <div
            class="w-14 h-14 rounded-full border-3 border-gray-400 hover:border-white cursor-pointer !p-2 hover:!opacity-100 !ml-4 transition-all duration-300"
          >
            <a
              href="https://dynamic-dragon-9c0e76.netlify.app/"
              target="_blank"
            >
              <img src="/src/assets/eye.png" alt="Eye Image" />
            </a>
          </div>
        </div>
      </div>
      <div class="textWrapper mt-2 bg-[#102E50] !p-4">
        <h1 class="text-2xl text-white font-bold">Quizes app</h1>
        <p
          class="text-white font-light leading-8 max-sm:text-sm max-sm:leading-6"
        >
          Test your knowledge with our fun and interactive web quiz app!
          Designed for quick learning and instant feedback, it covers a variety
          of topics and difficulty levels. Challenge friends, track your
          progress, and sharpen your skills anytime, anywhere.
        </p>
        <div class="gap-2 mt-4 text-wrap h-[5rem]">
          <p class="mb-6 text-wrap">
            <span>Vue3</span>
            <span>TypeScript</span>
            <span>Pinia</span>
          </p>
          <p>
            <span>Tailwind</span>
            <span>Html</span>
          </p>
        </div>
      </div>
    </div>
    <div
      v-motion-pop-visible
      :duration="650"
      class="rounded-lg shadow-lg flex flex-col justify-between !mb-2 hover:shadow-2xl shadow-white"
    >
      <div class="imgWrapper relative">
        <img
          class="h-[24rem] max-md:h-[20rem] max-sm:h-[16rem] rounded-t-2xl"
          src="/src/assets/piniaTasks.png"
          alt="Game Blogs Image"
        />
        <div
          class="absolute opacity-0 w-full h-full top-0 rounded-t-lg flex justify-center items-center hover:!opacity-100 z-50 transition-all bg-gray-600/[var(--bg-opacity)] [--bg-opacity:50%] !duration-300 max-sm:!opacity-100 max-sm:hover:!opacity-100 max-sm:absolute max-sm:h-[4rem] max-sm:!bg-transparent max-sm:!justify-between max-sm:!p-2"
        >
          <div
            class="w-14 h-14 rounded-full border-3 border-gray-400 hover:border-white cursor-pointer !p-2 hover:!opacity-100 transition-all duration-300"
          >
            <a
              href="https://github.com/MohamedAmer29/Pinia-Tasks-Management_App"
              target="_blank"
            >
              <img src="/src/assets/code.png" alt="Code Image" />
            </a>
          </div>
          <div
            class="w-14 h-14 rounded-full border-3 border-gray-400 hover:border-white cursor-pointer !p-2 hover:!opacity-100 !ml-4 transition-all duration-300"
          >
            <a
              href="https://mohamedamer29.github.io/Pinia-Tasks-Management_App/"
              target="_blank"
            >
              <img src="/src/assets/eye.png" alt="Eye Image" />
            </a>
          </div>
        </div>
      </div>
      <div class="textWrapper mt-2 bg-[#102E50] !p-4">
        <h1 class="text-2xl text-white font-bold">Pinia Todo App</h1>
        <p
          class="text-white font-light leading-8 max-sm:text-sm max-sm:leading-6"
        >
          Stay organized with our sleek web to-do list app! Easily add, edit,
          and manage tasks from any device. With a clean interface and smart
          features like reminders and categorization, productivity is just a
          click away.Perfect for busy lives—get things done faster and
          stress-free.
        </p>
        <div class="gap-2 mt-4 text-wrap h-[5rem]">
          <p class="mb-6 text-wrap">
            <span>Vue3</span>
            <span>JavaScript</span>
            <span>Pinia</span>
          </p>
          <p>
            <span>Tailwind</span>
            <span>Html</span>
          </p>
        </div>
      </div>
    </div>
    <div
      v-motion-pop-visible
      :duration="700"
      class="rounded-lg shadow-lg flex flex-col justify-between !mb-2 hover:shadow-2xl shadow-white"
    >
      <div class="imgWrapper relative">
        <img
          class="h-[24rem] max-md:h-[20rem] max-sm:h-[16rem] rounded-t-2xl"
          src="/src/assets/firebasetodo.png"
          alt="Game Blogs Image"
        />
        <div
          class="absolute opacity-0 w-full h-full top-0 rounded-t-lg flex justify-center items-center hover:!opacity-100 z-50 transition-all bg-gray-600/[var(--bg-opacity)] [--bg-opacity:50%] !duration-300 max-sm:!opacity-100 max-sm:hover:!opacity-100 max-sm:absolute max-sm:h-[4rem] max-sm:!bg-transparent max-sm:!justify-between max-sm:!p-2"
        >
          <div
            class="w-14 h-14 rounded-full border-3 border-gray-400 hover:border-white cursor-pointer !p-2 hover:!opacity-100 transition-all duration-300"
          >
            <a
              href="https://github.com/MohamedAmer29/Firebase-Todo_App"
              target="_blank"
            >
              <img src="/src/assets/code.png" alt="Code Image" />
            </a>
          </div>
          <div
            class="w-14 h-14 rounded-full border-3 border-gray-400 hover:border-white cursor-pointer !p-2 hover:!opacity-100 !ml-4 transition-all duration-300"
          >
            <a
              href="https://thunderous-lokum-3038f4.netlify.app/"
              target="_blank"
            >
              <img src="/src/assets/eye.png" alt="Eye Image" />
            </a>
          </div>
        </div>
      </div>
      <div class="textWrapper mt-2 bg-[#102E50] !p-4">
        <h1 class="text-2xl text-white font-bold">Firebase Todo List</h1>
        <p
          class="text-white font-light leading-8 max-sm:text-sm max-sm:leading-6"
        >
          Boost your productivity with our Firebase-powered web to-do app! Enjoy
          real-time syncing across devices, secure cloud storage, and a clean,
          user-friendly interface. Add, edit, and track tasks effortlessly.
          Whether you're planning your day.
        </p>
        <div class="gap-2 mt-4 text-wrap h-[5rem]">
          <p class="mb-6 text-wrap">
            <span>Vue3</span>
            <span>JavaScript</span>
            <span>Firebase</span>
          </p>
          <p>
            <span>CSS</span>
            <span>Html</span>
          </p>
        </div>
      </div>
    </div>
    <div
      v-motion-pop-visible
      :duration="750"
      class="rounded-lg shadow-lg flex flex-col justify-between !mb-2 hover:shadow-2xl shadow-white"
    >
      <div class="imgWrapper relative">
        <img
          class="h-[24rem] max-md:h-[20rem] w-full max-sm:h-[16rem] rounded-t-2xl"
          src="/src/assets/weatherApp.png"
          alt="Game Blogs Image"
        />
        <div
          class="absolute opacity-0 w-full h-full top-0 rounded-t-lg flex justify-center items-center hover:!opacity-100 z-50 transition-all bg-gray-600/[var(--bg-opacity)] [--bg-opacity:50%] !duration-300 max-sm:!opacity-100 max-sm:hover:!opacity-100 max-sm:absolute max-sm:h-[4rem] max-sm:!bg-transparent max-sm:!justify-between max-sm:!p-2"
        >
          <div
            class="w-14 h-14 rounded-full border-3 border-gray-400 hover:border-white cursor-pointer !p-2 hover:!opacity-100 transition-all duration-300"
          >
            <a
              href="https://github.com/MohamedAmer29/Simple-Wheather_App/tree/main"
              target="_blank"
            >
              <img src="/src/assets/code.png" alt="Code Image" />
            </a>
          </div>
          <div
            class="w-14 h-14 rounded-full border-3 border-gray-400 hover:border-white cursor-pointer !p-2 hover:!opacity-100 !ml-4 transition-all duration-300"
          >
            <a
              href="https://mohamedamer29.github.io/Simple-Wheather_App/"
              target="_blank"
            >
              <img src="/src/assets/eye.png" alt="Eye Image" />
            </a>
          </div>
        </div>
      </div>
      <div class="textWrapper mt-2 bg-[#102E50] !p-4">
        <h1 class="text-2xl text-white font-bold">simple weather app</h1>
        <p
          class="text-white font-light leading-8 max-sm:text-sm max-sm:leading-6"
        >
          Check the weather instantly with our simple web app built using HTML,
          CSS, and JavaScript. Get real-time updates on temperature, conditions,
          and location-based forecasts—all in a clean, responsive design. No
          clutter, just the essentials.
        </p>
        <div class="gap-2 mt-4 text-wrap h-[5rem]">
          <p class="mb-6 text-wrap">
            <span>Html</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import "tailwindcss";

p span {
  @apply rounded-full !p-2 bg-[#FFC100] text-white mr-2 cursor-pointer;
  transition: all 0.2s ease-in-out;
}
p span:hover {
  @apply bg-[#FFC100]  border-2 border-white;
  transform: scale(2);
}
</style>
