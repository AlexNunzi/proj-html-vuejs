<template>
    <div class="text-center">
        <h6 class="fw-bold ms_secondary-text text-uppercase">{{ overtitle }}</h6>
        <h2 class="fw-bold ms_primary-text ms_tertiary-text">{{ title }}</h2>
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

<style>

</style>