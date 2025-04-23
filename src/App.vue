<script setup>
    // Para trabajar con propiedades computadas es necesario importar la definición computed
    import { computed } from 'vue';

    const ok = false;

    // Las propiedades computadas siempre deben retornar un valor y computed recibe un callback
    const isOk = computed(() => ok ? 'Si' : 'No');
</script>

<template>
    <!-- Las propiedades computadas funcionan muy similar a un método -->
    {{ isOk }}
</template>

<style scoped>
    
</style>
