<template>
  <div class="container mx-auto my-8 mb-4 mt-4">
    <h1 class="text-4xl font-bold mb-4 mt-4">Blogs</h1>

    <!-- Blog posts or featured content section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Use BlogsCardComponent for each blog post -->
      <BlogsCardComponent v-for="(blog, index) in blogPosts" :key="index" :title="blog.title" :content="blog.content"
        :image="blog.image" :altText="blog.altText" :tags="blog.tags" />
    </div>
  </div>
</template>

<script>
import BlogsCardComponent from '@/components/BlogsCardComponent.vue';

export default {
  components: {
    BlogsCardComponent
  },
  data() {
    return {
      blogPosts: [
        {
          title: 'Title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
          image: '../src/assets/placeholders/blog1.jpg',
          altText: 'Alternate text',
          tags: ['#photography', '#travel', '#winter']
        },
        {
          title: 'Title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
          image: '../src/assets/placeholders/blog2.jpg',
          altText: 'Alternate text',
          tags: ['#photography', '#travel', '#winter']
        },
        {
          title: 'Title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
          image: '../src/assets/placeholders/blog3.jpg',
          altText: 'Alternate text',
          tags: ['#photography', '#travel', '#winter']
        },
        {
          title: 'Title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
          image: '../src/assets/placeholders/blog4.jpg',
          altText: 'Alternate text',
          tags: ['#photography', '#travel', '#winter']
        },
        {
          title: 'Title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
          image: '../src/assets/placeholders/blog5.jpg',
          altText: 'Alternate text',
          tags: ['#photography', '#travel', '#winter']
        },
        {
          title: 'Title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
          image: '../src/assets/placeholders/blog6.jpg',
          altText: 'Alternate text',
          tags: ['#photography', '#travel', '#winter']
        },
        {
          title: 'Title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
          image: '../src/assets/placeholders/blog7.jpg',
          altText: 'Alternate text',
          tags: ['#photography', '#travel', '#winter']
        },
        {
          title: 'Title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
          image: '../src/assets/placeholders/blog8.jpg',
          altText: 'Alternate text',
          tags: ['#photography', '#travel', '#winter']
        },
        {
          title: 'Title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
          image: '../src/assets/placeholders/blog9.jpg',
          altText: 'Alternate text',
          tags: ['#photography', '#travel', '#winter']
        },
        {
          title: 'Title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
          image: '../src/assets/placeholders/blog10.jpg',
          altText: 'Alternate text',
          tags: ['#photography', '#travel', '#winter']
        }
      ]
    };
  }
}
</script>

<style>
/* Additional styles specific to the HomePage component */
</style>
