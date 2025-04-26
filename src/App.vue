<script setup>
    import { reactive } from 'vue';

    const paises = reactive([]);

    const agregarPais = (e) => {
        const form = e.target;

        paises.push(form[0].value);

        form.reset();
    };
</script>

<template>
    <form @submit.prevent="agregarPais">
        <input type="text" required>
        <button type="submit">Guardar</button>
    </form>

    <h3 v-if="paises.length > 0">Paises</h3>

    <ul>
        <!-- Importante agregar el key a la lista de items para hacer un seguimiento correcto de vue -->
        <li v-for="(pais, i) in paises" :key="i">{{ pais }}</li>
    </ul>
</template>

<style scoped>

</style>