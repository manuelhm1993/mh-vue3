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
        path: "/nosotros", 
        name: "about", 
        component: () => import('@/views/AboutView.vue') // Importar los componentes en modo lazy loader
    },
    {
        path: '/cursos', //Equivalente a grupos en laravel
        children: [
            {
                path: "",
                name: "courses-index",
                component: () => import("@/views/courses/CoursesView.vue")
            },
            {
                path: ":courseId(\\d+)",
                name: "courses-show",
                component: () => import("@/views/courses/CoursesShowView.vue")
            }
        ]
    },
    // La ruta de manejo de errores siempre va al final
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: () => import('@/components/NotFound.vue') 
    }
];

// Crear el objeto router
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

// Exportar el objeto router
export default router;
