<script setup>
    import { ref } from 'vue';

    const text = ref('');
</script>

<template>
    <header>
        <h3>Mensaje:</h3>
        <p>{{ text }}</p>
    </header>

    <section>
        <form @submit.prevent="">
            <!-- El modificador lazy actualiza la propiedad al perder el foco -->
            <input type="text" v-model.lazy="text">
        </form>
    </section>
</template>

<style scoped>

</style>