<script setup>
    // Para declarar la reactividad dentro de composition, se usa la función ref
    import { ref } from 'vue';

    // Esta función envuelve un objeto o variable dentro de una referencia con propiedad .value
    let cont = ref(0);
</script>

<template>
    <!-- Una vez definida la referencia, se puede mutar su valor facilmente -->
    <button type="button" @click="cont--">-</button>
    {{ cont }}
    <button type="button" @click="cont++">+</button>
</template>

<style scoped>
    
</style>
