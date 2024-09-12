import {
  PAGE_TIMELINE,
  PAGE_ACTIVITIES,
  PAGE_PROGRESS,
  HOUR_IN_DAY,
} from "@/constants";

export function normalaizPageHash() {
  const hash = window.location.hash.slice(1);
  if ([PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS].includes(hash)) {
    return hash;
  }
  window.location.hash = PAGE_TIMELINE;
  return PAGE_ACTIVITIES;
}

export function generateTimlineItems() {
  const timllineItems = [];

  for (let hour = 0; hour < HOUR_IN_DAY; hour++) {
    timllineItems.push({ hour });
  }
  return timllineItems;
}
