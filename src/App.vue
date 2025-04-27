<script setup>
    import AlertComponent from './components/AlertComponent.vue';
    import DarkModeComponent from './components/DarkModeComponent.vue';
</script>

<template>
    <!-- Para cargar el slot se debe usar apertura y cierre de etiqueta -->
    <AlertComponent type="danger">
        Hola desde el alert
    </AlertComponent>
    
    <DarkModeComponent />
</template>

<style scoped>

</style>