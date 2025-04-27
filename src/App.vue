<script setup>
    import { ref } from 'vue';
    import AlertComponent from './components/AlertComponent.vue';

    const app = document.querySelector('#app');
    const botonDark = document.querySelector('button');
    const dark = ref(false);

    const switchDark = () => {
        dark.value = !dark.value;
        
        (dark.value) ? addDark([app, botonDark]) : removeDark([app, botonDark]);
    };

    const addDark = (items) => items.forEach(item => {
        item.classList.add('dark');
    });

    const removeDark = (items) => items.forEach(item => {
        item.classList.remove('dark');
    });
</script>

<template>
    <!-- Pasarle atributos literales al componente -->
    <AlertComponent class="bg-red-600" />

    <button type="button" @click="switchDark" class="btn btn-light">Dark mode {{ (dark) ? 'on' : 'off' }}</button>
</template>

<style scoped>

</style>