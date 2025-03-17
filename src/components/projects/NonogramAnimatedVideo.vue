<template>
  <div class="home-making article">
    <section class="link flex gap-2">
      <a href="https://wenyanlin.github.io/project/NONOGRAMAnimatedIntroductionVideo" target="_blank"
        class="link__main"><span class="mb-0.25">製作過程</span>
        <Website />
      </a>
    </section>
    <section class="background">
      <img src="/projects/Nonogram.gif" alt="" class="mb-2">
      <p>
        《Nonogram》動畫由我帶領團隊製作而成。從歷史到規則，實作到結論，希望用簡單的語言將 Nonogram 分享給更多的人。耗時一週，主要使用 After Effects 製作動畫，並以 Premiere 剪輯，其中特別使用 Cartoon Animator 來製作角色面部動畫。
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
            <div class="badge" v-for="item in tools.list" :key="item"> {{ item }}</div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2 class="title">成品動畫</h2>
      <div class="flex flex-col gap-2">
        <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/jXBD0ZhdgLQ?si=FwjaeLDZIhIPVaMx"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ArrowRight, Website } from '@/components/icons';
const toolSet = [
  {
    title: '',
    list: ['Adobe Illustrator', 'Adobe Premiere', 'Adobe After Effects', 'Cartoon Animator'],
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
