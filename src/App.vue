<script setup>
    import { ref } from 'vue';

    const text = ref('');
</script>

<template>
    <header>
        <h3>Mensaje:</h3>
    </header>

    <section>
        <form @submit.prevent="">
            <input type="text" v-model.trim="text">

            <button type="button" @click="console.log(text)">
                Mostrar en consola
            </button>
        </form>
    </section>
</template>

<style scoped>

</style>