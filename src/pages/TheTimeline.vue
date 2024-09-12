<script setup>
import { generateTimlineItems } from '../function';
import TimlineItem from '@/components/TimlineItem.vue';
const timlineItems = generateTimlineItems();


</script>

<template>
 <section class="container mt-7">
  <ul>
   <TimlineItem  v-for="timlineItem in timlineItems" :key="timlineItem.hour" :timline-item="timlineItem " />
   </ul>
  
 </section>
</template>