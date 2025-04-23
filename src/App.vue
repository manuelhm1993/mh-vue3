<script setup>
    const attrs = {
        id: 'text-content',
        name: 'text-content',
        class: 'mh-blue'
    };

    // const clases = 'mh-blue';
</script>

<template>
    <!-- Agregar un objeto de atributos dinámicamente -->
    <p v-bind="attrs">Hola mundo</p>
    
    <!-- Método abreviado para un único elemento -->
    <!-- <p :class="clases">Hola mundo</p> -->
</template>

<style scoped>
    .mh-blue {
        color: #06f;
        font-weight: 600;
        font-size: 1.6em;
        text-transform: uppercase;
    }
</style>
