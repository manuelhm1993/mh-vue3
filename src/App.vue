<script setup>
    // Los whatches son funciones que se ejecutan cuando las propiedades reactivas cambian
    import { ref, watch } from 'vue';

    const cont = ref(0);

    // El watch es lo mismo que un observer, estará a la escucha de un cambio sobre una propiedad
    watch(cont, (newVal, oldVal) => {
        console.log(`La variable cont cambió: ${oldVal} -> ${newVal}`);
    });
</script>

<template>
    {{ cont }}
    <button type="button" @click="cont++">+</button>
</template>

<style scoped>

</style>