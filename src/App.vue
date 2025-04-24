<script setup>
    const getValue = (e) => console.log(e.target.value);
</script>

<template>
    <!-- El evento siemrpe se recibe en la función manejadora, pero se puede enviar desde el oyente -->
    <!-- <input type="text" v-on:keyup="getValue"> -->

    <!-- Enviando el objeto e (opcional) -->
    <input type="text" v-on:keyup="getValue($event)">
</template>

<style scoped>

</style>