<template>
  <div class="home-making article">
    <section class="link flex gap-2">
      <a href="https://www.youtube.com/@SimsEvelyn" target="_blank" class="link__main"><span class="mb-0.25">YouTube
          頻道</span>
        <Website />
      </a>
      <a href="https://space.bilibili.com/403261269?spm_id_from=333.1007.0.0" target="_blank" class="link__main"><span
          class="mb-0.25">B站頻道</span>
        <Website />
      </a>
    </section>
    <section class="background">
      <p>
        「SimsEvelyn」是我過去獨立經營的頻道，當時很喜歡觀看《The Sims
        4》的建房影片，好奇這一類定格動畫是如何製作而成，實際研究以後發現工程浩大，短短十分鐘以內的影片需要以超過1000張遊戲截圖與過場短片組合而成，但因為看起來實在很有趣，我開始嘗試製作，並於2020年2月26日一個即將開學的寒假發布了第一支影片，並在半年後獲得1萬以上的訂閱數，截至目前發布35部影片，我得到了彌足珍貴的經驗，除了認識了外國朋友、到各個論壇宣傳交流，還精進自己的拍攝及剪輯技術，並看見自己的房子被粉絲做成模型。未來希望還有機會繼續更新。
      </p>
    </section>
    <section>
      <div class="flex items-center gap-2 flex-col sm:flex-row">
        <div class="process-block">遊戲建房</div>
        <span class="text-neutral">
          <ArrowRight />
        </span>
        <div class="process-block">規劃分鏡</div>
        <span>
          <ArrowRight />
        </span>
        <div class="process-block">截圖拍攝</div>
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
      <h2 class="title">代表作</h2>
      <div class="flex flex-col gap-2">
        <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/wV6ICnzEvoY?si=wHJTxjfCJu-kZnF4"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/vQOTmFngzw8?si=pKHNKcGEocBwa8DT"
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
    list: ['Adobe Illustrator', 'Adobe Premiere', 'Adobe After Effects', 'OBS'],
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
