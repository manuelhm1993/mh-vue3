<script setup>
    // Si no se capturan los atributos, vue los asignará al contenedor padre
    defineOptions({
        inheritAttrs: false // Anula el comportamiento por defecto de la herencia y no aplica los estilos al contenedor padre
    });
</script>

<template>
    <!-- Un componente heredado debe tener un contenedor padre -->
    <div class="text-white">
        <!-- Vincula los atributos del contenedor padre en este elemento -->
        <div v-bind="$attrs">
            Hola mundo
        </div>
    </div>
</template>

<style scoped>

</style>