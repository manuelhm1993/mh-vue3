<script setup>
    // Definir o recuperar las variables 
    const { course } = defineProps({
        course: Object
    });

    // Recibir el enlace de v-model del componente padre (activa el enlace bidireccional)
    const cont = defineModel('cont', {
        type: Number,
        default: 0
    }); // Para evitar errores o advertencias es recomendable pasar el nombre del objeto y recibirlo en defineModel

    // Una vez recibido como modelo el objeto cont, se puede modificar directamente en el componente hijo
    const buttonClick = (e) => cont.value--;
</script>

<template>
    <h2>
        {{ course.title }}
        <input type="text" v-model.number="cont">
    </h2>

    <p>Profesor: {{ course.teacher }}</p>
    <p>Costo: ${{ course.price }}</p>

    <button type="button" @click="buttonClick">
        Hazme click
    </button>
</template>

<style scoped>

</style>