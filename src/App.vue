<script setup>
    import DetailCourse from './components/DetailCourse.vue';

    // Data simulada de una API
    const courses = 
    [
        {
            "title": "Vue desde cero",
            "teacher": "Manuel Henriquez",
            "price": 10
        },
        {
            "title": "Laravel desde cero",
            "teacher": "Manuel Henriquez",
            "price": 20
        },
        {
            "title": "PHP desde cero",
            "teacher": "Manuel Henriquez",
            "price": 30
        },
    ];
</script>

<template>
    <!-- Se llama al componente variando la información enviada -->
    <template v-for="course in courses">
        <!-- En caso que sea una variable y no un valor literal, el atributo debe llevar : como sufijo -->
        <DetailCourse :course="course" />
    </template>
</template>

<style scoped>

</style>