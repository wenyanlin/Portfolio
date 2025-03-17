<template>
  <Teleport to="body">
    <ProjectDetails :show="showModal" :position="clickPosition" :project="currentProject" @close="closeModal"
      v-show="showModal"></ProjectDetails>
  </Teleport>
  <main class="pt-24 col-span-1 lg:col-span-3">
    <section class="about mb-32" id="about">
      <div class="about__inner text-lg text-neutral tracking-wider leading-loose break-words space-y-4">
        <p>
          我目前是一名專注於前端開發的工程師，擅長將設計理念轉化為流暢的使用者體驗。在開發過程中，我特別注重介面的直觀性與可訪問性，讓每位使用者都能輕鬆找到產品。將靜態設計轉化為生動的網頁介面是我最著迷的過程，這種創造的過程常常讓我進入忘我的心流狀態。
        </p>
        <p>曾經作為家裡蹲創意印刷的前端工程師，我獨立完成了從需求分析到技術選型，再到開發部署的完整流程，成功翻新了品牌的官方網站。</p>
        <p>2024年底，我開始了一段深度的自我提升之旅。除了持續精進技術能力，我也嘗試了很多活動，例如：將 Gemini 2.0 Flash 的 API 接入 LINE
          Bot、烘焙各種覺得自己能做到的糕點、想畫什麼就畫什麼，以及運用可理解性輸入法提升英文能力。（順帶一提，我還有一隻會陪我讀 JavaScript 的橘貓，雖然牠可能對閉包和原型鏈沒什麼興趣）。
        </p>
      </div>
    </section>
    <section class="exp mb-32" id="experience">
      <h2 class="text-2xl font-semibold tracking-widest">EXPERIENCE</h2>
      <div class="exp__inner flex flex-col gap-16 mt-16">
        <Experience v-for="exp in experienceData" :key="exp.period" :experience="exp" />
      </div>
    </section>
    <section class="projects mb-32" id="projects">
      <h2 class="text-2xl font-semibold tracking-widest">PROJECTS</h2>
      <div class="projects__inner grid sm:grid-cols-2 gap-x-8 gap-y-16 mt-16">
        <Project v-for="project in projectData" :key="project.title" :project="project"
          @click="openModal($event, project);" />
      </div>
    </section>
    <section class="gallery mb-32" id="gallery">
      <h2 class="text-2xl font-semibold tracking-widest">GALLERY</h2>
      <!-- <div class="gallery__inner grid sm:grid-cols-2 gap-8 mt-16"> -->
      <div class="gallery__inner mt-16 flex flex-wrap gap-x-2 gap-y-4 sm:gap-x-8 sm:gap-y-16 justify-center align-stretch">
        <Gallery v-for="project in galleryData" :key="project.title" :project="project" :class="project.width" />
      </div>
    </section>
    <section class="about mb-32 lg:h-[calc(100vh-14rem)]" id="in-closing,">
      <h2 class="text-2xl font-semibold tracking-widest">最後，</h2>
      <div class="about__inner text-lg text-neutral tracking-wider leading-loose break-words space-y-4 mt-16 relative">
        <p>
          不只前端開發，過去我熱衷於探索不同領域，並試圖從中找到我願意終其一生為之付出的領域。很長一段時間，我嘗試了寫小說、平面設計、動態設計、動畫製作、遊戲製作、社群經營等舉不勝舉。我也寫了超過五種程式語言，其中不乏遇過一踏入就想離開的領域（就是你組合語言！），這些經歷卻更加開闊了我的視野，最終也意外找到了前端開發這條學無止境的道路。
        </p>
        <p>我想我已經找到了我的熱愛，並將在這個領域中不斷茁壯。特別是在用戶體驗設計和互動性開發方面，我找到了極大的成就感。我期待著未來的挑戰，並相信自己能夠跨越一座又一座的高山，為這個領域做出實質貢獻。</p>
        <p>當然，學海浩瀚，探索將永無止境。</p>
        <img src="/avatar.gif" alt="avatar" class="w-32 float-right">
      </div>
    </section>
  </main>
</template>

<script setup>
import Experience from '@/components/ExperienceSection.vue';
import Gallery from '@/components/GallerySection.vue';
import ProjectDetails from '@/components/ProjectDetails.vue';
import Project from '@/components/ProjectsSection.vue';
import { inject, nextTick, onMounted, ref } from 'vue';

const experienceData = [
  {
    period: "NOV 2024 ─ PRESENT",
    position: "前端工程師",
    company: "家裡蹲創意印刷股份有限公司",
    responsibilities: "長期合作維護品牌官網，主要負責：更新資訊、修復 BUG 及維護組件，定期優化網站 SEO 並分析流量數據。",
    tags: ["Vue.js", "JavaScript", "HTML&SCSS", "SEO", "Google Analytics"]
  },
  {
    period: "MAY 2023 ─ NOV 2024",
    position: "前端工程師",
    company: "家裡蹲創意印刷股份有限公司",
    responsibilities: "主導官方網站全週期開發，從需求分析、UI/UX 設計到前端實作與 API 串接。獨立完成網站視覺資源製作，並建構可維護架構。同時協助管理子公司電商平台及社群媒體運營。",
    tags: ["Vue.js", "JavaScript", "HTML&SCSS", "TailwindCSS", "Figma", "Adobe Illustrator"]
  },
  {
    period: "AUG ─ NOV 2018",
    position: "助教",
    company: "巨匠電腦股份有限公司",
    responsibilities: "協同高齡者適應與學習新科技，輔助教師指導40至75歲以上學員電腦及手機應用，並成功指導了 200+ 學員掌握：智慧型手機基礎操作及文書軟體核心功能。",
    tags: ["擬定與執行教學計畫", "溝通能力"]
  },
  {
    period: "SEP 2019 ─ JUN 2022",
    position: "學生",
    company: "國立臺中教育大學 資訊工程學系",
    responsibilities: "完整修讀課程並畢業，結合演算法與邏輯分析能力，發表《Nonogram解題中以邏輯規則進行單行求解效益之探討》並獲 TCGA 2022 研討會佳作論文獎、111級資訊專題競賽第一名。",
  },
  {
    period: "SEP 2017 ─ JUN 2019",
    position: "學生",
    company: "國立臺中教育大學 數位內容科技學系",
    responsibilities: "修讀部分課程，並積極參與系上活動（學生會美宣、系羽副隊長），我的設計啟蒙時期。藝術作品於第十屆數位系聯展獲得第二名佳績。",
  },
];

const projectData = [
  {
    id: "HomeMaking",
    title: "家裡蹲創意印刷 HOMEMAKING",
    image: "/projects/HomeMaking.webp",
    description: "獨立開發的企業官方網站，重新定位企業形象。",
    tags: ["網站", "Vue.js", "Vue-Router", "Tailwind CSS"]
  },
  {
    id: "BearuneBlog",
    title: "Bearune Blog",
    link: "https://bearune.com/",
    image: "/projects/Bearune.webp",
    description: "自架部落格，主要分享學習筆記。",
    tags: ["網站", "Nuxt.js", "Vue.js", "Pinia", "Tailwind CSS", "Element Plus"]
  },
  {
    id: "BearuneTool",
    title: "Bearune Tool",
    link: "https://bearune.com/",
    image: "/projects/Bearune Tools.webp",
    description: "一個嘗試使用不同前端庫的合集網站：圖片轉檔、QR code、表情符號合集。",
    tags: ["網站", "Vue.js", "Tailwind CSS"]
  },
  {
    id: "HomeMakingPractice",
    title: "家裡蹲創意印刷網站練習",
    link: "https://github.com/wenyanlin/Practice-Project-Home-Making.git",
    image: "/projects/HomeMakingPractice.webp",
    description: "以家裡蹲創意印刷為主題，分別設計並切出不同的排版方式與組件，是一次純 HTML、SCSS 與 jQuery 的前端開發練習。",
    tags: ["網站", "jQuery"]
  },
  {
    id: "NonogramResearch",
    title: "​非主流NONOGRAM解題方法研究",
    link: "https://bearune.com/",
    image: "/projects/nonogram.webp",
    description: "與團隊合作研究 Nonogram 解題演算法，使用 C++ 實作解題引擎。",
    tags: ["研究", "C++", "Adobe Illustrator", "Premiere"]
  },
  {
    id: "SimsEvelyn",
    title: "SimsEvelyn YouTube 頻道",
    link: "https://www.youtube.com/@SimsEvelyn",
    image: "/projects/YouTube.webp",
    description: "獨立經營遊戲頻道，專攻《The Sims 4》虛擬建築設計。BiliBili 同名。",
    tags: ["動畫", "定格動畫", "Adobe Illustrator", "Premiere"]
  },
  {
    id: "NonogramAnimatedVideo",
    title: "​NONOGRAM：動畫短片",
    link: "https://wenyanlin.github.io/project/NONOGRAMAnimatedIntroductionVideo",
    image: "/projects/Nonogram.jpg",
    description: "Nonogram 是一種益智遊戲，我們團隊製作了動畫短片，希望能將它推廣給更多人。",
    tags: ["動畫", "Motion Design", "Adobe Illustrator", "Premiere", "After Effects", "Cartoon Animator"]
  },
  {
    id: "V1Portfolio",
    title: "WEN YAN LIN：個人作品集",
    link: "https://wenyanlin.github.io/",
    image: "/projects/old portfolio.webp",
    description: "我的個人舊版作品集，是早期的 Vue 作品。",
    tags: ["網站", "Vue.js", "Tailwind CSS"]
  }
];

const galleryData = [
  {
    title: "中原大學網球社第9屆社團評鑑",
    image: "/gallery/中原大學網球社 (2).webp",
    width: "full-width",
  },
  {
    title: "中原大學網球社第9屆社團評鑑",
    image: "/gallery/中原大學網球社.webp",
    width: "half-width",
  },
  {
    title: "2018數位系活動海報",
    image: "/gallery/2018數位系活動海報.webp",
    width: "half-width",
  },
  {
    title: "屏東概念海報",
    image: "/gallery/屏東概念海報.webp",
    width: "full-width",
  },
  {
    title: "雪山",
    image: "/gallery/雪山.webp",
    width: "half-width",
  },
  {
    title: "5G工業4.0簡報設計",
    image: "/gallery/5G工業4.0簡報設計.webp",
    width: "half-width",
  },
  {
    title: "第十屆台中教育大學數位內容科系學系聯展第二名作品​",
    image: "/gallery/第十屆台中教育大學數位內容科系學系聯展第二名作品​.webp",
    width: "half-width",
  },
  {
    title: "無線網路簡報設計",
    image: "/gallery/無線網路簡報設計.webp",
    width: "half-width",
  }
];

const updateSections = inject('updateSections');
const showModal = ref(false);
const clickPosition = ref({ x: 0, y: 0 });
const currentProject = ref(null);
const currentEvent = ref(null);

function openModal(event, project) {
  currentEvent.value = event.target;
  clickPosition.value = { x: event.clientX, y: event.clientY };
  currentProject.value = project;
  showModal.value = true;
}

async function closeModal() {
  const position = currentEvent.value.getBoundingClientRect();
  clickPosition.value = { x: position.x + position.width / 2, y: position.y + position.height / 2 };
  await nextTick();
  showModal.value = false;
}

onMounted(() => {
  updateSections(document.querySelectorAll('main>section'));
  window.addEventListener('resize', () => {
    updateSections(document.querySelectorAll('main>section'));
  });
});

</script>

<style lang="scss" scoped>
section {
  scroll-margin-top: 8rem;

  &.projects {
    .projects-section {
      transition: all 0.2s ease-in-out;

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100% + 2rem);
        height: calc(100% + 2rem);
        margin: -1rem;
        border: 1px transparent solid;
        border-radius: .5rem;
        z-index: -1;
        transition: all 0.1s ease-in-out;
      }
    }

    @media (hover: hover) {
      @supports selector(:has(*)) {
        &:has(.projects-section:hover) .projects-section:not(:hover) {
          opacity: .6;
          filter: grayscale(1);
        }
      }

      @supports not selector(:has(*)) {
        .projects:hover .projects-section {
          opacity: .6;
          filter: grayscale(1);
        }

        .projects:hover .projects-section:hover {
          opacity: 1;
        }
      }

      .projects-section:hover {
        &::before {
          border-color: oklch(var(--primary)/.3);
          background-color: oklch(var(--primary)/.1);
        }
      }
    }
  }

  &.gallery {

    .full-width {
      flex: 1 1 100%;
    }

    .half-width {
      flex: 1 1 calc(50% - 2rem);
    }

    .gallery-section {
      transition: all 0.2s ease-in-out;
    }

    @media (hover: hover) {
      @supports selector(:has(*)) {
        &:has(.gallery-section:hover) .gallery-section:not(:hover) {
          opacity: .6;
          filter: grayscale(1);
        }
      }

      @supports not selector(:has(*)) {
        .gallery:hover .gallery-section {
          opacity: .6;
          filter: grayscale(1);
        }

        .gallery:hover .gallery-section:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
