<template>

<PageHeader @selectNavLink="selectPage"/>

<PageMain />

<PageFooter />

</template>

<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';
import { storage } from './storage';

export default{
  components: {
    PageHeader,
    PageMain,
    PageFooter
  },
  data() {
    return {
      storage
    }
  },
  methods: {
    selectPage(i){
      this.storage.currentPage = i;
    }
  }
}

</script>

<style lang="scss">
@use './styles/general.scss' as *;
</style>