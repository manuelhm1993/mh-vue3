<script setup>
    import { ref } from 'vue';

    const type = ref('A');

    const setType = (e) => type.value = e.target.textContent;
</script>

<template>
    <button type="button" @click="setType">A</button>
    <button type="button" @click="setType">B</button>
    <button type="button" @click="setType">C</button>

    <!-- Otra solución es agrupar todos los elementos dentro de un contenedor y colocar la condición -->
    <div v-if="type === 'A'">
        <p>Esta es</p>
        <p>la etiqueta</p>
        <p>A</p>
    </div>

    <p v-else-if="type === 'B'">B</p>

    <p v-else>C</p>
</template>

<style scoped>
    
</style>
