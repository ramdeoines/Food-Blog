<template>
  <router-link :to=" '/recipe/' + title">
    <div class="card-container">
      <img :src="image" :alt="altText" class="card-image">
      <div class="card-content">
        <div class="card-title">{{ title }}</div>
        <p class="card-text">{{ content }}</p>
        <div class="card-tags">
          <span v-for="tag in tags" :key="tag" class="card-tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    image: String,
    altText: String,
    tags: Array
  }
}
</script>

<style scoped>
/* Center the card horizontally */
/* .flex {
  justify-content: center;
} */

/* Card Styles */
.card-container {
  max-width: 100%;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  /* margin: 1%; */
}

.card-image {
  flex: 1;
  object-fit: cover;
  object-position: left;
  width: 100%;
  max-height: 200px;
}

.card-content {
  flex: 2;
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.card-text {
  color: #333;
  margin-bottom: 16px;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
}

.card-tag {
  background-color: #f2f2f2;
  color: #555;
  font-size: 0.875rem;
  font-weight: bold;
  padding: 8px;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 8px;
}

/* Media Query for Small Screens */
@media screen and (max-width: 768px) {
  .card-container {
    flex-direction: column;
    /* Stack elements vertically on smaller screens */
    max-width: 100%;
    margin: 2% 0;
  }

  .card-image {
    max-height: 100%;
    /* Adjusted for responsiveness */
  }
}
</style>
