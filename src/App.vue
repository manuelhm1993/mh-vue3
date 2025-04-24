<script setup>
    import { ref } from 'vue';

    const pais = ref('');
</script>

<template>
    <header>
        <h3>Paises:</h3>
        <p>{{ pais }}</p>
    </header>

    <section>
        <form>
            <select v-model="pais">
                <option value="">Seleccione un país</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Argentina">Argentina</option>
                <option value="Chile">Chile</option>
                <option value="Perú">Perú</option>
            </select>
        </form>
    </section>
</template>

<style scoped>

</style>