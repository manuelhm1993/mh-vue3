<script setup>
    const alumnos = [
        {
            nombre: 'Manuel', 
            edad: 31,
            cursos: [
                {
                    nombre: 'Matemáticas',
                    nota: 20,
                },
                {
                    nombre: 'Física',
                    nota: 15,
                },
                {
                    nombre: 'Química',
                    nota: 18,
                },
            ],
        },
        {
            nombre: 'Luna', 
            edad: 27,
            cursos: [
                {
                    nombre: 'Matemáticas',
                    nota: 20,
                },
                {
                    nombre: 'Física',
                    nota: 15,
                },
                {
                    nombre: 'Química',
                    nota: 18,
                },
            ],
        },
        {
            nombre: 'Mariandry', 
            edad: 24,
            cursos: [
                {
                    nombre: 'Matemáticas',
                    nota: 20,
                },
                {
                    nombre: 'Física',
                    nota: 15,
                },
                {
                    nombre: 'Química',
                    nota: 18,
                },
            ],
        },
        {
            nombre: 'Santiago', 
            edad: 24,
            cursos: [
                {
                    nombre: 'Matemáticas',
                    nota: 20,
                },
                {
                    nombre: 'Física',
                    nota: 15,
                },
                {
                    nombre: 'Química',
                    nota: 18,
                },
            ],
        },
        {
            nombre: 'Paola', 
            edad: 30,
            cursos: [
                {
                    nombre: 'Matemáticas',
                    nota: 20,
                },
                {
                    nombre: 'Física',
                    nota: 15,
                },
                {
                    nombre: 'Química',
                    nota: 18,
                },
            ],
        },
    ];
</script>

<template>
    <ul>
        <!-- Desestructurar el objeto -->
        <li v-for="({ nombre, edad, cursos }, i) in alumnos">
            <p>{{ i + 1 }}. {{ nombre }} - {{ edad }}</p>
            <ul>
                <li v-for="(curso, j) in cursos">
                    <!-- Uso de template strings dentro de la interpolación vue -->
                    {{ `${i + 1}.${j + 1}.` }} {{ curso.nombre }} - {{ curso.nota }}
                </li>
            </ul>
        </li>
    </ul>
</template>

<style scoped>
    li {
        list-style: none;
    }
</style>
