<script setup>
    import { ref } from 'vue';

    const type = ref('A');

    const setType = (e) => type.value = e.target.textContent;
</script>

<template>
    <button type="button" @click="setType">A</button>
    <button type="button" @click="setType">B</button>
    <button type="button" @click="setType">C</button>

    <!-- Si se desea mostrar varios elementos en función de una condición se puede agregar el if a todos -->
    <p v-if="type === 'A'">Esta es</p>
    <p v-if="type === 'A'">la etiqueta</p>
    <p v-if="type === 'A'">A</p>

    <p v-else-if="type === 'B'">B</p>

    <p v-else>C</p>
</template>

<style scoped>
    
</style>
