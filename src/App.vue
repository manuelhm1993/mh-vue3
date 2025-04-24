<script setup>
    // Para funciones un poco más complejas, se deben definir en el script y llamarse en el template
    const saludo = () => alert('Hola desde vue');
</script>

<template>
    <!-- Método abreviado -->
    <button type="button" @click="saludo">
        Haz click
    </button>
</template>

<style scoped>

</style>