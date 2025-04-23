<!-- Estructura de un componente Vue -->
<!--  -->
<!-- Script - Tiene la lógica js (opcional) -->
<!-- <script setup>
    // El atributo setup indica que se está trabajando con composition y sintaxis abreviada
    const msg = 'Hola mundo';
</script> -->

<!-- Si no se coloca el atrubuto setup se debe definir la lófica dentro de la función setup y exportar -->
<script>
    export default {
        setup() {
            const msg = 'Hola mundo';

            const saludo = () => console.log('Hola desde vue3');

            return {
                msg, saludo
            };
        }
    }
</script>

<!-- Template - Tiene el código html que será dinámico (obligatorio) -->
<template>
    <!-- Los atributos o parámetros se muestran igual que en blade con la sintaxis {{  }} -->
    <h1>{{ msg }}</h1>
    {{ saludo() }}
</template>

<!-- Style - Define los estilos css aplicados al template (opcional) -->
<style scoped>
    /* El atrubuto scoped indica que los estilos de este componente solo se aplicarán a este template */
    h1 { 
        color: #06f;
        font-weight: 600;
        text-transform: uppercase;
    }
</style>
