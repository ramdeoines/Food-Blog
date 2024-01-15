<template>
  <div class="max-w-full bg-white rounded-lg overflow-hidden shadow-md flex">
    <img class="w-1/3" :src="image" :alt="altText">
    <div class="w-2/3 px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base">{{ content }}</p>
      <div class="px-6 pt-4 pb-2">
        <span v-for="tag in tags" :key="tag" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ tag }}</span>
      </div>
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
/* Additional styles specific to the HomeCardComponent */
</style>
