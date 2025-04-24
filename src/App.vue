<script setup>
    import { ref } from 'vue';

    const texto = ref('');

    const enviar = (e) => {
        console.log(texto.value);
        e.target.reset();
    };
</script>

<template>
    <p v-show="texto">Mensaje: {{ texto }}</p>

    <form @submit.prevent="enviar">
        <!-- Vincular el valor del input con el objeto texto -->
        <input type="text" v-model="texto">

        <button type="submit">
            Enviar
        </button>
    </form>
</template>

<style scoped>

</style>