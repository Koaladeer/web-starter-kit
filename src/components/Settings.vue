<script setup>
import {ref} from 'vue'
import {themeChange} from 'theme-change'
import {onMounted} from "vue";
import themesOrder from "daisyui/functions/themeOrder.js"

onMounted(() => {
  themeChange(false)
})

const themes = themesOrder.values()
const count = ref(0)
</script>

<template>
  <div class="bg-base-100">
      <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 p-4">
        <button
            v-for="theme in themes"
            :key="theme"
            :data-theme="theme"
            :data-set-theme="theme"
            class="border-base-content/20
            hover:border-base-content/60
            hover:outline-3
            overflow-hidden
            rounded-lg border
            outline-offset-1
            outline-2
            outline-transparent"
        >
      <span class="text-xs font-black uppercase tracking-widest text-base-content">
        {{ theme }}
      </span>
          <div class="flex w-full h-10 gap-0.5 overflow-hidden rounded-lg">
            <div class="bg-primary flex-1" title="Primary"></div>
            <div class="bg-secondary flex-1" title="Secondary"></div>
            <div class="bg-accent flex-1" title="Accent"></div>
            <div class="bg-neutral flex-1" title="Neutral"></div>
          </div>
        </button>
    </div>
  </div>
</template>

