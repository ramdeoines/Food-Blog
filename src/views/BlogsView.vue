<template>
  <div class="container mx-auto my-8 mb-4 mt-4">
    <h1 class="text-4xl font-bold mb-4 mt-4">Blogs: Street Eats</h1>

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
          title: 'Fiesta Feasts',
          content: 'Join the fiesta of flavours with our street eats. Find the fun in our flavours.',
          image: '/placeholders/blog1.jpg',
          altText: 'Alternate text',
          tags: ['#fiesta', '#flavour', '#fun']
        },
        {
          title: 'Street Sweets',
          content: 'Satisfy your sweet tooth with sweet tales from street corners. Every turn is a twist.',
          image: '/placeholders/blog2.jpg',
          altText: 'Alternate text',
          tags: ['#sweet', '#suprise', '#treats']
        },
        {
          title: 'Title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
          image: '/placeholders/blog3.jpg',
          altText: 'Alternate text',
          tags: ['#photography', '#travel', '#winter']
        },
        {
          title: 'Title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
          image: '/placeholders/blog4.jpg',
          altText: 'Alternate text',
          tags: ['#photography', '#travel', '#winter']
        },
        {
          title: 'Title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
          image: '/placeholders/blog5.jpg',
          altText: 'Alternate text',
          tags: ['#photography', '#travel', '#winter']
        },
        {
          title: 'Title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
          image: '/placeholders/blog6.jpg',
          altText: 'Alternate text',
          tags: ['#photography', '#travel', '#winter']
        }
      ]
    };
  }
}
</script>
