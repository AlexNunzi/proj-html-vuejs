<template>
    <a :href="storage.navLinks[0].link" @click="$emit ('selectNavLink', 0)">
        <img class="ms_logo" src="/public/avada-movers-retinalogo.png" alt="Logo">
    </a>
</template>

<script>
import { storage } from '../storage.js';

export default {
    name: 'LogoComp',
    data() {
        return {
            storage
        }
    },
    emits: ["selectNavLink"]
}
</script>

<style lang="scss" scoped>
.ms_logo{
    height: 3.5rem;
}
</style>