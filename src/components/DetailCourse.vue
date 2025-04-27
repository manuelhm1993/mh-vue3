<script setup>
    // Validaciones a los props
    const { course, prueba } = defineProps({
        course: Object, // Esto indica que una variable debe ser de un tipo específico
        prueba: [String, Number] // Esto indica que se puede recibir datos tipo numérico y strings
    });
</script>

<template>
    <!-- Luego de recibir la información, se puede interpolar como variables normales -->
    <h2>{{ course.title }} - {{ prueba }}</h2>
    <p>Profesor: {{ course.teacher }}</p>
    <p>Costo: ${{ course.price }}</p>
</template>

<style scoped>

</style>