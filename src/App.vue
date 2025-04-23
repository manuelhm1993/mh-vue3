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
        <li v-for="alumno in alumnos">
            <p>{{ alumno.nombre }} - {{ alumno.edad }}</p>
            <ul>
                <!-- Uso de template para poder hacer la validación del if -->
                <template v-for="curso in alumno.cursos">
                    <li v-if="curso.nota >= 18">
                        {{ curso.nombre }} - {{ curso.nota }}
                    </li>
                </template>
            </ul>
        </li>
    </ul>
</template>

<style scoped>

</style>
