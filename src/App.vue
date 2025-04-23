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
</template>

<style scoped>
    
</style>
