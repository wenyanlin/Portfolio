<template>
  <div class="projects-section w-full relative cursor-pointer">
    <div
      class="projects-section__inner relative flex flex-col gap-4 sm:items-center tracking-wider leading-loose w-full aspect-[3/1]" data-aos="zoom-in-up">
      <!-- <div class="w-2/3 h-full bg-neutral-content">
        <img src="/src/assets/projects/homemaking.webp" alt="">
      </div> -->
      <div
        class="projects-section__image  rounded bg-neutral-content w-full border border-neutral-content overflow-hidden">
        <img :src="image" :alt="title" class="w-full h-full object-cover object-top">
      </div>
      <div class="projects-section__content w-full">
        <div class="projects-section__title flex gap-1 items-center">
          <span class="text-lg font-semibold text-neutral">{{ title }}</span>
          <!-- <span class="text-xs text-secondary">
            <ArrowUpRight />
          </span> -->
        </div>
        <div class="projects-section__description break-words text-neutral">{{ description }}</div>
        <div class="projects-section__tags mt-2">
          <div class="flex flex-wrap gap-2">
            <div class="badge" v-for="tag in tags" :key="tag">{{ tag }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ArrowUpRight } from '@/components/icons';
const props = defineProps({
  project: {
    type: Object,
    default: () => { },
  }
});

const { title, image, description, tags } = props.project;
</script>

<style lang="scss" scoped>
.projects-section {

  &__title {
    >svg {
      width: 1.75rem;
      height: 1.75rem;
    }
  }

  &__image {
    img {
      backface-visibility: hidden;
      /* 有助於減少某些瀏覽器中的渲染問題 */
      image-rendering: crisp-edges;
    }
  }
}
</style>
