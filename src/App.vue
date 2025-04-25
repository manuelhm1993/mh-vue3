<script setup>
    import { ref, computed } from 'vue';

    const bg = ref(false);

    const msg = computed(() => (!bg.value) ? 'Rojo' : 'Azul');

    const pintar = (e) => {
        bg.value = !bg.value;
    };
</script>

<template>
    <button @click="pintar">
        {{ msg }}
    </button>

    <!-- Forma de vincular clases a través de arrays -->
    <p :class="[ ((bg) ? 'bg-red' : 'bg-blue'), 'text-white' ]">Hola mundo</p>
</template>

<style scoped>
    .bg-red {
        background-color: red;
    }

    .bg-blue {
        background-color: blue;
    }

    .text-white {
        color: white;
    }
</style>