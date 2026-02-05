<template>
  <div class="uprintshop article">
    <section class="link flex gap-2">
      <a
        href="https://www.uprintshop.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="link__main"
        ><span class="mb-0.25">造訪網站</span> <Website
      /></a>
    </section>
    <section class="background">
      <p>
        此專案主要為打開國際市場而重新翻修，因此我將網站定調為「專業、沉穩且具現代感」。為了打破傳統印刷業較為生硬的刻板印象，我引入了
        Lenis Smooth Scroll 實現流暢捲動體驗，並搭配 WOW.js
        製作優雅的進場動畫，讓使用者在瀏覽過程中感受到品牌的質感。此專案為個人獨立製作，從中學到與客戶溝通、配置前端效能到最終產出完整網站的全過程。
      </p>
    </section>
    <section>
      <div class="flex items-center gap-2 flex-col sm:flex-row">
        <div class="process-block">需求分析</div>
        <span>
          <ArrowRight />
        </span>
        <div class="process-block">網站架構</div>
        <span>
          <ArrowRight />
        </span>
        <div class="process-block">UI/UX設計</div>
        <span>
          <ArrowRight />
        </span>
        <div class="process-block">網頁開發</div>
      </div>
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
import { ArrowRight, Website } from '@/components/icons'
const toolSet = [
  {
    title: '設計軟體',
    list: ['Xmind', 'Adobe Illustrator', 'Figma'],
  },
  {
    title: '開發語言',
    list: ['HTML', 'SCSS', 'JavaScript', 'Vue 3', 'Vue-Router', 'TailwindCSS', 'Vue I18n'],
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
