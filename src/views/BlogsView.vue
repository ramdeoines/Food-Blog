<template>
  <div class="container mx-auto my-8 mb-4 mt-4">
    <h1 class="text-4xl font-bold mb-4 mt-4">Blogs</h1>

    <!-- Blog posts or featured content section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Blog post cards or featured content components go here -->

      <div class="max-w-sm bg-white rounded-lg overflow-hidden shadow-md">
        <img class="w-full" src="@/assets/blog_logo.png" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
    </div>
  </div>
</template>
    
  <script>
  export default {
    // Component logic goes here
  }
  </script>
    
  <style>
  /* Additional styles specific to the HomePage component */
  </style>
    