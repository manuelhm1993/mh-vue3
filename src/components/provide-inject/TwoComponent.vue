<script setup>
    import ThreeComponent from './ThreeComponent.vue';

    const { nombre } = defineProps(['nombre']);
</script>

<template>
    <div class="bg-blue-500 p-8">
        <p class="text-2xl">
            Hola desde el componente 2
        </p>

        <ThreeComponent :nombre />
    </div>
</template>

<style scoped>

</style>