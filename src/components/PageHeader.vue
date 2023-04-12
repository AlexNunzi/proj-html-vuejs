<template>
    <header>
        <HeadTop />
        <NavBar @selectNavLink="emitClick"/>
        <div class="ms_head-content text-center">
            <h6 class="fw-bold ms_secondary-text ms_fs-7">MOVING WITHOUT THE HASSLE</h6>
            <h1 class="ms_primary-text fw-bold ms_fs-1">WE MAKE IT SIMPLE</h1>
            <h6 class="fw-bold ms_secondary-text ms_fs-7">PROFESSIONAL SERVICE WITH QUALITY AND CUSTOMER SATISFACTION</h6>
        </div>
        <GetFreeQuote />
    </header>
</template>

<script>

import HeadTop from './HeadTop.vue';
import NavBar from './NavBar.vue';
import GetFreeQuote from './GetFreeQuote.vue';

export default {
    name: 'PageHeader',
    components: {
        HeadTop,
        NavBar,
        GetFreeQuote
    },
    methods: {
        emitClick(index){
            this.$emit('selectNavLink', index);
        }
    }
}

</script>

<style scoped>
header{
    background-image: url('/avada-movers-homeherobackground-final.jpg');
    background-position: top;
    background-size: cover;
}
.ms_head-content{
    margin: 8rem auto;
}
</style>