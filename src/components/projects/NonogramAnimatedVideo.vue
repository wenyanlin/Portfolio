<template>
  <div class="home-making article">
    <section class="link flex gap-2">
      <a
        href="https://wenyanlin.github.io/project/NONOGRAMAnimatedIntroductionVideo"
        target="_blank"
        class="link__main"
        ><span class="mb-0.25">製作過程</span>
        <Website />
      </a>
    </section>
    <section class="background">
      <img src="/projects/Nonogram.gif" alt="Nonogram文字特效" class="mb-2" />
      <p>
        擔任專案統籌，主導從腳本分鏡到最終成品的完整製作週期。除負責 95%
        的關鍵動態設計外，統一團隊的製作標準，協助組員完成資料蒐集與音效錄製，並將 Nonogram
        化為簡單易懂的教學性視覺動畫。
      </p>
    </section>
    <section>
      <div class="flex items-center gap-2 flex-col sm:flex-row">
        <div class="process-block">資料蒐集</div>
        <span class="text-neutral">
          <ArrowRight />
        </span>
        <div class="process-block">腳本編撰</div>
        <span>
          <ArrowRight />
        </span>
        <div class="process-block">分鏡製作</div>
        <span>
          <ArrowRight />
        </span>
        <div class="process-block">動畫製作</div>
      </div>
    </section>
    <section>
      <h2 class="title">使用軟體</h2>
      <div class="pt-2 space-y-4">
        <div class="flex gap-2 flex-col sm:flex-row" v-for="tools in toolSet" :key="tools.title">
          <div class="flex gap-2 flex-wrap">
            <div class="badge" v-for="item in tools.list" :key="item">{{ item }}</div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2 class="title">成品動畫</h2>
      <div class="flex flex-col gap-2">
        <iframe
          class="w-full aspect-video"
          src="https://www.youtube.com/embed/jXBD0ZhdgLQ?si=FwjaeLDZIhIPVaMx"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ArrowRight, Website } from '@/components/icons'
const toolSet = [
  {
    title: '',
    list: ['Adobe Illustrator', 'Adobe Premiere', 'Adobe After Effects', 'Cartoon Animator'],
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
