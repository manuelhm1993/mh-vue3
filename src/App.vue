<script setup>
    import { ref } from 'vue';
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

    const prueba = ref(5);
    const disabled = true;
</script>

<template>
    <input type="text" v-model="prueba">
    
    <!-- Se llama al componente variando la información enviada -->
    <template v-for="course in courses">
        <!-- Si el atributo se llama igual que la variable, se puede simplificar la llamada :prueba -->
        <DetailCourse :course="course" :prueba :disabled />
    </template>
</template>

<style scoped>

</style>