<script setup>
    import { ref } from 'vue';

    const text = ref('');
</script>

<template>
    <header>
        <h3>Mensaje:</h3>
    </header>

    <section>
        <form @submit.prevent="">
            <!-- Toda entrada de datos se considera texto, con el modificador number hace la conversión -->
            <input type="text" v-model.number="text">

            <!-- Ahora en lugar de concatenar, hará la suma -->
            <button type="button" @click="console.log(text + 5)">
                Mostrar en consola
            </button>
        </form>
    </section>
</template>

<style scoped>

</style>