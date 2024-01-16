<template>
  <div>
    <!-- Header Section -->
    <header class="bg-teal-900 text-white p-4">
      <h1 class="text-4xl font-bold">Tasty Tales</h1>
      <p class="text-lg">Exploring the world of delicious food</p>
    </header>

    <!-- Featured Posts Section -->
    <section class="my-8">
      <h2 class="text-2xl font-bold mb-4 ml-14">Featured Posts</h2>
      <!-- Featured Posts Carousel -->
      <carousel-component></carousel-component>
    </section>

    <!-- Recent Posts Section -->
    <section class="my-8">
      <h2 class="text-2xl font-bold mb-4 ml-12">Recent Posts</h2>
      <!-- List of Recent Posts using the updated HomeCardComponent -->
      <home-card-component v-for="(post, index) in recentPosts" :key="index" :title="post.title"
        :content="post.description" :image="post.image" :altText="post.title" :tags="post.tags"></home-card-component>
    </section>
  </div>
</template>

<script>
import CarouselComponent from '../components/CarouselComponent.vue';
import HomeCardComponent from '../components/HomeCardComponent.vue';

export default {
  data() {
    return {
      recentPosts: [
        {
          title: 'Amazing Recipe 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: '../src/assets/placeholders/home1.jpg',
          tags: ['recipe', 'cooking', 'delicious'],
        },
        {
          title: 'Amazing Recipe 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: '../src/assets/placeholders/home2.jpg',
          tags: ['recipe', 'cooking', 'delicious'],
        },
        {
          title: 'Amazing Recipe 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: '../src/assets/placeholders/home3.png',
          tags: ['recipe', 'cooking', 'delicious'],
        },
      ],
    };
  },
  components: {
    CarouselComponent,
    HomeCardComponent,
  },
};
</script>

<style scoped></style>
