<script setup>
    // Los whatches son funciones que se ejecutan cuando las propiedades reactivas cambian
    import { ref, reactive, watch } from 'vue';

    // El watch puede ser utilizado tanto con primitivos ref u objetos reactive
    const user = reactive({
        name: 'Manuel',
        age: 31,
        hijo: {
            name: 'Alucard',
            age: 1
        }
    });

    // Para que el watch pueda hacer seguimiento de la propiedad requerida debe ser devuelta por un callback
    watch(() => user.hijo, (newVal, oldVal) => {
        console.log(`La edad del usuario cambió cambió: ${oldVal.age} -> ${newVal.age}`);
    }, { deep: true }); // El tercer parámetro indica que se deben escuchar los cambios de los objetos hijos
</script>

<template>
    {{ user.hijo.age }}
    <button type="button" @click="user.hijo.age++">+</button>
</template>

<style scoped>

</style>