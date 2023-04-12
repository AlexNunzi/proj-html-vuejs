<template>
    <nav class="container d-flex justify-content-between align-items-center py-3">
        <a :href="storage.navLinks[0].link">
            <img id="ms_logo" src="/public/avada-movers-retinalogo.png" alt="Logo">
        </a>
        <ul class="list-unstyled m-0">
            <li class="d-inline-block mx-3" v-for="(element, index) in storage.navLinks">
                <a class="ms_navLink ms_primary-text text-decoration-none fw-bold fs-6" @click="$emit ('selectNavLink', index)" :class="lastChildButton(index), currentPage(index)" :href="element.link"> {{ element.name }} </a>
            </li>
        </ul>
    </nav>
</template>

<script>
import { storage } from '../storage.js';
export default {
    name: 'NavBar',
    data() {
        return {
            storage
        }
    },
    methods: {
        lastChildButton(i){
            return i == storage.navLinks.length - 1 ? 'btn btn-primary rounded-5 text-white text-uppercase' : '';
        },
        currentPage(i){
            return i == this.storage.currentPage ? 'selected' : '';
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

#ms_logo{
    height: 3.5rem;
}

.selected{
    color: $primary-color;
}

.ms_navLink:hover{
    color: darken($primary-color, 10);
}
</style>