<script setup>
    // Para trabajar con propiedades computadas es necesario importar la definición computed
    import { computed } from 'vue';

    const ok = true;

    // Las propiedades computadas siempre deben retornar un valor y computed recibe un callback
    const isOk = computed(() => ok ? 'Si' : 'No');

    /* Las funciones tradicionales pueden conseguir el mismo efecto que las propiedades computadas, pero la diferencia fundamental es que las propiedades computadas almacenan en caché los resultados, es decir, los cálculos solo se hacen la primera vez que se llama, las funciones calculan en cada llamada */
    // const isOk = () => ok ? 'Si' : 'No';
</script>

<template>
    <!-- Las propiedades computadas funcionan muy similar a un método, pero no se llama con paréntesis -->
    {{ isOk }}
</template>

<style scoped>
    
</style>
