<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div id="app" class="bg-white">
    <Navbar/>
      <div
        class="
          container
          px-6
          mx-auto
          md:block 
          md:justify-between 
          md:items-center
        "
      >
        <RouterView />
      </div>
      
    <!-- <Footer/> -->
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