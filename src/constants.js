import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'


export const PAGE_TIMELINE = 'timeline';
export const PAGE_ACTIVITIES = 'activities';
export const PAGE_PROGRESS = 'progress';

export const HOUR_IN_DAY = 24;


export const NAV_ITEMS = {
 [PAGE_TIMELINE]: ClockIcon,
 [PAGE_ACTIVITIES]: ListBulletIcon,
 [PAGE_PROGRESS]: ChartBarIcon,
};
export const OPTIONS = [
 {value: 1, label: 'C O D I N G'},
 {value: 2, label: 'R E A D I N G'},
 {value: 3, label: 'T R A I N I N G'},
]
