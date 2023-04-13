<template>

<PageHeader @selectNavLink="selectPage" />

<PageMain />

<PageFooter @selectNavLink="selectPage" :links="storage.navLinks"/>

<ScrollUp v-show="scrollPositionY > 500" @scrollUp="scrollTop" class="ms_fixedScroll" />

</template>

<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';
import ScrollUp from './components/ScrollUp.vue';
import { storage } from './storage';

export default{
  components: {
    PageHeader,
    PageMain,
    PageFooter,
    ScrollUp
  },
  data() {
    return {
      storage,
      scrollDelay: 0,
      scrollPositionY: 0,
    }
  },
  methods: {
    selectPage(i){
      this.storage.currentPage = i;
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    //  FUNZIONE CHE MEMORIZZA NEL DATA scrollPositionY LA POSIZIONE DI SCOLL PER GESTIRE LA COMPARSA/SCOMPARSA
    //  DEL COMPONENT ScrollUp, CONDIZIONE if E setTimeout SERVONO A LIMITARE IL NUMERO DI AGGIORNAMENTI
    scrollCheck() {
        if (this.scrollDelay) return;
        this.scrollDelay = setTimeout(() => {
          this.scrollPositionY = window.scrollY;
          clearTimeout(this.scrollDelay);
          this.scrollDelay = 0;
        }, 100);
      },
  },
  mounted() {
      window.addEventListener('scroll', this.scrollCheck);
  },
}

</script>

<style lang="scss">
@use './styles/general.scss' as *;
</style>