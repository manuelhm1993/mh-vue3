<script setup>
    import { ref } from 'vue';

    const type = ref('A');

    const setType = (e) => type.value = e.target.textContent;
</script>

<template>
    <button type="button" @click="setType">A</button>
    <button type="button" @click="setType">B</button>
    <button type="button" @click="setType">C</button>

    <!-- La solución más eficiente es colocar todo en un template y vue lo renderiza -->
    <template v-if="type === 'A'">
        <p>Esta es</p>
        <p>la etiqueta</p>
        <p>A</p>
    </template>

    <p v-else-if="type === 'B'">B</p>

    <p v-else>C</p>
</template>

<style scoped>
    
</style>
