<script setup>
    import MainComponent from '@/components/MainComponent.vue';
    import { RouterLink } from 'vue-router';
</script>

<template>
    <MainComponent>
        <h1
            class="mb-8 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
            Esta es la página de cursos
        </h1>

        <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <template v-for="i in 8" :key="i">
                <RouterLink :to="`/courses/${i}`" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </RouterLink>
            </template>
        </div>
    </MainComponent>
</template>

<style scoped></style>