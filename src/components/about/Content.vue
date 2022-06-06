<template>
  <section class="h-full px-10 mt-auto">
      <div class="container px-6 mx-auto mb-24 flex odd:flex-row-reverse even:flex-row" v-for="content in contents" :key="content">
        <div class="basis-1/2 items-center ">
            <img src="../../assets/img/illustration/exmp.png" alt="">
        </div>
        <div class="grid basis-1/2 content-center">
            <hr class="w-20 rounded-sm border-primary-brand md:h-3 md:border-t-4">
            <h1 class="text-h3 font-black">{{content.header}}</h1>
            <span class="pt-2">{{content.content}}</span>
        </div>
      </div>
  </section>
</template>

<script>
import Content from '../../assets/data/contentAbout.json'
export default {
     data() {
    return {
      contents: Content,
    };
  },
};
</script>

<style>

</style>