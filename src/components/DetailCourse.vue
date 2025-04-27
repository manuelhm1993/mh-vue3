<script setup>
    // Los datos adicionales que se envían al componente se reciben desde el script
    const props = defineProps([
        'course'
    ]);

    console.log(props.course);
</script>

<template>
    <!-- Luego de recibir la información, se puede interpolar como variables normales -->
    <h2>{{ course.title }}</h2>
    <p>Profesor: {{ course.teacher }}</p>
    <p>Costo: ${{ course.price }}</p>
</template>

<style scoped>

</style>