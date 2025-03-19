<template>
  <div class="experience-section w-full">
    <div
      class="experience-section__inner grid grid-cols-1 sm:grid-cols-8 gap-4 tracking-wider leading-loose text-neutral"
    >
      <div class="experience-section__period sm:col-span-2 my-1.5">
        <span class="text-xs align-top text-nowrap">{{ period }}</span>
      </div>
      <div class="experience-section__content sm:col-span-6">
        <div class="text-lg">
          <span class="font-semibold">{{ position }}</span
          ><span>．</span><span>{{ company }}</span>
        </div>
        <div class="experience-section__responsibilities break-words mt-2">
          <ul v-if="Array.isArray(responsibilities)" class="list-disc pl-6 space-y-2">
            <li v-for="item in responsibilities" :key="item">
              {{ item }}
            </li>
          </ul>
          <span v-else>{{ responsibilities }}</span>
        </div>
        <div class="experience-section__tags mt-2">
          <div v-if="Array.isArray(tags)" class="flex flex-wrap gap-2">
            <div v-for="tag in tags" :key="tag" class="badge">{{ tag }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  experience: {
    type: Object,
    default: () => {},
  },
})

const { period, position, company, responsibilities, tags } = props.experience
</script>

<style lang="scss" scoped></style>
