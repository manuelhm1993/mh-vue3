<script setup>
    import NavBar from '@/components/NavBar.vue';
    import FooterComponent from './FooterComponent.vue';
</script>

<template>
    <header>
        <NavBar />
    </header>

    <main class="max-w-screen-xl flex flex-wrap mx-auto p-4">
        <slot></slot>
    </main>

    <footer class="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
        <FooterComponent />
    </footer>
</template>

<style scoped></style>