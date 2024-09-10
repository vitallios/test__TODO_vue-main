<script setup>
import { ref } from 'vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'
import TheHeader from "./components/TheHeader.vue";
import TheNav from "./components/TheNav.vue";
import TheTimeline from "./pages/TheTimeline.vue";
import TheActivities from "./pages/TheActivities.vue";
import TheProgress from "./pages/TheProgress.vue";

const currontPage = ref(normalaizPageHash())

function normalaizPageHash() {
  const hash = window.location.hash.slice(1)
  if ([PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS].includes(hash)) {
    return hash;
  }

  window.location.hash = PAGE_TIMELINE
  return PAGE_ACTIVITIES;
}

</script>
// ssjshj
<template>
  <TheHeader @go-to-timline="currontPage = PAGE_TIMELINE" @go-to-progress="currontPage = PAGE_PROGRESS" />
  <!-- main -->
  <main class="flex flex-grow flex-col p-3">
    <TheTimeline v-show="currontPage === PAGE_TIMELINE" />
    <TheActivities v-show="currontPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currontPage === PAGE_PROGRESS" />
  </main>
  <!-- nav -->
  <TheNav :current-page="currontPage" @navigate="currontPage = $event" />
</template>
