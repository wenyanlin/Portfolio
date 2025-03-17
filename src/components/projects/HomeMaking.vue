<template>
  <div class="home-making article">
    <section class="link flex">
      <a href="https://www.draw123.com.tw/" target="_blank" class="link__main"><span class="mb-0.25">造訪網站</span>
        <Website />
      </a>
    </section>
    <section class="background">
      <p>
        我獨立完成了家裡蹲創意印刷公司的網站重塑專案。針對這家擁有先進印刷設備及成熟產線的印刷企業。我先根據企業需求，結合用戶研究，並分析同業網站，最終提出改善建議，並設計開發了一個融合現代美學與技術的網站，最終提升客戶體驗及業務效率。
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
            <div class="badge" v-for="item in tools.list" :key="item"> {{ item }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ArrowRight, Website } from '@/components/icons';
const toolSet = [
  {
    title: '設計軟體',
    list: ['Xmind', 'Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
  },
  {
    title: '開發語言',
    list: ['HTML', 'SCSS', 'JavaScript', 'Vue 3', 'Vue-Router', 'Tailwind CSS'],
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
