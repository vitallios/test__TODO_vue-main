<script setup>
import TimlineItem from '@/components/TimlineItem.vue';
defineProps(['timlineItems'])

</script>

<template>
 <section class="container mt-7">
 
   <TimlineItem v-for="timlineItem in timlineItems" :key="timlineItem.hour" :timline-item="timlineItem" />
  
 </section>
</template>