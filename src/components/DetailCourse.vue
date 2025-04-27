<script setup>
    // Los datos adicionales que se envían al componente se reciben desde el script
    const { course, prueba } = defineProps([
        'course', 'prueba'
    ]);

    // console.log(props.prueba);
    // Para evitar acceder al objeto props, se puede destructurar el objeto en variables
    console.log(prueba);
</script>

<template>
    <!-- Luego de recibir la información, se puede interpolar como variables normales -->
    <h2>{{ course.title }}</h2>
    <p>Profesor: {{ course.teacher }}</p>
    <p>Costo: ${{ course.price }}</p>
</template>

<style scoped>

</style>