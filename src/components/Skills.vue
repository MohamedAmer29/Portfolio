<template>
  <div
    id="skills"
    class="w-11/12 !m-auto container flex gap-32 justify-between max-sm:flex-col max-lg:gap-12 max-sm:gap-4 border-b-2 border-white"
  >
    <div class="!mb-8 w-full !pb-8">
      <h1 class="text-4xl text-white font-bold max-lg:text-3xl max-sm:text-2xl">
        Technical Skills
      </h1>
      <div
        class="flex items-center gap-6 !mb-6 border-b-2 !pb-6 border-b-white"
      >
        <h1 class="text-2xl max-lg:text-xl text-white font-bold">FrontEnd:</h1>
        <div class="w-full">
          <div class="mt-8">
            <div
              class="flex items-end justify-between"
              v-motion-slide-visible-left
              :duration="600"
            >
              <h4 class="font-semibold uppercase text-white max-lg:text-sm">
                HTmL & CSS
              </h4>
              <h3 class="text-2xl max-lg:text-xl font-bold text-white">96%</h3>
            </div>
            <div class="mt-2 h-2 bg-white rounded-full wrapper">
              <div
                class="h-2 rounded-full !mb-6 bg-[#f49c0c] htmlCss max-sm:!w-[96%]"
                style="width: 0"
              ></div>
            </div>
          </div>
          <div class="mt-8">
            <div
              class="flex items-end justify-between"
              v-motion-slide-visible-left
              :duration="600"
            >
              <h4 class="font-semibold uppercase text-white">JavaScript</h4>
              <h3 class="text-2xl font-bold text-white">90%</h3>
            </div>
            <div class="mt-2 h-2 w-full bg-white wrapper rounded-full">
              <div
                class="h-2 rounded-full !mb-6 bg-[#f49c0c] javaScript w-0 max-sm:!w-[90%]"
                style="width: 90%"
              ></div>
            </div>
          </div>
          <div class="mt-8">
            <div
              class="flex items-end justify-between"
              v-motion-slide-visible-left
              :duration="600"
            >
              <h4 class="font-semibold uppercase text-white">Vue</h4>
              <h3 class="text-2xl font-bold text-white">92%</h3>
            </div>
            <div class="mt-2 h-2 w-full bg-white wrapper rounded-full">
              <div
                class="h-2 rounded-full !mb-6 vue bg-[#f49c0c] max-sm:!w-[92%]"
                style="width: 0"
              ></div>
            </div>
          </div>
          <div class="mt-8">
            <div
              class="flex items-end justify-between"
              v-motion-slide-visible-left
              :duration="600"
            >
              <h4 class="font-semibold uppercase text-white">TypeScript</h4>
              <h3 class="text-2xl font-bold text-white">80%</h3>
            </div>
            <div class="mt-2 h-2 w-full bg-white wrapper rounded-full">
              <div
                class="h-2 rounded-full !mb-6 typescript bg-[#f49c0c] max-sm:!w-[80%]"
                style="width: 0"
              ></div>
            </div>
          </div>
          <div class="mt-8">
            <div
              class="flex items-end justify-between"
              v-motion-slide-visible-left
              :duration="600"
            >
              <h4 class="font-semibold uppercase text-white max-lg:text-sm">
                Firebase
              </h4>
              <h3 class="text-2xl max-lg:text-xl font-bold text-white">76%</h3>
            </div>
            <div class="mt-2 h-2 bg-white rounded-full wrapper">
              <div
                class="h-2 rounded-full !mb-6 bg-[#f49c0c] firebase max-sm:!w-[76%]"
                style="width: 0"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex items-center gap-6 !mb-6 border-b-2 !pb-6 border-b-white"
      >
        <h1 class="text-2xl text-white font-bold max-lg:text-xl">
          Programing Language:
        </h1>
        <div class="w-full">
          <div class="mt-8">
            <div
              class="flex items-end justify-between"
              v-motion-slide-visible-left
              :duration="600"
            >
              <h4 class="font-semibold uppercase text-white">C++</h4>
              <h3 class="text-2xl font-bold text-white">60%</h3>
            </div>
            <div class="mt-2 h-2 w-full bg-white wrapper rounded-full">
              <div
                class="h-2 rounded-full !mb-6 vue bg-[#f49c0c] max-sm:!w-[92%] cpp"
                style="width: 0"
              ></div>
            </div>
          </div>
          <div class="mt-8">
            <div
              class="flex items-end justify-between"
              v-motion-slide-visible-left
              :duration="600"
            >
              <h4 class="font-semibold uppercase text-white">Paython</h4>
              <h3 class="text-2xl font-bold text-white">55%</h3>
            </div>
            <div class="mt-2 h-2 w-full bg-white wrapper rounded-full">
              <div
                class="h-2 rounded-full !mb-6 typescript bg-[#f49c0c] max-sm:!w-[55%] python"
                style="width: 0"
              ></div>
            </div>
          </div>
          <div class="mt-8">
            <div
              class="flex items-end justify-between"
              v-motion-slide-visible-left
              :duration="600"
            >
              <h4 class="font-semibold uppercase text-white">MySQL</h4>
              <h3 class="text-2xl font-bold text-white">80%</h3>
            </div>
            <div class="mt-2 h-2 w-full bg-white wrapper rounded-full">
              <div
                class="h-2 rounded-full !mb-6 typescript bg-[#f49c0c] max-sm:!w-[80%] mysql"
                style="width: 0"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-10 font-bold !mt-8">
        <h1 class="text-3xl max-lg:text-2xl text-white max-lg:text-xl">
          Others:
        </h1>
        <div
          class="grid grid-cols-3 text-white text-lg gap-4 others max-lg:grid-cols-2 max-lg:text-base max-sm:text-sm gridDiv"
        >
          <div
            class="bg-[#4F1C51] !h-30 text-center flex items-center !w-30 rounded-full !p-4 max-sm:!w-20 max-lg:!w-25 max-lg:!h-25 max-sm:!w-25 max-sm:!h-25 cursor-pointer max-sm:text-sm"
          >
            <h1>Visual Studio Code</h1>
          </div>
          <div
            class="bg-[#4F1C51] !h-30 text-center !w-30 rounded-full max-lg:!w-25 max-lg:!h-25 items-center flex !p-4 max-sm:!w-25 max-sm:!h-25 max-sm:text-sm cursor-pointer"
          >
            <h1>Git & GitHub</h1>
          </div>
          <div
            class="bg-[#4F1C51] !h-30 max-lg:!w-25 max-lg:!h-25 text-center flex items-center !w-30 rounded-full !p-4 max-sm:!w-25 max-sm:!h-25 max-sm:text-sm cursor-pointer"
          >
            <h1>Linux CLI</h1>
          </div>
          <div
            class="bg-[#4F1C51] !h-30 max-lg:!w-25 max-lg:!h-25 text-center !w-30 flex items-center rounded-full !p-4 max-sm:!w-25 max-sm:!h-25 max-sm:text-sm cursor-pointer"
          >
            <h1>Data Structure</h1>
          </div>
          <div
            class="bg-[#4F1C51] !h-30 max-lg:!w-25 max-lg:!h-25 text-center !w-30 flex items-center rounded-full !p-4 max-sm:!w-25 max-sm:!h-25 max-sm:text-sm cursor-pointer"
          >
            <h1>object oriented</h1>
          </div>
          <div
            class="bg-[#4F1C51] !h-30 max-lg:!w-25 max-lg:!h-25 text-center !w-30 flex items-center rounded-full !p-4 max-sm:!w-25 max-sm:!h-25 max-sm:text-sm cursor-pointer"
          >
            <h1>Algorithms</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full">
      <div>
        <h2
          class="text-4xl font-bold text-white text-left mb-8 md:text-center max-lg:text-3xl max-sm:text-2xl"
          v-motion-pop-visible
          :duration="600"
        >
          My Experiences
        </h2>
        <div class="!space-y-8 !py-8">
          <div
            class="flex items-center rounded-xl !p-4 bg-[#111a3e] shadow-lg border border-[#1f1641]"
            v-motion-pop-visible
            :duration="600"
          >
            <div class="w-1/4">
              <img src="/src/assets/boss.png" alt="traineer" />
            </div>
            <div class="w-3/4 !pl-4">
              <h3 class="text-2xl font-semibold uppercase trainee">
                FrontEnd Developer Trainee
              </h3>
              <p class="text-white text-3xl">AlX</p>
              <p class="text-white">Jan 2023 - Mar 2023</p>
              <ul class="text-white list-disc pl-6 mt-4">
                <li>Learned new materials, processes, and programs quickly.</li>
                <li>
                  Developed strong working relationships with trainees,
                  fostering a supportive learning environment.
                </li>
              </ul>
            </div>
          </div>
          <div
            class="flex items-center rounded-xl !p-4 bg-[#111a3e] shadow-lg border border-[#1f1641]"
            v-motion-pop-visible
            :duration="600"
          >
            <div class="w-1/4">
              <img src="/src/assets/boss.png" alt="traineer" />
            </div>
            <div class="w-3/4 pl-4">
              <h3 class="text-2xl font-semibold uppercase trainee">
                Software Engineer
              </h3>
              <p class="text-white">Benha University</p>
              <p class="text-white">Oct 2024 - Nov 2024</p>
              <ul class="white list-disc pl-6 mt-4 text-white">
                <li>
                  Participated in on-the-job training, working closely with
                  supervisors and coworkers and asking appropriate questions.
                </li>
                <li>
                  Supported departmental tasks to increase understanding of
                  industry processes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="!mb-8 !pb-8">
        <h1
          class="text-4xl text-white font-bold max-lg:text-3xl max-sm:text-2xl"
        >
          Soft Skills
        </h1>
        <div class="mt-8">
          <div
            class="flex items-end justify-between"
            v-motion-slide-visible-left
            :duration="600"
          >
            <h4 class="font-semibold uppercase text-white">Teamwork</h4>
            <h3 class="text-2xl font-bold text-white">90%</h3>
          </div>
          <div class="mt-2 h-2 w-full bg-white rounded-full wrapper">
            <div
              class="h-2 rounded-full !mb-6 bg-[#f49c0c] javaScript max-sm:!w-[90%]"
              style="width: 0"
            ></div>
          </div>
        </div>
        <div class="mt-8">
          <div
            class="flex items-end justify-between"
            v-motion-slide-visible-left
            :duration="600"
          >
            <h4 class="font-semibold uppercase text-white">
              Work under stress
            </h4>
            <h3 class="text-2xl font-bold text-white">95%</h3>
          </div>
          <div class="mt-2 h-2 w-full bg-white wrapper rounded-full">
            <div
              class="h-2 rounded-full !mb-6 bg-[#f49c0c] work w-0 max-sm:!w-[95%]"
              style="width: 90%"
            ></div>
          </div>
        </div>
        <div class="mt-8">
          <div
            class="flex items-end justify-between"
            v-motion-slide-visible-left
            :duration="600"
          >
            <h4 class="font-semibold uppercase text-white">Self-learner</h4>
            <h3 class="text-2xl font-bold text-white">90%</h3>
          </div>
          <div class="mt-2 h-2 w-full bg-white wrapper rounded-full">
            <div
              class="h-2 rounded-full !mb-6 javaScript bg-[#f49c0c] max-sm:!w-[92%]"
              style="width: 0"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import "tailwindcss";
.container:hover .htmlCss {
  -webkit-transition: width 1s ease-in-out;
  -moz-transition: width 1s ease-in-out;
  -o-transition: width 1s ease-in-out;
  transition: width 2s ease-in-out;

  width: 96% !important;
}
.container .wrapper {
  background-color: #a5158c !important;
}
.container:hover .javaScript {
  -webkit-transition: width 1s ease-in-out;
  -moz-transition: width 1s ease-in-out;
  -o-transition: width 1s ease-in-out;
  transition: width 2s ease-in-out;

  width: 90% !important;
}
.container:hover .vue {
  -webkit-transition: width 1s ease-in-out;
  -moz-transition: width 1s ease-in-out;
  -o-transition: width 1s ease-in-out;
  transition: width 2s ease-in-out;

  width: 92% !important;
}
.container:hover .typescript {
  -webkit-transition: width 1s ease-in-out;
  -moz-transition: width 1s ease-in-out;
  -o-transition: width 1s ease-in-out;
  transition: width 2s ease-in-out;

  width: 80% !important;
}
.container:hover .firebase {
  -webkit-transition: width 1s ease-in-out;
  -moz-transition: width 1s ease-in-out;
  -o-transition: width 1s ease-in-out;
  transition: width 2s ease-in-out;

  width: 76% !important;
}
.container:hover .cpp {
  -webkit-transition: width 1s ease-in-out;
  -moz-transition: width 1s ease-in-out;
  -o-transition: width 1s ease-in-out;
  transition: width 2s ease-in-out;

  width: 60% !important;
}
.container:hover .python {
  -webkit-transition: width 1s ease-in-out;
  -moz-transition: width 1s ease-in-out;
  -o-transition: width 1s ease-in-out;
  transition: width 2s ease-in-out;

  width: 55% !important;
}
.container:hover .mysql {
  -webkit-transition: width 1s ease-in-out;
  -moz-transition: width 1s ease-in-out;
  -o-transition: width 1s ease-in-out;
  transition: width 2s ease-in-out;

  width: 80% !important;
}
.container:hover .work {
  -webkit-transition: width 1s ease-in-out;
  -moz-transition: width 1s ease-in-out;
  -o-transition: width 1s ease-in-out;
  transition: width 2s ease-in-out;

  width: 95% !important;
}
.trainee {
  background: -webkit-linear-gradient(#f59e0b, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.others div:hover {
  scale: 1.1;
  transition: all 0.5s ease-in-out;
  background-color: #a5158c;
}
h3 {
  @apply max-lg:text-xl;
}
h4 {
  @apply max-lg:text-sm;
}
</style>
