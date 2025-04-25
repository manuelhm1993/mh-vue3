<script setup>
    import { ref, computed } from 'vue';

    const bg = ref(false);

    const msg = computed(() => (!bg.value) ? 'Pintar' : 'Restaurar');

    const pintar = (e) => {
        bg.value = !bg.value;
    };
</script>

<template>
    <button @click="pintar">
        {{ msg }}
    </button>

    <!-- Forma de vincular clases a través de arrays -->
    <p :class="[ bg ? 'bg-red' : '' ]">Hola mundo</p>
</template>

<style scoped>
    .bg-red {
        background-color: red;
    }
</style>