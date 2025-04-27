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

    const cont = ref(5);

    // Emit pasará en orden los parámetros a la función manejadora
    const decrementar = (i) => cont.value -= i;
</script>

<template>
    <input type="text" v-model.number="cont">
    
    <template v-for="course in courses">
        <!-- Si el atributo se llama igual que la variable, se puede simplificar la llamada :cont -->
        <DetailCourse 
            :course="course" 
            :cont 
            @decrementarCont="decrementar"
        />  <!-- Un evento emitido o personalizado se escucha igual que un evento normal -->
    </template>
</template>

<style scoped>

</style>