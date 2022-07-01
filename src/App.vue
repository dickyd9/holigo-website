<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { MqResponsive } from "vue3-mq";
</script>

<template>
  <div id="app" class="bg-basic-white scroll-smooth">
    <MqResponsive target="md-xl">
      <img src="./assets/img/AboutUs/pattern/illustration_about-us_1.png" alt="" class="absolute h-96 -rotate-90">
    </MqResponsive>
    <Navbar/>
      <div
        class="
          mx-auto
          md:block 
          md:justify-between 
          md:items-center
        "
      >
        <RouterView/>
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