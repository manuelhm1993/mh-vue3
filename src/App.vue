<script setup>
    import AlertComponent from './components/AlertComponent.vue';
    import DarkModeComponent from './components/DarkModeComponent.vue';
</script>

<template>
    <!-- Para cargar el slot se debe usar apertura y cierre de etiqueta -->
    <AlertComponent type="danger">
        <!-- Contenido del slot secundario, se especifica su nombre -->
        <template v-slot:title> <!-- Sintaxis alternativa: <template #title> -->
            Alert danger
        </template>

        <!-- Contenido del slot principal -->
        Hola desde el alert
    </AlertComponent>
    
    <DarkModeComponent />
</template>

<style scoped>

</style>