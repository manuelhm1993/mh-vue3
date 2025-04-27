<script setup>
    // Definit el objeto emisor de eventos personalizados (forma correcta de hacerlo)
    const emit = defineEmits(['decrementarCont']);

    // Definir o recuperar las variables 
    const { course, cont } = defineProps({
        course: Object,
        cont: {
            type: Number,
            default: 0
        }
    });

    // Función para emitir un evento
    const buttonClick = () => emit('decrementarCont', 2);
</script>

<template>
    <h2>{{ course.title }} ({{ cont }})</h2>
    <p>Profesor: {{ course.teacher }}</p>
    <p>Costo: ${{ course.price }}</p>

    <!-- Se puede emitir un evento desde una función manejadora -->
    <button type="button" @click="buttonClick">
        Hazme click
    </button>
</template>

<style scoped>

</style>