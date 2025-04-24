<script setup>
    // Para funciones un poco más complejas, se deben definir en el script y llamarse en el template
    const saludo = (nombre) => alert(`Hola ${nombre}`);
</script>

<template>
    <!-- Método abreviado -->
    <button type="button" @click="saludo('Manuel Henriquez')">
        Haz click
    </button>
</template>

<style scoped>

</style>