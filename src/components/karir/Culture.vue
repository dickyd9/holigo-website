<template>
  <section class="h-full mb-52">
    <div class="container px-6 mx-auto">
      <div class="justify-center text-center">
        <h1 class="text-h3 font-bold">Budaya team <span class="text-primary-brand">Holigo</span></h1>
        <span>Team Holigo itu santai tapi selalu siap. Yuk gabung keluarga besar Holigo.</span>
      </div>
      <div class="grid grid-cols-2">
        <div id="content-culture" class="flex pt-12" v-for="culture in cultureItem" :key="culture.id">
          <h1>{{culture.logo}}</h1>
          <div class="pl-6 grid">
            <h1 class="text-h4 font-bold">{{culture.header}}</h1>
            <h1>{{culture.content}}</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Culture from './data/cultureItem.json'
export default {
     data() {
    return {
      cultureItem: Culture,

    };
  },
};
</script>

<style>

</style>