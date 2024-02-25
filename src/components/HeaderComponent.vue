<template>
  <header class="bg-lime-950 text-white py-4 pb-12 fixed top-0 left-0 w-full z-50">
    <div class="container mx-auto flex flex-row items-center justify-between">

      <!-- Logo -->
      <router-link to="/" class="flex items-center space-x-2">
        <img src="@/assets/blog_logo.png" alt="Blog Logo" class="w-20 h-auto rounded-md transition-transform transform hover:scale-110
        mr-10 mt-5 border-2 border-white">
      </router-link>

      <!-- Navigation buttons -->
      <nav class="flex items-center space-x-4 justify-end">
        <router-link to="/" class="font-bold ml-2 text-xl sm:text-2xl md:text-3xl hover:text-gray-300">
          Home
        </router-link>
        <router-link to="/blogs" class="font-bold mr-3 text-xl sm:text-2xl md:text-3xl hover:text-gray-300">
          Blogs
        </router-link>
        <router-link to="/about" class="font-bold m-2 text-xl sm:text-2xl md:text-3xl hover:text-gray-300">
          About
        </router-link>
      </nav>

    </div>
  </header>
</template>
