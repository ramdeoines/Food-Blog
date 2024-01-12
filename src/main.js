import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import VueCarousel from 'vue-carousel';
import '../styles.css';
// import 'tailwindcss/base';
// import 'tailwindcss/components';
// import 'tailwindcss/utilities';

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Use VueCarousel
app.use(VueCarousel);

app.mount('#app');
