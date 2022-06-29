<template>
  <div id="beranda" class="h-full">
    <div data-aos="fade-up" data-aos-duration="1500">
      <Hero/>
    </div>
    <div data-aos="fade-up" data-aos-duration="1500">
      <Content/>
    </div>
    <Why/>
    <For/>
    <Customize/>
    <Partner/>
    <Work/>
    <BottomCard/>
  </div>
</template>

<script setup>
import Hero from '.././components/beranda/Hero.vue'
import Why from '.././components/beranda/Why.vue'
import Content from '.././components/beranda/Content.vue'
import For from '.././components/beranda/For.vue'
import Partner from '.././components/beranda/Partner.vue'
import Customize from '.././components/beranda/Customize.vue'
import Work from '.././components/beranda/Work.vue'
import BottomCard from '.././components/BottomCard.vue'
</script>


<style>

</style>