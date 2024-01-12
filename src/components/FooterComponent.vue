<template>
    <footer class="bg-gray-900 text-white py-4 flex-shrink-0">
        <div class="container mx-auto text-center">
            <!-- Footer content -->
            <p class="text-sm">© 2024 Tasty Tales. All rights reserved.</p>
        </div>
    </footer>
</template>
  
<script>
export default {

}
</script>

<style>
/* Full-height app container */
html, body {
  height: 100%;
}

/* Ensure the footer sticks to the bottom */
body {
  display: flex;
  flex-direction: column;
}

main {
  flex: 1; /* This pushes the footer to the bottom */
}
</style>