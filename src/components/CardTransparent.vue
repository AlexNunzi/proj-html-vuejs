<template>
    <div class="card text-center p-3 rounded-0 border-0 bg-transparent">
        <img :src="`/${image}`" class="card-img-top m-auto mb-3 rounded-circle" :alt="name">
        <div class="card-body">
            <h5 class="card-title ms_fourth-text"> {{ name }} </h5>
            <p class="card-text ms_fs-7 lh-lg"> {{ text }} </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardTransparent',
    props: {
        image: String,
        name: String,
        text: String
    }
}
</script>

<style lang="scss" scoped>
.card-img-top{
    width: 10rem;
}
</style>