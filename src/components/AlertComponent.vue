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
        info:    'text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400',
        danger:  'text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400',
        success: 'text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400',
        warning: 'text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-400',
        dark:    'text-gray-800 bg-gray-50 dark:bg-gray-800 dark:text-gray-400'
    }
    [props.type] 
    || 'text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400'; 
</script>

<template>
    <!-- Luego de usar el lookup table se vincula la const alertColor con v-bind:class o :class  -->
    <div :class="alertColor" class="p-4 mb-4 text-sm rounded-lg" role="alert">
        <span class="font-medium">Info alert!</span> 
        <!-- Los slots son contenido extra y variable que se puede pasar a los componentes en lugar de atributos -->
        <slot></slot>
    </div>
</template>

<style scoped>

</style>