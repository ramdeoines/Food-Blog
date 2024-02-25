<template>
  <router-link :to="' /recipe/' + title">
    <div class="container flex max-w-full rounded-lg overflow-hidden shadow-md bg-white mb-4 dark:bg-emerald-200">
      <img :src="image" :alt="altText" class="object-cover h-48 w-full" />
      <div class="p-4 flex flex-col">
        <h2 class="text-xl font-bold mb-2">{{ title }}</h2>
        <p class="text-gray-700 dark:text-gray-700 mb-4 font-semibold">{{ content }}</p>
        <div class="flex items-center">
          <span v-for="tag in tags" :key="tag" class="px-2 py-1 rounded-lg bg-gray-200 dark:bg-zinc-100 text-black font-bold mr-2 mb-2">{{ tag }}</span>
        </div>
      </div>
    </div>
  </router-link>
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
