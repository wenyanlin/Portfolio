<template>
  <div class="home-making article">
    <section class="link flex gap-2">
      <a href="https://bearune.com/" target="_blank" class="link__main"
        ><span class="mb-0.25">造訪網站</span>
        <Website />
      </a>
      <a href="https://github.com/Bearune/Bearune" target="_blank"
        ><span class="mt-0.25"><GitHub /></span>
      </a>
    </section>
    <section class="background">
      <p>
        我的第一個 Nuxt 作品，一個用來記錄和分享學習筆記的部落格。除了嘗試使用 Nuxt 3
        來搭建整體框架，並以 Nuxt Content 管理我的 Markdown
        內容以外，值得一提的是，我花了大量時間研究如何優化介面以提升閱讀體驗，包括行距、字間、程式碼區塊美化等，以及如何在不同裝置上保持一致的排版效果。
      </p>
      <p>
        以文章內的程式碼為例：我參考了
        <a href="https://vuejs.org/" target="_blank">Vue.js</a>
        官方文件的呈現方式，在較窄的螢幕寬度時使用負值 margin
        實現滿版的程式碼區塊，如此可以在有限的螢幕寬度下更舒服地呈現程式碼，以確保在不同裝置上都能有良好的閱讀體驗。
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
    list: [
      'HTML',
      'SCSS',
      'JavaScript',
      'Nuxt',
      'Nuxt Content',
      'Vue 3',
      'Tailwind CSS',
      'Element Plus',
    ],
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
