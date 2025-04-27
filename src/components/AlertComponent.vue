<script setup>
    // Dependiendo del valor que se le pase al componente se mostrará un color u otro
    const props = defineProps({
        type: {
            type: String,
            default: 'info'
        }
    });

    /**
     * Lookup table: tabla de búsqueda por mapeo de objetos
     * Esta expresión es un equivalente a un switch case
     * {} equivale a los case
     * [] equivale a la variable de control ()
     * || equivale al default
     * En vanilla js se debe indicar que el {} no es un literal, es decir colocarlos entre paréntesis, así luciría ({})[];
     */
    const alertColor = {
        info: 'text-blue-800  bg-blue-50'
    }[props.type] || 'text-blue-800  bg-blue-50'; 
</script>

<template>
    <!-- Luego de usar el lookup table se vincula la const alertColor con v-bind:class o :class  -->
    <div :class="alertColor" class="p-4 mb-4 text-sm rounded-lg dark:bg-gray-800 dark:text-blue-400" role="alert">
        <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </div>
</template>

<style scoped></style>