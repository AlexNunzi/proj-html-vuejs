<template>
    <div class="text-center">
        <h6 class="fw-bold ms_secondary-text ms_fs-7 text-uppercase">{{ overtitle }}</h6>
        <h2 class="fw-bold ms_primary-text ms_tertiary-text px-2 pb-3 mb-3">{{ title }}</h2>
    </div>
</template>

<script>
export default {
    name: 'HeadingSection',
    props: {
        title: String,
        overtitle: String
    }
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.ms_mid-card h6,
.ms_mid-card h2{
    color: $pure-white;
}

.ms_mid-card h2{
    border-bottom: 1px solid lighten($primary-color, 20);
    display: inline-block;
}
</style>