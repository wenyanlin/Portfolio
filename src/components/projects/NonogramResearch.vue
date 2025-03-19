<template>
  <div class="home-making article">
    <section class="link flex gap-2">
      <a
        href="https://wenyanlin.github.io/project/ResearchNONOGRAM"
        target="_blank"
        class="link__main"
        ><span class="mb-0.25">詳細介紹</span>
        <Website />
      </a>
      <a
        href="https://sites.google.com/mail.ncnu.edu.tw/2022-tcga/%E8%AB%96%E6%96%87%E5%BE%B5%E7%A8%BF?authuser=0"
        target="_blank"
        ><span class="mt-0.25"> TCGA 得獎紀錄 </span>
      </a>
    </section>
    <section class="background">
      <p>
        我與團隊合作研究了以單格及區塊導向的求解方式作為主軸，實作五個邏輯判斷規則並嘗試歸納出新的邏輯規則、持續改善區塊導向演算法，並加入蒙地卡羅樹搜尋法於求解流程，以提升解題速度與效率。使用
        <code>C++</code> 實作解題引擎。
      </p>
      <ul>
        <li>國立臺中教育大學資訊工程學系111級資訊專題競賽 第一名</li>
        <li>《以邏輯規則進行列求解》- TCGA 2022 佳作論文獎</li>
      </ul>
    </section>
    <section>
      <div class="flex items-center gap-2 flex-col sm:flex-row">
        <div class="process-block">單行求解</div>
        <span class="text-neutral">
          <ArrowRight />
        </span>
        <div class="process-block">全面探測</div>
        <span>
          <ArrowRight />
        </span>
        <div class="process-block">遞迴窮舉</div>
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
    <section>
      <h2 class="title">專題動畫短片</h2>
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube.com/embed/uZde5V-74AE?si=2C_acvYxedF-t5Ss"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </section>
  </div>
</template>

<script setup>
import { Website, ArrowRight } from '@/components/icons'
const toolSet = [
  {
    title: '設計軟體',
    list: ['Adobe Illustrator', 'Adobe Premiere'],
  },
  {
    title: '開發語言',
    list: ['C++'],
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
