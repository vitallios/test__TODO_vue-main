<template>
 <section class="container mt-7">
  <ul>
   <li v-for="i in [0, 1, 2, 3, 4, 5, 6]" :key="i"
   class=" relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <a href="#" class=" rounded bg-gray-100 px-2 font-mono text-lg text-gray-500 absolute -top-4 left-1/2 -translate-x-1/2" >0{{ i }}:00</a>
   </li>
  </ul>
 </section>
</template>