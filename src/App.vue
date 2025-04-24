<script setup>
    import { ref } from 'vue';

    const estado = ref(1);
</script>

<template>
    <header>
        <h3>Estado seleccionado:</h3>
        <p>{{ (estado == 1) ? 'Activo' : 'Inactivo' }}</p>
    </header>

    <section>
        <form>
            <label>
                <input type="radio" value="1" v-model="estado" checked>
                Activo
            </label>

            <label>
                <input type="radio" value="0" v-model="estado">
                Inactivo
            </label>
        </form>
    </section>
</template>

<style scoped>

</style>