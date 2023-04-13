<template>
    <section class="ms_secondary-bg py-5 text-center" id="ms_free-quote">
        <a class="ms_GetFreeQuote ms_text-white text-decoration-none" href="#GetFreeQuote">
            <font-awesome-icon class="me-2" icon="fa-regular fa-paper-plane" />
            GET A FREE QUOTE ONLINE NOW!
        </a>
    </section>
</template>

<script>
export default {
    name: 'GetFreeQuote'
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.ms_GetFreeQuote:hover{
    color: darken($white, 20);
}
</style>