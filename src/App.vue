<script setup>
    const msg = '<h1>Hola mundo</h1>';
</script>

<template>
    <!-- Interpolación, mostrar el contenido de una variable js en html como texto plano {{  }} -->
    <!-- Si se quiere renderizar contenido html se usa la directiva v-html equivalente a {!!  !!} -->
    <header v-html="msg"></header>
</template>

<!-- Para darle estilos a elementos html renderizados se debe eliminar el atributo scoped -->
<style>
    h1 { 
        color: #06f;
        font-weight: 600;
        text-transform: uppercase;
    }
</style>
