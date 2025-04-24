<script setup>
    import { ref } from 'vue';

    const texto = ref('');

    const reset = (form) => {
        form.reset();
        texto.value = '';
    };

    const enviar = (e) => {
        console.log(texto.value);
        reset(e.target);
    };
</script>

<template>
    <header v-show="texto">
        <p>Mensaje:</p>
        <p class="salto-linea">{{ texto }}</p>
    </header>

    <section>
        <form @submit.prevent="enviar">
            <textarea v-model="texto"></textarea>
            <div>
                <button type="submit">
                    Enviar
                </button>
            </div>
        </form>
    </section>
</template>

<style scoped>
    .salto-linea {
        /* Forma de aplicar salto de línea con css en caso de existir */
        white-space: pre-line;
    }
</style>