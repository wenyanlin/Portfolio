<template>
  <div class="gallery-section rounded relative h-fit sm:h-auto overflow-hidden">
    <div class="h-full">
      <img :src="props.project.image" class="w-full h-full object-cover object-center" alt="">
    </div>
    <div class="gallery-section__information sm:absolute sm:left-0 sm:-bottom-16 sm:h-16 inset-x-0 sm:px-4 py-2 flex flex-col justify-center gap-4">
      <div class="gallery-section__information__title text-sm sm:text-base text-neutral tracking-widest w-fit">{{ props.project.title }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: Object,
});
</script>

<style lang="scss" scoped>
.gallery-section {

  &__information {
    transition: bottom .3s ease-in-out;
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(4px);
      background-color: oklch(var(--base-100)/.6);
      z-index: -1;
    }
  }

  &:hover {
    .gallery-section__information {
      bottom: 0;
    }
  }
}
</style>
