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
            <!-- Recordar el key entre componentes -->
            <template v-for="i in 8" :key="i">
                <!-- Pasarle un parámetro a la ruta con nombre -->
                <RouterLink :to="{ name: 'courses-show', params: { courseId: i } }" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Curso {{ i }}</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, rem veritatis! Ipsum velit rerum autem ut ab sapiente? Laudantium, maiores?
                    </p>
                </RouterLink>
            </template>
        </div>
    </MainComponent>
</template>

<style scoped></style>