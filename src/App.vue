<script setup>
    // Los whatches son funciones que se ejecutan cuando las propiedades reactivas cambian
    import { ref, reactive, watch } from 'vue';

    // El watch puede ser utilizado tanto con primitivos ref u objetos reactive
    const user = reactive({
        name: 'Manuel',
        age: 31
    });

    // Para que el watch pueda hacer seguimiento de la propiedad requerida debe ser devuelta por un callback
    watch(() => user.age, (newVal, oldVal) => {
        console.log(`La edad del usuario cambió cambió: ${oldVal} -> ${newVal}`);
    });
</script>

<template>
    {{ user.age }}
    <button type="button" @click="user.age++">+</button>
</template>

<style scoped>

</style>