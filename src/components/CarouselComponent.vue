<template>
    <div class="carousel">
        <button @click="prev" class="carousel-btn left">&#8249;</button>
        <div class="carousel-inner">
            <div v-for="(post, index) in visiblePosts" :key="index" class="carousel-item">
                <!-- Display your post content here -->
                <img :src="post.image" alt="Post Image" class="w-full h-full object-cover rounded-md mb-4">
                <h3 class="text-lg font-semibold">{{ post.title }}</h3>
                <p>{{ post.description }}</p>
            </div>
        </div>
        <button @click="next" class="carousel-btn right">&#8250;</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            posts: [
            {
          title: 'Delicious Dish 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: '../src/assets/blog_logo.png',
        },
        {
          title: 'Delicious Dish 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: '../src/assets/blog_logo.png',
        },
        {
          title: 'Delicious Dish 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: '../src/assets/blog_logo.png',
        },
        {
          title: 'Delicious Dish 4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: '../src/assets/blog_logo.png',
        },
        {
          title: 'Delicious Dish 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: '../src/assets/blog_logo.png',
        },
        {
          title: 'Delicious Dish 6',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: '../src/assets/blog_logo.png',
        },
        {
          title: 'Delicious Dish 7',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: '../src/assets/blog_logo.png',
        },
        {
          title: 'Delicious Dish 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: '../src/assets/blog_logo.png',
        },
        {
          title: 'Delicious Dish 9',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: '../src/assets/blog_logo.png',
        },
        {
          title: 'Delicious Dish 10',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: '../src/assets/blog_logo.png',
        },
            ],
            currentIndex: 0,
            itemsPerPage: 7, // Number of items to display per page
        };
    },
    computed: {
        visiblePosts() {
            const start = this.currentIndex;
            const end = start + this.itemsPerPage;
            return this.posts.slice(start, end);
        },
    },
    methods: {
        next() {
            if (this.currentIndex < this.posts.length - this.itemsPerPage) {
                this.currentIndex += this.itemsPerPage;
            }
        },
        prev() {
            if (this.currentIndex > 0) {
                this.currentIndex -= this.itemsPerPage;
            }
        },
    },
};
</script>
  
<style scoped>
/* Add Tailwind CSS styles specific to your carousel */
.carousel {
    position: relative;
    display: flex;
    overflow-x: hidden;
}

.carousel-inner {
    display: flex;
    transition: transform 0.3s ease;
    /* Add smooth transition effect */
}

.carousel-item {
    flex: 0 0 auto;
    width: 300px;
    /* Adjust the width as needed */
    margin-right: 16px;
    /* Adjust the margin between items */
}

.carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    font-size: 2rem;
    color: #333;
    cursor: pointer;
}

.carousel-btn.left {
    left: 10px;
}

.carousel-btn.right {
    right: 10px;
}
</style>
  