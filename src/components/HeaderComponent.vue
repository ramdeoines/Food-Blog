<template>
  <header class="bg-lime-950 text-white py-4 pb-12 fixed top-0 left-0 w-full z-50">
    <div class="container mx-auto flex flex-row items-center justify-between">

      <!-- Logo -->
      <router-link to="/" class="flex items-center space-x-2">
        <img src="@/assets/blog_logo.png" alt="Blog Logo" class="w-16 h-auto rounded-md transition-transform transform hover:scale-110">
      </router-link>

      <!-- Navigation buttons -->
      <nav class="flex items-center space-x-4 justify-end">
        <router-link to="/" class="font-bold m-4 text-base sm:text-lg md:text-xl hover:text-gray-300">
          Home
        </router-link>
        <router-link to="/blogs" class="font-bold m-4 text-base sm:text-lg md:text-xl hover:text-gray-300">
          Blogs
        </router-link>
        <router-link to="/about" class="font-bold m-4 text-base sm:text-lg md:text-xl hover:text-gray-300">
          About
        </router-link>
      </nav>

    </div>
  </header>
</template>
