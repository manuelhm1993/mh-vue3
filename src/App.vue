<script setup>
    import { ref } from 'vue';

    const bg = ref('');

    const pintar = (e) => {
        bg.value = (bg.value === '') ? 'bg-red' : '';
    };
</script>

<template>
    <button @click="pintar">
        Pintar
    </button>

    <p :class="bg">Hola mundo</p>
</template>

<style scoped>
    .bg-red {
        background-color: red;
    }
</style>