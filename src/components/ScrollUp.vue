<template>
    <div @click="$emit ('scrollUp')" class="scropp-up px-2 rounded-top ms_scroll-up-bg ms_text-white">
        <font-awesome-icon icon="fa-solid fa-chevron-up" />
    </div>
</template>

<script>
export default {
    name: 'ScrollUp'
}
</script>

<style lang="scss" scoped>
.scropp-up:hover{
    cursor: pointer;
}
</style>