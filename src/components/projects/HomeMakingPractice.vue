<template>
  <div class="home-making article">
    <section class="link flex gap-2">
      <a href="https://wenyanlin.github.io/project/WebLayout" target="_blank" class="link__main"><span
          class="mb-0.25">詳細介紹</span>
        <Website />
      </a>
      <a href="https://github.com/wenyanlin/Practice-Project-Home-Making.git" target="_blank"><span class="mt-0.25">
          <GitHub />
        </span>
      </a>
    </section>
    <section>
      <img src="/projects/HomeMakingPractice.gif" alt="">
    </section>
    <section class="background">
      <p>
        我以家裡蹲創意印刷作為主題並進行版型設計、切版、交互效果，以及組件開發，沒有使用主流框架，是一次良好的早期實作練習。建議到詳細介紹頁面，可以看到動畫效果。
      </p>
    </section>
    <section>
      <h2 class="title">使用工具及語言</h2>
      <div class="pt-2 space-y-4">
        <div class="flex gap-2 flex-col sm:flex-row" v-for="tools in toolSet" :key="tools.title">
          <h3 class="whitespace-nowrap">{{ tools.title }}</h3>
          <div class="flex gap-2 flex-wrap">
            <div class="badge" v-for="item in tools.list" :key="item"> {{ item }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { GitHub, Website } from '@/components/icons';
const toolSet = [
  {
    title: '設計軟體',
    list: ['Adobe Illustrator'],
  },
  {
    title: '開發語言',
    list: ['HTML', 'SCSS', 'JavaScript', 'jQuery'],
  }
]
</script>

<style lang="scss" scoped>
.process-block {
  padding: .5rem 1rem;
  background-color: oklch(var(--base-300));
  border-radius: .25rem;
  color: oklch(var(--base-content));

  @supports not(color: oklch(0 0 0)) {
    background-color: var(--fallback-b3);
    color: var(--fallback-bc);
  }
}
</style>
