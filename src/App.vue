<script setup>
    import { ref } from 'vue';

    const letras = ref([]);

    const reset = (form) => {
        form.reset();
        letras.value = [];
    };

    const enviar = (e) => {
        console.log(letras.value);
        reset(e.target);
    };
</script>

<template>
    <header v-show="letras.length > 0">
        <p>Letras seleccionadas:</p>
        <p>{{ letras }}</p>
    </header>

    <section>
        <form @submit.prevent="enviar">
            <label>
                <input type="checkbox" value="A" v-model="letras">
                A
            </label>

            <label>
                <input type="checkbox" value="B" v-model="letras">
                B
            </label>

            <label>
                <input type="checkbox" value="C" v-model="letras">
                C
            </label>
        </form>
    </section>
</template>

<style scoped>

</style>