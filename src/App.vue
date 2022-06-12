<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components:{
    RouterView,
    Navbar,
    Footer,
  }
};

</script>

<template>
  <div id="app" class="bg-white">
    <Navbar/>
      <div
        class="
          mx-auto
          md:block 
          md:justify-between 
          md:items-center
        "
      >
        <RouterView />
      </div>
      
    <Footer/>
  </div>
</template>

<style>
#app {
  font-family: 'Plus Jakarta Sans', sans-serif;
  box-sizing: border-box;
  margin: 0 auto;
  font-weight: normal;
}
</style>