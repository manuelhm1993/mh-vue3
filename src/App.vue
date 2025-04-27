<script setup>
    import DetailCourse from './components/DetailCourse.vue';

    const course = {
        title: 'Vue desde cero',
        professor: 'Manuel Henriquez',
        price: 10
    };
</script>

<template>
    <!-- Para pasarle información adicional al componente se usan atributos con nombre -->
    <DetailCourse course="Vue desde cero" />
</template>

<style scoped>

</style>