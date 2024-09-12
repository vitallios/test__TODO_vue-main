<script setup>
import { ref } from 'vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '@/constants'
import { normalaizPageHash, generateTimlineItems } from '@/function';
import TheHeader from "@/components/TheHeader.vue";
import TheNav from "@/components/TheNav.vue";
import TheTimeline from "@/pages/TheTimeline.vue";
import TheActivities from "@/pages/TheActivities.vue";
import TheProgress from "@/pages/TheProgress.vue";

const currontPage = ref(normalaizPageHash())

const timlineItems = generateTimlineItems();


function goTo(page) {
  currontPage.value = page
}
</script>
<template>
  <TheHeader @go-to-timline="goTo(PAGE_TIMELINE) " @go-to-progress="goTo(PAGE_PROGRESS)" />
  <!-- main -->
  <main class="flex flex-grow flex-col p-3">
    <TheTimeline v-show="currontPage === PAGE_TIMELINE" :timline-items="timlineItems" />
    <TheActivities v-show="currontPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currontPage === PAGE_PROGRESS" />
  </main>
  <!-- nav -->
  <TheNav :current-page="currontPage" @navigate="goTo($event)" />
</template>
