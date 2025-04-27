<script setup>
    import { ref } from 'vue';

    const app = document.querySelector("#app");
    const dark = ref(false);
    let botonDark = null;

    const switchDark = () => {
        dark.value = !dark.value;
        dark.value ? addDark([app, botonDark]) : removeDark([app, botonDark]);
    };

    const addDark = (items) =>
        items.forEach((item) => {
            item.classList.add("dark");
        });

    const removeDark = (items) => {
        items.forEach((item) => {
            item.classList.remove("dark");
        });
    }

    document.addEventListener('DOMContentLoaded', () => botonDark = document.querySelector("button"));
</script>

<template>
    <button type="button" @click="switchDark" class="btn btn-light">Dark mode {{ (dark) ? 'on' : 'off' }}</button>
</template>

<style scoped>

</style>