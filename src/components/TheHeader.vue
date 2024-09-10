<script setup>
import TheLogo from './TheLogo.vue'
import TheHeaderProgress from './TheHeaderProgress.vue'
const emit = defineEmits(['goToTimline', 'goToProgress'])
</script>

<template>
  <header class="sticky z-10 top-0 flex items-center justify-between p-3 bg-white border-b">
    <TheLogo @click="emit('goToTimline')" />
    <TheHeaderProgress @click="emit('goToProgress')" />
  </header>

</template>