<script setup>
    import { ref } from 'vue';

    // Define los enlaces dinámicos para las vistas sin recargar
    import { RouterLink } from 'vue-router';

    // Variable para controlar el estado del menú
    const isOpen = ref(false);

    // Función para alternar el menú
    const toggleMenu = () => isOpen.value = !isOpen.value;

    // Función para destacar la ruta activa
    const activeMenu = (isActive) => isActive ? 'menu-active' : 'menu';
</script>

<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap items-center justify-between container">

            <RouterLink to="/">
                <img src="/logo.jpg" class="h-8" alt="MHenriquez Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MHenriquez</span>
            </RouterLink>

            <!-- Botón Hamburguesa -->
            <button @click="toggleMenu" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" :aria-expanded="isOpen.toString()">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>

            <!-- Menú Responsive -->
            <div :class="[isOpen ? 'block' : 'hidden', 'w-full md:block md:w-auto']" id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 
        md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 
        md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <RouterLink :to="{ name: 'home' }" v-slot="{ isActive }">
                            <span :class="activeMenu(isActive)">
                                Inicio
                            </span>
                        </RouterLink>
                    </li>

                    <li>
                        <!-- Uso de rutas con nombre (igual que laravel) -->
                        <RouterLink :to="{ name: 'about' }" v-slot="{ isActive }">
                            <span :class="activeMenu(isActive)">
                                Acerca de
                            </span>
                        </RouterLink>
                    </li>

                    <li>
                        <RouterLink :to="{ name: 'courses-index' }" v-slot="{ isActive }">
                            <span :class="activeMenu(isActive)">
                                Cursos
                            </span>
                        </RouterLink>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
</template>

<style scoped></style>