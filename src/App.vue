<script setup>
    import { ref, watch } from 'vue';

    const cont = ref(0);

    watch(cont, (newVal, oldVal) => {
        console.log(`La variable cont cambió: ${oldVal} -> ${newVal}`);
    }, { immediate: true }); // Si se desea que el watch se ejecute al cargar se usa immediate
</script>

<template>
    {{ cont }}
    <button type="button" @click="cont++">+</button>
</template>

<style scoped>

</style>