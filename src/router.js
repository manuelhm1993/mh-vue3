// src/router.js - Archivo de rutas
import { createRouter, createWebHistory } from "vue-router";

// Importar las vistas
import Home from "./views/HomeView.vue";
import About from "./views/AboutView.vue";

// Definir las rutas
const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About }
];

// Crear el objeto router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Exportar el objeto router
export default router;
