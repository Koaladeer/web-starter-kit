<script setup>
import {useStore} from "../stores/store.js";

const store = useStore()
</script>

<template>
  <div class="bg-base-100">

    <div class="card">
      <button
          @click="store.incrementN1()"
          class="btn w-64 rounded-full"
      >
        Increment N1
      </button>
    </div>
  </div>
</template>

