<template>
  <nav class="table-of-contents">
    <ul v-if="sections.length > 0">
      <li v-for="link in sections" :key="link.id"><RouterLink :to="`#${link.id}`" class="toc-link"><span
            class="toc-link__indicator"></span><span class="toc-link_text">{{ link.id.split('-').join(" ") }}</span></RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { inject, nextTick, onMounted, onUnmounted, watch } from 'vue';

const sections = inject('sections');

class TocObserver {
  constructor(options = { root: null, rootMargin: '0px', threshold: [0.01, 0.2, 0.4, 0.6, 0.8, 1] }) {
    this.visibleElements = new Map();
    this.tocLinks = [];
    this.options = options;
    this.observer = new IntersectionObserver((entries) => {
      // 更新可見元素列表
      this.updateVisibleElements(entries);

      // 基於完整的可見元素列表更新活動項目
      this.updateActiveTocItem();
    }, this.options);
  }

  // 更新可見元素列表
  updateVisibleElements(entries) {
    entries.forEach(entry => {
      const id = entry.target.id;
      const tocLink = this.tocLinks.find(link => link.hash === `#${id}`);
      if (entry.isIntersecting) {
        // 元素進入視野，添加到可見列表
        this.visibleElements.set(id, entry);
        tocLink.classList.add('absolute-active');
      } else {
        // 元素離開視野，從可見列表移除
        this.visibleElements.delete(id);
        tocLink.classList.remove('absolute-active');
      }
    });
  }

  // 基於完整的可見元素列表計算活動項目
  updateActiveTocItem() {

    // 如果沒有可見元素，直接返回
    if (this.visibleElements.size === 0) return;

    // 獲取所有當前可見的 entries
    const allVisibleEntries = Array.from(this.visibleElements.values());
    let bestEntry;
    if (window.scrollY < 16) {
      bestEntry = allVisibleEntries.find(entry => `#${entry.target.id}` === this.tocLinks[0].hash);
    }
    else {
      bestEntry = allVisibleEntries.reduce((best, entry) => {
        const ratio = entry.intersectionRatio;
        if (ratio > best.distance) {
          return { distance: ratio, entry };
        }
        return best;
      }, { distance: 0, entry: null }).entry;
    }


    // 高亮最接近中央的元素
    if (bestEntry) {
      const targetId = bestEntry.target.id;
      const tocLink = this.tocLinks.find(link => link.hash === `#${targetId}`);
      if (tocLink) {
        this.tocLinks.forEach(link => link.classList.remove('active')); // 移除所有 TOC 連結的 .active
        tocLink.classList.add('active');
      }
    }
  }

  async init(sections, tocLinksSelector = '.toc-link') {
    await nextTick();
    // 初始化 TOC 連結
    this.tocLinks = Array.from(document.querySelectorAll(tocLinksSelector));
    this.visibleElements.clear();
    // 為每個章節設置觀察器
    if (sections && sections.length) {
      sections.forEach(section => {
        this.observe(section);
      });
    }

    return this;
  }

  observe(target) {
    if (!target || !target.id) {
      console.warn('Cannot observe element without id:', target);
      return this.observer;
    }
    this.observer.observe(target);
    return this.observer;
  }

  unobserve(target) {
    if (target && this.observer) {
      this.observer.unobserve(target);
      if (target.id) {
        this.visibleElements.delete(target.id);
      }
    }
    return this.observer;
  }

  disconnect() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.visibleElements.clear();
  }
}

let tocObserver = new TocObserver();

watch(sections, async (newSections) => {
  await tocObserver.init(newSections);
});

let resizeTimeout;

const handleResize = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    tocObserver.updateActiveTocItem();
  }, 200);
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
})


onUnmounted(() => {
  tocObserver.disconnect();
});
</script>

<style lang="scss" scoped>
.table-of-contents {
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  li {
    color: var(--color-neutral);
    letter-spacing: .1rem;
    width: fit-content;
  }
}

.toc-link {
  transition: font .3s ease-in-out, opacity .3s ease-in-out;
  display: flex;
  align-items: center;
  opacity: .6;

  &__indicator {
    width: 0;
    height: 1px;
    display: block;
    background-color: var(--color-primary-content);
    margin-right: 0;
    transition: width .3s ease-in-out, margin .3s ease-in-out;
  }

  &:hover {
    opacity: 1;
  }

  &.absolute-active {
    opacity: 1;

    .toc-link__indicator {
      width: 1rem;
      margin-right: 1rem;
    }
  }

  &.active {
    font-weight: bold;
    text-transform: uppercase;
    opacity: 1;

    .toc-link__indicator {
      width: 4rem;
      margin-right: 1.5rem;
    }
  }
}
</style>
