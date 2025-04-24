<script setup>
    const alumnos = [
        {
            id: 1,
            nombre: 'Manuel', 
            edad: 31,
        },
        {
            id: 2,
            nombre: 'Luna', 
            edad: 27,
        },
        {
            id: 3,
            nombre: 'Mariandry', 
            edad: 24,
        },
        {
            id: 4,
            nombre: 'Santiago', 
            edad: 24,
        },
        {
            id: 5,
            nombre: 'Paola', 
            edad: 30,
        },
    ];
</script>

<template>
    <ul>
        <!-- Cuando se usen CRUDs si no se identifican los items podrá fallar, en ese caso un id es necesario -->
        <li v-for="alumno in alumnos" :key="alumno.id">
            {{ alumno.nombre }} - {{ alumno.edad }}
        </li>
    </ul>
</template>

<style scoped>

</style>