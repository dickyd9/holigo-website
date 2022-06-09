<template>
  <section class="h-full px-10 mt-auto">
      <div class="container px-6 mx-auto my-24 flex odd:flex-row even:flex-row-reverse" v-for="content in contents" :key="content">
        <div class="basis-1/2 items-center ">
            <img src="../.././assets/img/About us/website illust-sahabat holiday color 1.png" alt="" class="h-5/6">
        </div>
        <div class="grid basis-1/2 content-center">
            <img src="../../assets/img/Home/illustration_ destination.png " class="w-20 mb-6">
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