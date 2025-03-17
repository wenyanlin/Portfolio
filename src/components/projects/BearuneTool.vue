<template>
  <div class="home-making article">
    <section class="link flex gap-2">
      <!-- <a href="https://bearune.com/" target="_blank" class="link__main"><span class="mb-0.25">造訪網站</span>
        <Website />
      </a> -->
      <a href="https://github.com/wenyanlin/BearuneTools" target="_blank"><span class="mt-0.25">
          <GitHub />
        </span>
      </a>
    </section>
    <section class="background">
      <p>
        一個嘗試使用不同前端庫的合集網站：以 <a href="https://github.com/fengyuanchen/compressorjs"
          target="_blank"><code>Compressor.js</code></a> 實現前端圖片壓縮；以 <a href="https://github.com/soldair/node-qrcode"
          target="_blank"><code>node-qrcode</code></a> 生成 QR Code；以 <code>EmojiAPI</code> 整理所有 Emoji，並分門別類。其中還使用 <a
          href="https://github.com/Stuk/jszip" target="_blank"><code>JSZip</code></a> 及 <a
          href="https://github.com/eligrey/filesaver.js/" target="_blank"><code>FileSaver.js</code></a> 實現壓縮與打包下載的功能，是一次有趣的嘗試。
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
    <section>
      <h2 class="title">圖像轉換介面圖</h2>
      <img src="/projects/Bearune Tools 如何使用.webp" alt="">
    </section>
  </div>
</template>

<script setup>
import { GitHub } from '@/components/icons';
const toolSet = [
  {
    title: '設計軟體',
    list: ['Adobe Illustrator'],
  },
  {
    title: '開發語言',
    list: ['HTML', 'SCSS', 'JavaScript', 'Vue 3', 'Tailwind CSS', 'Compressor.js', 'JSZip', 'FileSaver.js', 'node-qrcode', 'EmojiAPI'],
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
