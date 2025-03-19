<template>
  <Transition name="modal">
    <div
      class="project-details__outer fixed inset-4 flex justify-center items-center z-[9998] pointer-events-none"
      :key="props.project.title"
      :style="transitionStyle"
      v-if="props.show"
    >
      <div
        ref="modalRef"
        :class="{ 'mobile-fullscreen': !isDesktop }"
        class="project-details rounded-xl border border-neutral-content cursor-default pointer-events-auto overflow-hidden"
        :style="isDesktop ? dragStyle : {}"
      >
        <div class="project-details__inner flex flex-col items-center">
          <div
            class="project-details__header py-2 px-4 w-full flex justify-between items-center sm:cursor-move border-b border-neutral-content sticky top-0 bg-base-100"
            @mousedown="isDesktop ? startDrag($event) : undefined"
            @touchstart.self="isDesktop ? startDrag($event) : undefined"
          >
            <h2 class="text-lg font-semibold text-neutral tracking-wider">
              {{ props.project.title }}
            </h2>
            <button
              @click="$emit('close')"
              class="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="project-details__content w-full max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh*2/3-4rem+1px)] cursor-default pb-6 p-4 tracking-wider text-neutral overflow-y-auto overscroll-contain"
          >
            <component :is="asyncComponent" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed, defineAsyncComponent, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

const asyncComponent = computed(() =>
  props.project.id
    ? defineAsyncComponent(() => import(`@/components/projects/${props.project.id}.vue`))
    : null,
)

const props = defineProps({
  show: Boolean,
  project: Object,
  position: Object,
})

// 用於拖動的狀態
const isDragging = ref(false)
const dragOffset = ref({ x: 0, y: 0 })
const modalPosition = ref({ x: 0, y: 0 })
const modalRef = ref(null)
const viewportWidth = ref(window.innerWidth)
const viewportHeight = ref(window.innerHeight)
const isDesktop = ref(
  viewportWidth.value >= 640 &&
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
)

const transitionStyle = computed(() => {
  // 計算相對於視窗的百分比位置
  const originX = (props.position.x / window.innerWidth) * 100
  const originY = (props.position.y / window.innerHeight) * 100

  return {
    'transform-origin': `${originX}% ${originY}%`,
  }
})

const dragStyle = computed(() => {
  if (
    !isDesktop.value ||
    (!isDragging.value && modalPosition.value.x === 0 && modalPosition.value.y === 0)
  ) {
    return {}
  } else {
    return {
      position: 'absolute',
      left: `${modalPosition.value.x}px`,
      top: `${modalPosition.value.y}px`,
      transform: 'translate(-50%, -50%)',
    }
  }
})

// 監聽模態框顯示狀態，在顯示後初始化位置
watch(
  () => props.show,
  (newVal) => {
    if (newVal) {
      // 模態框顯示後，在下一個 tick 初始化位置
      nextTick(() => {
        isDesktop.value ? initializePosition() : initializePosition(2, 2)
      })
    } else {
      modalPosition.value = { x: 0, y: 0 }
    }
  },
)

// 初始化模態框位置
const initializePosition = (x = 2, y = 2) => {
  if (modalRef.value) {
    modalPosition.value = {
      x: viewportWidth.value / x,
      y: viewportHeight.value / y,
    }
  }
}

const startDrag = (event) => {
  if ((event.type === 'mousedown' && event.button !== 0) || !isDesktop.value) return

  if (modalPosition.value.x === 0 && modalPosition.value.y === 0 && modalRef.value) {
    const rect = modalRef.value.getBoundingClientRect()
    modalPosition.value = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    }
  }

  const clientX = event.type === 'touchstart' ? event.touches[0].clientX : event.clientX
  const clientY = event.type === 'touchstart' ? event.touches[0].clientY : event.clientY

  dragOffset.value = {
    x: clientX - modalPosition.value.x,
    y: clientY - modalPosition.value.y,
  }
  isDragging.value = true

  if (event.type === 'mousedown') {
    window.addEventListener('mousemove', onDrag)
    window.addEventListener('mouseup', stopDrag)
  } else {
    window.addEventListener('touchmove', onDrag, { passive: false })
    window.addEventListener('touchend', stopDrag)
  }

  event.preventDefault()
  event.stopPropagation()
}

const onDrag = (event) => {
  if (!isDragging.value || !modalRef.value) return

  // 獲取當前鼠標/觸摸位置
  const clientX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX
  const clientY = event.type === 'touchmove' ? event.touches[0].clientY : event.clientY

  // 計算新位置（未應用限制）
  const newX = clientX - dragOffset.value.x
  const newY = clientY - dragOffset.value.y

  // 實時獲取 modal 的尺寸
  const rect = modalRef.value.getBoundingClientRect()
  const halfWidth = rect.width / 2
  const halfHeight = rect.height / 2

  // 獲取視窗尺寸
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  // 應用邊界限制
  const limitedX = Math.max(halfWidth, Math.min(viewportWidth - halfWidth - 28, newX))
  const limitedY = Math.max(halfHeight, Math.min(viewportHeight - halfHeight - 30, newY))

  // 更新位置
  modalPosition.value = {
    x: limitedX,
    y: limitedY,
  }

  // 防止頁面滾動（對於觸摸事件）
  if (event.type === 'touchmove') {
    event.preventDefault()
  }
}

const stopDrag = () => {
  isDragging.value = false
  window.removeEventListener('mousemove', onDrag)
  window.removeEventListener('mouseup', stopDrag)
  window.removeEventListener('touchmove', onDrag)
  window.removeEventListener('touchend', stopDrag)
}

const updateDeviceType = () => {
  isDesktop.value = window.innerWidth >= 640
  viewportWidth.value = window.innerWidth
  viewportHeight.value = window.innerHeight
  isDesktop.value =
    viewportWidth.value >= 640 &&
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  isDesktop.value ? initializePosition() : (modalPosition.value = { x: 0, y: 0 })
}

onMounted(() => {
  window.addEventListener('resize', updateDeviceType)
  updateDeviceType()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateDeviceType)
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
  document.removeEventListener('touchmove', onDrag)
  document.removeEventListener('touchend', stopDrag)
  modalPosition.value = { x: 0, y: 0 }
})
</script>

<style lang="scss" scoped>
.project-details__outer {
  will-change: transform, opacity;
}

.project-details {
  max-width: calc(var(--space-xl) / 2);
  max-height: calc(100vh * 2 / 3);
  width: 100%;
  height: fit-content;
  background-color: oklch(var(--base-100) / 0.9);

  // 移動設備全螢幕樣式
  &.mobile-fullscreen {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    max-width: 100% !important;
    max-height: 100% !important;
    border-radius: 0 !important;
    transform: none !important;
    margin: 0 !important;
    z-index: 9999 !important;
  }
}

@media (max-width: 639px) {
  .project-details__outer {
    inset: 0 !important; // 移除 inset-4 的間距
  }

  .project-details {
    border: none !important;
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: transform 0.5s cubic-bezier(0.63, -0.34, 0.31, 1.27);
}

.modal-enter-to,
.modal-leave-from {
  transform: scale(1) skew(0);
}

.modal-enter-from {
  transform: scale(0) skew(30deg);
}

.modal-leave-to {
  transform: scale(0) skew(-30deg);
}

// 移動設備的動畫
@media (max-width: 639px) {
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.3s ease;
  }

  .modal-enter-to,
  .modal-leave-from {
    opacity: 1;
    transform: none;
  }

  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
    transform: none;
  }
}
</style>
