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
        <!-- Renderizar una lista con un bucle foreach -->
        <li v-for="(alumno, i) in alumnos">
            <!-- Recuperar el índice de un foreach se agrega un paréntesis y un segundo parámetro -->
            {{ i + 1 }}. {{ alumno.nombre }} - {{ alumno.edad }}
        </li>
    </ul>
</template>

<style scoped>
    
</style>
