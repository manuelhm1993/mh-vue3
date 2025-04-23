<script setup>
    // Para declarar la reactividad dentro de composition, se usa la función ref (primitivos)
    // Para declarar la reactividad dentro de composition, se usa la función rective (objetos)
    import { reactive } from 'vue';

    // Al trabajar con objetos se debe usar reactive simplemente convertir el objeto en reactivo y no envolver
    let state = reactive({
        cont: 0
    });

    const decrement = () => {
        // Al trabajar con objetos, se debe acceder a las propiedades luego del value
        state.cont--;
    }

    const increment = () => {
        state.cont++;
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
