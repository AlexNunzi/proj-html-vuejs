<template>
    <nav class="container d-flex justify-content-between align-items-center py-3">
        <LogoComp @selectNavLink="$emit ('selectNavLink', 0)" />
        <ul class="list-unstyled m-0">
            <li class="d-inline-block mx-3" v-for="(element, index) in links">
                <a class="ms_navLink ms_primary-text text-decoration-none" @click="$emit ('selectNavLink', index)" :class="lastChildButton(index), currentPage(index)" :href="element.link"> {{ element.name }} </a>
            </li>
        </ul>
    </nav>
</template>

<script>
import { storage } from '../storage.js';
import LogoComp from './LogoComp.vue';
export default {
    name: 'NavBar',
    components: {
        LogoComp
    },
    data() {
        return {
            storage
        }
    },
    props: {
        links: Array
    },
    emits: ["selectNavLink"],
    methods: {
        lastChildButton(i){
            return i == storage.navLinks.length - 1 ? 'btn ms_custom-btn' : '';
        },
        currentPage(i){
            return i == this.storage.currentPage ? 'selected' : '';
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

</style>