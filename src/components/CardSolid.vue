<template>
    <div class="ms_tertiary-bg card text-center p-3 rounded-0 border-0">
        <img :src="`/${image}`" class="card-img-top mb-3" :alt="title">
        <div class="ms_pure-white-bg card-body">
            <h5 class="card-title ms_fourth-text"> {{ title }} </h5>
            <p class="card-text ms_fs-7 lh-lg"> {{ text }} </p>
            <a :href="link" class="btn ms_custom-btn text-uppercase fw-bold">Read more</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardSolid',
    props: {
        image: String,
        title: String,
        text: String,
        link: String
    }
}
</script>

<style lang="scss" scoped>

</style>