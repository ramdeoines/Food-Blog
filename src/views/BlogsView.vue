<!-- BlogsView.vue -->

<template>
  <div class="container mx-auto my-8 mb-4 mt-4">
    <h1 class="text-4xl font-bold mb-4 mt-4">Blogs</h1>

    <!-- Blog posts or featured content section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Use CardComponent for each blog post -->
      <CardComponent
        v-for="(blog, index) in blogPosts"
        :key="index"
        :title="blog.title"
        :content="blog.content"
        :image="blog.image"
        :altText="blog.altText"
        :tags="blog.tags"
      />
    </div>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';

export default {
  components: {
    CardComponent
  },
  data() {
    return {
      blogPosts: [
        {
          title: 'The Coldest Sunset',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
          image: '@/assets/blog_logo.png',
          altText: 'Sunset in the mountains',
          tags: ['#photography', '#travel', '#winter']
        },
      ]
    };
  }
}
</script>

<style>
/* Additional styles specific to the HomePage component */
</style>
