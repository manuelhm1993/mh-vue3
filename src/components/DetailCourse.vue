<script setup>
    const { course, cont } = defineProps({
        course: Object,
        cont: {
            type: Number,
            default: 0
        }
    });
</script>

<template>
    <h2>{{ course.title }} - {{ cont }}</h2>
    <p>Profesor: {{ course.teacher }}</p>
    <p>Costo: ${{ course.price }}</p>

    <!-- Para afectar objetos del componente padre es necesario emitir eventos desde el componente hijo -->
    <button type="button" @click="$emit('decrementarCont', 2)">
        Hazme click
    </button>
</template>

<style scoped>

</style>