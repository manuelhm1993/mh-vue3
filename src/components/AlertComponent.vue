<script setup>
// Si no se capturan los atributos, vue los asignará al contenedor padre
defineOptions({
    inheritAttrs: false // Anula el comportamiento por defecto de la herencia y no aplica los estilos al contenedor padre
});
</script>

<template>
    <!-- Un componente heredado debe tener un contenedor padre -->
    <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
        <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </div>
</template>

<style scoped></style>