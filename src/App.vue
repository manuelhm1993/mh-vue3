<script setup>
    const enviar = (e) => {
        console.log('Enviando');
    }
</script>

<template>
    <!-- Prevent default estilo vue -->
    <form @submit.prevent="enviar">
        <input type="text">

        <button type="submit">
            Enviar
        </button>
    </form>
</template>

<style scoped>

</style>