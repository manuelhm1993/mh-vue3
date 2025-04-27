<script setup>
    // Validaciones a los props
    const { course, prueba } = defineProps({
        course: Object, // Esto indica que una variable debe ser de un tipo específico
        prueba: {
            type: Number, //Para pasar más de una validación se usa un objeto
            //required: true,
            default: 0
        }
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