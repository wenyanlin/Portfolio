<template>
  <div class="home-making article">
    <section class="link flex gap-2">
      <a href="https://wenyanlin.github.io/" target="_blank" class="link__main"
        ><span class="mb-0.25">造訪網站</span>
        <Website />
      </a>
      <a href="https://github.com/wenyanlin/wenyanlin.github.io" target="_blank"
        ><span class="mt-0.25"><GitHub /></span>
      </a>
    </section>
    <section class="background">
      <p>
        我的個人舊版作品集，是學習 Vue 初期時的練習，使用 Nuxt 3 + Tailwind
        CSS，並詳細記錄了每一個作品的可公開內容。目前該舊版作品集仍提供本網站《Wen
        Yan》部分作品的詳細內容連結。
      </p>
    </section>
    <section>
      <h2 class="title">使用工具及語言</h2>
      <div class="pt-2 space-y-4">
        <div class="flex gap-2 flex-col sm:flex-row" v-for="tools in toolSet" :key="tools.title">
          <h3 class="whitespace-nowrap">{{ tools.title }}</h3>
          <div class="flex gap-2 flex-wrap">
            <div class="badge" v-for="item in tools.list" :key="item">{{ item }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { GitHub, Website } from '@/components/icons'
const toolSet = [
  {
    title: '設計軟體',
    list: ['Adobe Illustrator', 'Figma'],
  },
  {
    title: '開發語言',
    list: ['HTML', 'SCSS', 'JavaScript', 'Vue 3', 'Tailwind CSS'],
  },
]
</script>

<style lang="scss" scoped>
.process-block {
  padding: 0.5rem 1rem;
  background-color: oklch(var(--base-300));
  border-radius: 0.25rem;
  color: oklch(var(--base-content));

  @supports not (color: oklch(0 0 0)) {
    background-color: var(--fallback-b3);
    color: var(--fallback-bc);
  }
}
</style>
