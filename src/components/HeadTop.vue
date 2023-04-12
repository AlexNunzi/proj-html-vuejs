<template>
    <div class="ms_primary-bg text-white">
        <div class="container d-flex justify-content-between align-items-center py-2">
            <div class="ms_contact-phone">
                <font-awesome-icon class="me-3" icon="fa-solid fa-phone" />
                Call us for a Free Quote: 1.800.555.6789
            </div>
            <div>
                <SocialLinks />
            </div>
        </div>
    </div>
</template>

<script>
import SocialLinks from './SocialLinks.vue';

export default {
    name: 'HeadTop',
    components: {
        SocialLinks
    }
}
</script>

<style scoped>
.ms_contact-phone{
    font-size: 0.75rem;
}
</style>