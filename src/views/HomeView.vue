<template>
  <div>
    <!-- Header Section -->
    <header class="p-4">
      <h1 class="text-4xl font-bold mt-5 mr-10">Tasty Tales</h1>
      <p class="text-lg font-semibold">Exploring the world of delicious food</p>
    </header>

    <!-- Featured Posts Section -->
    <section class="my-8">
      <h2 class="text-2xl font-bold mb-4 ml-5">Featured Posts</h2>
      <!-- Featured Posts Carousel -->
      <carousel-component></carousel-component>
    </section>

    <!-- Recent Posts Section -->
    <section class="my-8">
      <h2 class="text-2xl font-bold mb-4">Recent Posts</h2>
      <!-- List of Recent Posts using the updated HomeCardComponent -->
      <home-card-component class="mb-4" v-for="(post, index) in recentPosts" :key="index" :title="post.title"
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
          title: 'Right Recommendations',
          description: 'Blend of global tastes, creating a symphony for your taste buds. Experience a culinary journey that transcends borders.',
          image: '/placeholders/home1.jpg',
          tags: ['recipe', 'cooking', 'delicious'],
        },
        {
          title: 'Deep Delights',
          description: 'Oceanic delights await! Immerse yourself in a seafood paradise with our expertly prepared dishes, a tribute to the treasures of the sea.',
          image: '/placeholders/home2.jpg',
          tags: ['seafood', 'exotic', 'amazing'],
        },
        {
          title: 'Spicy Sensations',
          description: 'Embark on a journey of spices! Our dishes are a celebration of bold flavors, promising a culinary adventure that ignites your senses.',
          image: '/placeholders/home3.png',
          tags: ['spicy', 'travel', 'wonderful'],
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
