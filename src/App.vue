<script setup>
    import { ref } from 'vue';

    const type = ref('A');

    const setType = (e) => type.value = e.target.textContent;
</script>

<template>
    <button type="button" @click="setType">A</button>
    <button type="button" @click="setType">B</button>
    <button type="button" @click="setType">C</button>

    <p v-if="type === 'A'">A</p>
    <p v-else-if="type === 'B'">B</p>
    <p v-else>C</p>
</template>

<style scoped>
    
</style>
