<script setup>

</script>

<template>
    <div @click="console.log('Hiciste click desde el div')">
        <p>Hazme click</p>

        <!-- Evitar la propagación del evento -->
        <button type="button" @click.stop="console.log('Hiciste click desde el botón')">
            Hazme click
        </button>
    </div>
</template>

<style scoped>

</style>