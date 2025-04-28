<script setup>
    import MainComponent from '@/components/MainComponent.vue';
    import { computed } from 'vue';
    
    // Invocar el objeto route
    import { useRoute } from 'vue-router';

    // Instanciar el objeto route
    const route = useRoute();

    // Obtener el id de la ruta
    const courseId = computed(() => route.params.courseId);
</script>

<template>
    <MainComponent>
        <h1 class="mb-8 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">Bienvenido al curso: {{ courseId }}
            <!-- Recuperar el parámetro desde el template -->
            <!-- {{ $route.params.courseId }} -->
        </h1>

        <section>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet sint corporis modi sit, commodi nisi eveniet ratione eaque nobis, possimus id, ut laudantium molestias ducimus reiciendis beatae qui! Autem, nisi.</p>
        </section>
    </MainComponent>
</template>

<style scoped>

</style>