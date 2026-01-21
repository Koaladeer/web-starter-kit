<script setup>
import {onMounted, ref} from 'vue'
import {themeChange} from "theme-change";
onMounted(() => {
  themeChange(false)
})
defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="bg-base-100">
    <h1>{{ msg }}</h1>
    <div class="flex gap-2 mb-8">
      <button data-theme="light" data-set-theme="light" class="btn btn-sm btn-outline">Light</button>
      <button data-theme="dark" data-set-theme="dark" class="btn btn-sm btn-outline">Dark</button>
      <button data-theme="abyss" data-set-theme="abyss" class="btn btn-sm btn-outline">Abyss</button>
      <button data-theme="night" data-set-theme="night" class="btn btn-sm btn-outline">Night</button>
    </div>
    <div class="card">
      <button
          @click="count++"
          class="btn w-64 rounded-full"
      >
        count is {{ count }}
      </button>
    </div>
  </div>
</template>

