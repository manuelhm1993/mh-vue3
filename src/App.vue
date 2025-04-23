<script setup>
    import { ref } from 'vue';

    const active = ref(false);

    const toggle = () => active.value = !active.value;
</script>

<template>
    <button type="button" v-on:click="toggle">{{ active ? 'Ocultar' : 'Mostrar' }}</button>

    <p v-show="active">
        Hola mundo
    </p>
</template>

<style scoped>
    
</style>
