<script setup>
    // Para declarar la reactividad dentro de composition, se usa la función ref
    import { ref } from 'vue';

    // Esta función envuelve un objeto o variable dentro de una referencia con propiedad .value
    let cont = ref(0);

    const decrement = () => {
        cont.value--;
    }

    const increment = () => {
        cont.value++;
    }
</script>

<template>
    <!-- Una vez definida la referencia, se puede mutar su valor facilmente -->
    <button type="button" @click="decrement" :disabled="cont === 0">-</button>
    <!-- Aquí no se coloca el .value porque del lado de html vue lo hace por detrás -->
    {{ cont }}
    <button type="button" @click="increment">+</button>
</template>

<style scoped>
    
</style>
