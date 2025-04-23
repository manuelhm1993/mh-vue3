<script setup>
    import { ref } from 'vue';

    const awesome = ref(false);

    const toggle = () => awesome.value = !awesome.value;
</script>

<template>
    <button type="button" @click="toggle">{{ awesome ? 'Ocultar' : 'Mostrar' }} mensaje</button>

    <!-- Muestra el contenido solo si la condición es verdadera -->
    <p v-if="awesome">
        MHenriquez es asombroso
    </p>

    <!-- Renderizado en caso de que la condición sea falsa, el v-else debe ir inmediatamente a continuación de un v-if o v-else-if -->
    <p v-else>
        Haz click :D
    </p>
</template>

<style scoped>
    
</style>
