<template>

<PageHeader />

<PageMain />

<PageFooter />

</template>

<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';

export default{
  components: {
    PageHeader,
    PageMain,
    PageFooter
  }
}

</script>

<style lang="scss">
@use './styles/general.scss' as *;
</style>