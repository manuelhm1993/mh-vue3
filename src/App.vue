<script setup>
    // Para declarar la reactividad dentro de composition, se usa la función ref
    import { ref } from 'vue';

    // Al trabajar con objetos, ref no es la mejor opción
    let state = ref({
        cont: 0
    });

    const decrement = () => {
        // Al trabajar con objetos, se debe acceder a las propiedades luego del value
        state.value.cont--;
    }

    const increment = () => {
        state.value.cont++;
    }
</script>

<template>
    <!-- Una vez definida la referencia, se puede mutar su valor facilmente -->
    <button type="button" @click="decrement" :disabled="state.cont === 0">-</button>
    <!-- Aquí no se coloca el .value porque del lado de html vue lo hace por detrás -->
    {{ state.cont }}
    <button type="button" @click="increment">+</button>
</template>

<style scoped>
    
</style>
