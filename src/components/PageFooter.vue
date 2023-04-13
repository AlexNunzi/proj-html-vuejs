<template>
    <section id="ms_footer-top" class="py-5">
        <div class="container">
            <ul class="row list-unstyled">
                <li class="col-4 pe-5">
                    <h6 class="text-uppercase fw-bol mb-4 fw-bold">About</h6>
                    <p class="mb-5 ms_fs-7 lh-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus necessitatibus tempore ducimus fugiat earum ad optio perspiciatis porro fuga! Dolorum, temporibus ducimus fugiat earum ad optio.</p>
                    <LogoComp @selectNavLink="emitClick" />
                </li>
                <li class="col-4 pe-5">
                    <h6 class="text-uppercase fw-bol mb-4 fw-bold">Avada movers</h6>
                    <ul class="list-unstyled">
                        <li class="my-3" v-show="index != 3 && index != 5" v-for="(element, index) in links">
                            <a class="text-decoration-none ms_primary-text ms_navLink ms_fs-7" :class="currentPage(index)" @click="$emit ('selectNavLink', index)" :href="element.link"> > {{ element.name }} </a>
                        </li> 
                    </ul>
                </li>
                <li class="col-4 pe-5">
                    <h6 class="text-uppercase fw-bol mb-4 fw-bold">Recent posts</h6>
                    <ul class="list-unstyled">
                        <li class="my-3" v-for="(element, index) in storage.recentPost">
                            <a class="text-decoration-none ms_primary-text ms_navLink ms_fs-7" :href="element.link"> > {{ element.name }} </a>
                        </li> 
                    </ul>
                </li>
            </ul>
        </div>
    </section>
    <div class="ms_primary-bg">
        <FooterBottom />
    </div>
</template>

<script>
import { storage } from '../storage.js';
import LogoComp from './LogoComp.vue';
import FooterBottom from './FooterBottom.vue';
export default {
    name: 'PageFooter',
    components: {
        LogoComp,
        FooterBottom
    },
    data() {
        return {
            storage
        }
    },
    props: {
        links: Array
    },
    methods: {
        currentPage(i){
            return i == this.storage.currentPage ? 'selected' : '';
        },
        emitClick(index){
            this.$emit('selectNavLink', index);
        }
    },
    emits: ["selectNavLink"]
}

</script>

<style scoped>

</style>