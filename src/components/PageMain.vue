<template>
    <main>
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
                    <div v-for="element in storage.solutions" class="col-4 p-4">
                        <CardSolid :image="element.img" :title="element.title" :text="element.text" :link="element.link" />
                    </div>
                </div>
            </div>
        </section>
    
        <section id="ms_move-with-ease">
            <div class="ms_section-padding container text-end">
                <div class="ms_mid-card ms_primary-bg text-center p-5 d-inline-block">
                    <HeadingSection title="Move With Ease" overtitle="We remove headache from moving" />
                    <p class="ms_fs-7 ms_text-pure-white lh-lg mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati sit inventore ullam optio earum, eum doloribus ducimus, iusto, placeat consequatur commodi distinctio culpa adipisci.</p>
                    <a class="btn ms_custom-btn" href="#GetFreeQuote">Get a free quote now</a>
                </div>
    
            </div>
        </section>

        <section id="ms_testimonials" class="shadow-lg">
            <div class="ms_section-padding container text-center">
                <HeadingSection title="Testimonials" overtitle="Happy customers" />
                <div class="row justify-content-center">
                    <div v-for="element in storage.testimonials" class="col-4 p-3">
                        <CardTransparent :image="element.img" :name="element.name" :text="element.text" />
                    </div>
                </div>
                <a href="#" class="btn ms_custom-btn">Read more testimonials</a>
            </div>
        </section>

        <section id="ms_request-quote">
            <div class="ms_section-padding ms_container-mid text-center">
                <HeadingSection title="Request A Free Quote" />
                <p class="lh-lg ms_fs-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cumque provident beatae dolor, et blanditiis magni? Odit ex quidem suscipit quibusdam.</p>
                <a href="#" class="btn ms_custom-btn">Click here</a>
            </div>
        </section>
    </main>

</template>

<script>
import { storage } from '../storage.js';
import HeadingSection from './HeadingSection.vue';
import CardSolid from './CardSolid.vue';
import CardTransparent from './CardTransparent.vue';

export default {
    name: 'PageMain',
    components: {
        HeadingSection,
        CardSolid,
        CardTransparent
    },
    data(){
        return {
            storage
        }
    }
}

</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.ms_mid-card{
    width: 40%;
    border: 15px solid darken($primary-color, 7.5);
}

#ms_move-with-ease{
    background-image: url(/avada-movers-movewithease-background-new.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

#ms_testimonials{
    background-image: url(/avada-movers-testimonial-background.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

#ms_request-quote{
    background-image: url(/avada-movers-request-quote-background.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-bottom: 1rem solid $primary-color;
}
</style>