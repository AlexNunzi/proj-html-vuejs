<template>
    <section class="ms_tertiary-bg ms_section-padding">
        <div class="ms_container-mid text-center">
            <HeadingSection title="Award Winning Moving Company" overtitle="Headache free" />
            <p class="my-4 ms_fs-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure labore magnam commodi alias. Ab placeat molestias, repellat facere dignissimos voluptas? Nisi, repellat sunt! Corporis facere aliquid quae adipisci ducimus ex, quos saepe doloribus qui.</p>
            <a class="btn ms_custom-btn" href="#">Read our testimonials</a>
        </div>
    </section>

    <section class="ms_section-padding ms_pure-white-bg">
        <div class="container">
            <HeadingSection title="Full-Service Solution" overtitle="We are a professional" />
            <div class="row justify-content-center">
                <div v-for="element in storage.solutions" class="col-3 p-3">
                    <CardSolid :image="element.img" :title="element.title" :text="element.text" :link="element.link" />
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import { storage } from '../storage.js';
import HeadingSection from './HeadingSection.vue';
import CardSolid from './CardSolid.vue';

export default {
    name: 'PageMain',
    components: {
        HeadingSection,
        CardSolid
    },
    data(){
        return {
            storage
        }
    }
}

</script>

<style scoped>

</style>