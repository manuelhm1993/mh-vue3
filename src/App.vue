<script setup>
    import { ref } from 'vue';

    const estado = ref('Activo');
</script>

<template>
    <header>
        <h3>Estado seleccionado:</h3>
        <p>{{ estado }}</p>
    </header>

    <section>
        <form>
            <label>
                <input type="radio" value="Activo" v-model="estado">
                Activo
            </label>

            <label>
                <input type="radio" value="Inactivo" v-model="estado">
                Inactivo
            </label>
        </form>
    </section>
</template>

<style scoped>

</style>