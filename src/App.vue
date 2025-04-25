<script setup>
    import { ref, computed } from 'vue';

    const bg = ref('');

    const msg = computed(() => (bg.value === '') ? 'Pintar' : 'Restaurar');

    const pintar = (e) => {
        bg.value = (bg.value === '') ? 'bg-red' : '';
    };
</script>

<template>
    <button @click="pintar">
        {{ msg }}
    </button>

    <p :class="bg">Hola mundo</p>
</template>

<style scoped>
    .bg-red {
        background-color: red;
    }
</style>