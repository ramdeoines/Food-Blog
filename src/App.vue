<template>

  <div id="app">
    <HeaderComponent />

    <div class="mt-32 mb-12">
      <RouterView />
    </div>
    
    <FooterComponent />
  </div>

</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  }
}

</script>

<style>

</style>
