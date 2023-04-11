<template>
    <a class="text-white m-2" v-for="element in storage.socialLinks" :href="element.link">
        <font-awesome-icon :icon="element.icon" />
    </a>
</template>

<script>
import { storage } from '../storage.js';

export default {
    name: 'SocialLinks',
    data() {
        return {
            storage
        }
    }
}

</script>

<style scoped>

</style>