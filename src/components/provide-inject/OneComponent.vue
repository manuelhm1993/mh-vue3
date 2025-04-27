<script setup>
    import { ref } from 'vue';
    import TwoComponent from './TwoComponent.vue';

    const nombre = ref('Manuel');
</script>

<template>
    <div class="bg-red-500 p-8">
        <p class="text-2xl">
            Hola desde el componente 1
        </p>

        <TwoComponent :nombre="nombre" />
    </div>
</template>

<style scoped>

</style>