<template>
  <div>
    <!-- Header Section -->
    <header class="bg-teal-900 text-white p-4">
      <h1 class="text-4xl font-bold">Tasty Tales</h1>
      <p class="text-lg">Exploring the world of delicious food</p>
    </header>

    <!-- Featured Post Section -->
    <section class="my-8">
      <h2 class="text-2xl font-bold mb-4">Featured Post</h2>
      <!-- Featured Post Content Goes Here -->
    </section>

    <!-- Recent Posts Section -->
    <section class="my-8">
      <h2 class="text-2xl font-bold mb-4">Recent Posts</h2>
      <!-- List of Recent Posts Goes Here -->
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error amet pariatur ipsam, quas culpa cumque eos quis
        quo quos sint voluptatum consectetur blanditiis consequatur iste cupiditate debitis velit! Amet reprehenderit quod
        saepe, nulla perferendis nihil suscipit? Nostrum laborum inventore dicta, blanditiis esse tenetur ex eligendi
        repellendus natus perspiciatis aspernatur officiis facere velit rem ut. Rem culpa ad temporibus iusto architecto.
        Velit atque cum, ullam odio voluptates voluptate reprehenderit fugiat? Iste, atque in? Quis non veritatis ullam.
        Neque aliquid distinctio sunt nostrum laudantium facere impedit et nulla voluptatum. Ea quod ad nesciunt
        perspiciatis fugit a, doloremque obcaecati sapiente quos ex consequuntur?</p>
    </section>
  </div>
</template>

<script>

export default {

  data() {

    return {
      modules: [],
    };

  },

  components: {
    
  }

}
</script>

<style>
#app {
  height: 100%;
}

html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>