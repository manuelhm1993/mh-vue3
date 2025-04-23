<script setup>
    const alumnos = [
        {nombre: 'Manuel', edad: 31},
        {nombre: 'Luna', edad: 27},
        {nombre: 'Mariandry', edad: 24},
        {nombre: 'Santiago', edad: 24},
        {nombre: 'Paola', edad: 30}
    ];
</script>

<template>
    <ul>
        <!-- Desestructurar el objeto -->
        <li v-for="({ nombre, edad }, i) in alumnos">
            {{ i + 1 }}. {{ nombre }} - {{ edad }}
        </li>
    </ul>
</template>

<style scoped>
    li {
        list-style: none;
    }
</style>
