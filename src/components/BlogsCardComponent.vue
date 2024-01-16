<template>
  <div class="max-w-sm bg-green-200 rounded-lg overflow-hidden shadow-md">
    <img class="w-full h-48 object-cover" :src="image" :alt="altText">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base">{{ content }}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span v-for="tag in tags" :key="tag"
        class="inline-block bg-emerald-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ tag
        }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    image: String,
    altText: String,
    tags: Array
  }
}
</script>
  
<style>
/* Additional styles */
</style>
  