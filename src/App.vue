<template>
  <!-- <LoadingSection></LoadingSection> -->
  <div class="flex justify-center items-center">
    <div class="relative max-w-[var(--space-xl)] flex flex-col justify-between mx-4 md:mx-16 lg:mx-8 2xl:mx-0">
      <!-- <ScreenCursor /> -->
      <div class="shape fixed top-0 left-0 w-full h-screen scale-100 -z-40">
      </div>
      <div class="grid grid-cols-1 min-h-screen relative lg:grid-cols-5">
        <SiteHeader class="col-span-1 lg:col-span-2" />
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
// import LoadingSection from '@/components/LoadingSection.vue';
import SiteHeader from '@/components/SiteHeader.vue';
import { provide, ref } from 'vue';
import { RouterView } from 'vue-router';

const sections = ref([]);
const updateSections = (newSections) => {
  sections.value = newSections;
};
provide('sections', sections);
provide('updateSections', updateSections);
</script>

<style lang="scss" scoped>

.shape {
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    --bg-opacity: 1;
    background-image:
      linear-gradient(oklch(var(--base-300)/var(--bg-opacity)) 1px, transparent 1px),
      linear-gradient(90deg, oklch(var(--base-300)/var(--bg-opacity)) 1px, transparent 1px);
    background-size: 3rem 6rem;
    // mask: linear-gradient(-20deg, transparent 20%, white);

    /* 固定背景，不隨滾動移動 ps 手機端支援不佳 */
    // background-attachment: fixed;

    @supports not(color: oklch(0% 0 0)) {
      background-image:
        linear-gradient(var(--fallback-b3) 1px, transparent 1px),
        linear-gradient(90deg, var(--fallback-b3) 1px, transparent 1px);
      opacity: .6;
    }
  }
}
</style>
