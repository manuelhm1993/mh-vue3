<script setup>
    import MyComponente from './components/MyComponente.vue';
</script>

<template>
    <!-- El componente se invoca acomo cualquier etiqueta, puede ser con autocierre o con apertura y cierre -->
    <template v-for="i in 4">
        <MyComponente />
        <br>
    </template>
</template>

<style scoped>

</style>