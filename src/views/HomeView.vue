<template>
  <div>
    <!-- Header Section -->
    <header class="bg-teal-900 text-white p-4">
      <h1 class="text-4xl font-bold">Tasty Tales</h1>
      <p class="text-lg">Exploring the world of delicious food</p>
    </header>

    <!-- Featured Posts Section -->
    <section class="my-8">
      <h2 class="text-2xl font-bold mb-4">Featured Posts</h2>
      <!-- Featured Posts Carousel -->
      <carousel-component></carousel-component>
    </section>

    <!-- Recent Posts Section -->
    <section class="my-8">
      <h2 class="text-2xl font-bold mb-4">Recent Posts</h2>
      <!-- List of Recent Posts Goes Here -->
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
    </section>
  </div>
</template>

<script>
import CarouselComponent from '../components/CarouselComponent.vue';

export default {
  data() {
    return {};
  },
  components: {
    CarouselComponent,
  },
};
</script>

<style scoped>

</style>
