<script setup>
    // Para evitar el envío de datos entre componentes intermedios se importa el objeto provide
    import { ref, provide } from 'vue';
    import TwoComponent from './TwoComponent.vue';

    const nombre = ref('Manuel');

    // Es el equivalente en laravel a compact, se indica el nombre de la variable y su valor
    provide('nombre', nombre);
</script>

<template>
    <div class="bg-red-500 p-8">
        <p class="text-2xl">
            Hola desde el componente 1
        </p>

        <input type="text" class="bg-white" v-model="nombre">

        <TwoComponent />
    </div>
</template>

<style scoped>

</style>