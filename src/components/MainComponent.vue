<script setup>
    import NavBar from '@/components/NavBar.vue';
    import FooterComponent from './FooterComponent.vue';
</script>

<template>
    <header>
        <NavBar />
    </header>

    <main class="container">
        <slot></slot>
    </main>

    <footer class="container">
        <FooterComponent />
    </footer>
</template>

<style scoped></style>