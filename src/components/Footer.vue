<template>
  <div
    class="!mt-8 border-t-2 border-white flex justify-between !p-4 !mb-[1px] !px-8 items-center bg-[#433878]/[var(--bg-opacity)] [--bg-opacity:70%] max-sm:!px-4"
  >
    <div @click="scrollTop" class="cursor-pointer">
      <img
        src="/src/assets/logo0.png"
        alt="Logo"
        class="w-[7rem] max-sm:w-[4rem] h-[7rem] max-sm:h-[4rem]"
      />
    </div>
    <span class="text-xl max-sm:text-sm text-white font-bold"
      >Copyright 2025 All Rights Reserved</span
    >
  </div>
</template>

<script setup lang="ts">
const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style scoped></style>
