<template>
  <header class="header pt-8 sm:pt-16 lg:py-24 lg:h-screen lg:sticky lg:top-0">
    <div class="header__inner h-full flex flex-col justify-between" data-aos="fade-right" data-aos-once="true" data-aos-mirror="false">
      <RouterLink to="#about" class="header__title flex flex-col">
        <h1 class="jersey-10">Wen Yan</h1>
        <span class="text-2xl tracking-widest font-black text-neutral">Front End Engineer</span>
        <!-- <span class="text-2xl tracking-widest font-black text-neutral-content">.-- . -. -.-- .- -.</span> -->
      </RouterLink>
      <div class="header__toc hidden lg:block">
        <TableOfContents />
      </div>
      <div class="header__social flex gap-8 mt-16 lg:mt-0">
        <a href="https://github.com/wenyanlin" target="_blank">
          <GitHub />
        </a>
        <a href="https://codepen.io/wen-yan" target="_blank">
          <CodePen />
        </a>
        <!-- <a href="/"><Linkedin/></a> -->
        <a href="https://bearune.com/" target="_blank">
          <Website />
        </a>
        <a href="https://www.youtube.com/c/SimsEvelyn" target="_blank">
          <YouTube />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { CodePen, GitHub, Website, YouTube } from '@/components/icons';
import { RouterLink } from 'vue-router';
import TableOfContents from './TableOfContents.vue';

</script>

<style lang="scss" scoped>
.header {
  &__social {
    a {
      color: var(--color-neutral);
      opacity: 1;
      transition: opacity .1s ease-in-out;

      >svg {
        width: 1.75rem;
        height: 1.75rem;
      }
    }

    @media (hover: hover) {
      @supports selector(:has(*)) {
        &:has(a:hover) a:not(:hover) {
          opacity: .6;
        }
      }
    }
  }
}
</style>
