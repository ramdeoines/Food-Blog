<template>
    <div class="carousel-container relative">
        <div class="carousel">
            <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * itemWidth}px)` }">
                <div v-for="(post, index) in posts" :key="index" class="carousel-item">
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
        <div class="overlay-btn-container">
            <button @click="prev" class="carousel-btn left overlay-btn">&#8249;</button>
            <button @click="next" class="carousel-btn right overlay-btn">&#8250;</button>
        </div>
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
                    image: '../src/assets/placeholders/food1.jpg',
                },
                {
                    title: 'Delicious Dish 2',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: '../src/assets/placeholders/food2.jpg',
                },
                {
                    title: 'Delicious Dish 3',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: '../src/assets/placeholders/food3.jpg',
                },
                {
                    title: 'Delicious Dish 4',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: '../src/assets/placeholders/food4.jpg',
                },
                {
                    title: 'Delicious Dish 5',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: '../src/assets/placeholders/food5.jpg',
                },
                {
                    title: 'Delicious Dish 6',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: '../src/assets/placeholders/food6.jpg',
                },
                {
                    title: 'Delicious Dish 7',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: '../src/assets/placeholders/food7.jpg',
                },
                {
                    title: 'Delicious Dish 8',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: '../src/assets/placeholders/food8.jpg',
                },
                {
                    title: 'Delicious Dish 9',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: '../src/assets/placeholders/food9.jpg',
                },
                {
                    title: 'Delicious Dish 10',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: '../src/assets/placeholders/food10.jpg',
                },
            ],
            currentIndex: 0,
            itemWidth: 0,
        };
    },
    computed: {
        visiblePosts() {
            const start = this.currentIndex;
            const end = start + this.itemsPerPage;
            return this.posts.slice(start, end);
        },
    },
    mounted() {
        // Calculate the width of a single item based on the container width
        this.itemWidth = this.$el.clientWidth;
    },
    methods: {
        next() {
            this.currentIndex++;
            if (this.currentIndex >= this.posts.length) {
                this.currentIndex = 0; // Loop back to the first item
            }
        },
        prev() {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.posts.length - 1; // Loop back to the last item
            }
        },
    },
};
</script>

<style scoped>
/* Add Tailwind CSS styles specific to your carousel */
.carousel-container {
  max-width: 800px; /* Set your desired maximum width */
  margin: 0 auto; /* Center the carousel */
}

.carousel {
  position: relative;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 1s ease; /* Adjust duration as needed */
}

.carousel-item {
  flex: 0 0 auto;
  width: 100%; /* Each item takes the full width of the container */
  max-width: 100%; /* Ensure it's responsive */
  margin-right: 16px;
}

.carousel-item img {
    width: 100%;
    max-width: 50%; /* Ensure images scale with the width of their container */
    height: auto; /* Maintain the aspect ratio */
    display: block; /* Remove any residual bottom spacing */
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
    display:flex;
    justify-content: center; /* Center the content horizontally */
    align-items: center; /* Center the content vertically */
    height: auto; /* Ensure the container takes the full height of the image */
    width: auto;
}

.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%; /* Set the height to 50% for bottom half overlay */
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%); /* Adjust the overlay background color and opacity as needed */
    color: #fff; /* Adjust the text color as needed */
    opacity: 1; /* Set opacity to 1 to make the overlay always visible */
    transition: opacity 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.375rem; /* Rounded corners */
}

.overlay-btn-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px; /* Adjust padding for better visibility */
}

.overlay-btn {
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    z-index: 3; /* Ensure the overlay is above the carousel content */
    padding: 8px; /* Add padding for better visibility */
    border: none; /* Remove button border */
    border-radius: 0; /* Rectangular overlay */
    transition: background-color 0.3s ease; /* Add transition for smoother effect */
}

.overlay-btn:hover {
    background-color: rgba(0, 0, 0, 0.8); /* Darker overlay on hover */
}

.image-container:hover .overlay {
    opacity: 1;
}

@media screen and (max-width: 768px) {
    .carousel-item {
        width: 100%;
        max-width: none;
        margin-right: 0;
    }
}
</style>