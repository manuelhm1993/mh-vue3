<script setup>
    // Permite la inyección de dependencias, un equivalente al model binding de laravel
    import { inject } from 'vue';

    // Se crea una constante o variable que almacenará la variable que se inyecta
    const nombre = inject('nombre');
</script>

<template>
    <div class="bg-yellow-500 p-8">
        <p class="text-2xl">
            Hola desde el componente 3
        </p>

        <p>
            {{ nombre }}
        </p>
    </div>
</template>

<style scoped>

</style>