<script setup>
    import { ref } from 'vue';

    const texto = ref('');
</script>

<template>
    <p v-show="texto">Mensaje: {{ texto }}</p>

    <form>
        <!-- Vincular el valor del input con el objeto texto -->
        <input type="text" v-model="texto">
    </form>
</template>

<style scoped>

</style>