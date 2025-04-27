<script setup>
    // Los datos adicionales que se envían al componente se reciben desde el script
    const props = defineProps([
        'course'
    ]);
</script>

<template>
    <!-- Luego de recibir la información, se puede interpolar como variables normales -->
    <h1>{{ course }}</h1>
</template>

<style scoped>

</style>