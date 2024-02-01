<template>

    <div>
        <h1>{{ recipe.title }}</h1>
        <p>{{ recipe.description }}</p>
    </div>

</template>

<script>

    export default{
        props: ['id'],
        data() {
            return{
                recipe: {} // Fetch the recipe data using the provided ID
            };
        },
        created() {
            this.fetchRecipeData(); // Fetch the detailed recipe data based on the provided ID
        },
        methods: {
            fetchRecipeData() {
                // Implement a method to fetch the detailed recipe data based on the ID
                // You cane make an API call or use a local data source
            }
        }
    }

</script>