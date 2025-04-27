import { createRouter, createWebHistory } from "vue-router";

// Importar las vistas - @ es un alias vite que apunta a src
import Home from "@/views/HomeView.vue";

// Definir las rutas
const routes = [
    { 
        path: "/", // Ruta o url
        name: "home", // Nombre (igual que en laravel)
        component: Home // Componente o vista (el único que se importa en eager loader es el Home)
    },
    { 
        path: "/about", 
        name: "about", 
        component: () => import('@/views/AboutView.vue') // Importar los componentes en modo lazy loader
    }
];

// Crear el objeto router
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

// Exportar el objeto router
export default router;
