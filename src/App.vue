<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div id="app">
    <Navbar/>
      <div
        class="
          container
          px-6
          py-8
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <RouterView />
      </div>
  </div>
</template>

<style>
@import "@/assets/base.css";

#app {
  margin: 0 auto;

  font-weight: normal;
}
</style>
