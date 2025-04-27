<script setup>
    import { ref } from 'vue';

    const cont = ref(0);
</script>

<template>
    <button type="button" :disabled="cont === 0" @click="cont--">-</button>
    <span class="cont">{{ cont }}</span>
    <button type="button" @click="cont++">+</button>
</template>

<style scoped>
    .cont {
        margin: 0 10px;
    }
</style>