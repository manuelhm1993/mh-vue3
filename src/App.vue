<script setup>
    const enviar = (e) => {
        e.preventDefault();
        
        console.log('Enviando');
    }
</script>

<template>
    <form @submit="enviar">
        <input type="text">

        <button type="submit">
            Enviar
        </button>
    </form>
</template>

<style scoped>

</style>