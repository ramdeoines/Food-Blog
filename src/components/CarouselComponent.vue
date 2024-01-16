<template>
    <div class="carousel-container">
        <div class="carousel">
            <div class="carousel-inner">
                <div v-for="(post, index) in visiblePosts" :key="index" class="carousel-item">
                    <div class="image-container">
                        <img :src="post.image" alt="Post Image" class="w-full h-full object-cover rounded-md mb-4">
                        <div class="overlay">
                            <h3 class="text-lg font-semibold">{{ post.title }}</h3>
                            <p>{{ post.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="overlay-btn-container">
        <button @click="prev" class="carousel-btn left overlay-btn">&#8249;</button>
        <button @click="next" class="carousel-btn right overlay-btn">&#8250;</button>
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
                    image: '../src/assets/food1.jpg',
                },
                {
                    title: 'Delicious Dish 2',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: '../src/assets/food2.jpg',
                },
                {
                    title: 'Delicious Dish 3',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: '../src/assets/food3.jpg',
                },
                {
                    title: 'Delicious Dish 4',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: '../src/assets/food4.jpg',
                },
                {
                    title: 'Delicious Dish 5',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: '../src/assets/food5.jpg',
                },
                {
                    title: 'Delicious Dish 6',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: '../src/assets/food6.jpg',
                },
                {
                    title: 'Delicious Dish 7',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: '../src/assets/food7.jpg',
                },
                {
                    title: 'Delicious Dish 8',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: '../src/assets/food8.jpg',
                },
                {
                    title: 'Delicious Dish 9',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: '../src/assets/food9.jpg',
                },
                {
                    title: 'Delicious Dish 10',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: '../src/assets/food10.jpg',
                },
            ],
            currentIndex: 0,
            itemsPerPage: 5, // Number of items to display per page
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
            this.currentIndex += this.itemsPerPage;
            if (this.currentIndex >= this.posts.length) {
                this.currentIndex = 0; // Loop back to the first item
            }
        },
        prev() {
            this.currentIndex -= this.itemsPerPage;
            if (this.currentIndex < 0) {
                this.currentIndex = this.posts.length - this.itemsPerPage; // Loop back to the last item
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
    overflow-x: auto;
    /* Enable horizontal scrolling for small screens */
    justify-content: center;
    /* Center the carousel content */
    flex-wrap: nowrap;
    /* Prevent items from wrapping to the next line */
}

.carousel-inner {
    display: flex;
    transition: transform 0.3s ease;
    /* Add smooth transition effect */
}

.carousel-item {
    flex: 0 0 auto;
    width: 80%;
    /* Adjust the width to take 80% of the container */
    max-width: 300px;
    /* Set a maximum width for responsiveness */
    margin-right: 16px;
    /* Adjust the margin between items */
}

.carousel-item img {
    max-width: 100%;
    /* Ensure images scale with the width of their container */
    height: auto;
    /* Maintain the aspect ratio */
    display: block;
    /* Remove any residual bottom spacing */
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
    z-index: 2;
}

.carousel-btn.left {
    left: 10px;
}

.carousel-btn.right {
    right: 10px;
}

/* Overlay Styles */
.image-container {
    position: relative;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    /* Adjust the overlay background color and opacity as needed */
    color: #fff;
    /* Adjust the text color as needed */
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.375rem;
    /* Rounded corners */
}

.overlay-btn-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    /* Adjust padding for better visibility */
}

.overlay-btn {
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    z-index: 3;
    /* Ensure the overlay is above the carousel content */
    padding: 8px;
    /* Add padding for better visibility */
    border: none;
    /* Remove button border */
    border-radius: 0;
    /* Rectangular overlay */
}

.image-container:hover .overlay {
    opacity: 1;
}</style>