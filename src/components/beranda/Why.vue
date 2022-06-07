<template>
  <section class="h-full py-12 bg-basic-footer content-center">
    <div class="container px-6 mx-auto my-5 grid justify-items-center">
      <div class="flex flex-col pb-16 text-center justify-center">
          <h1 class="text-h3 font-black text-text-grey6">Kenapa harus holigo?</h1>
          <span class="pt-2 text-text-grey6">Apa yang membuat Holigo berbeda</span>
      </div>
      <div class="flex flex-col gap-6 md:flex-row">
          <div class="max-w-[40rem] rounded overflow-hidden shadow-xl bg-basic-white" v-for="cardWhy in why" :key="cardWhy.id">
              <img src="" alt="">
              <div class="px-6 py-4">
                  <div class="text-h6 font-bold mb-2 text-basic-black">{{cardWhy.header}}</div>
                  <p class="text-basic-black">
                  {{cardWhy.content}}
                  </p>
              </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import Why from './data/whyItem.json'
export default {
     data() {
    return {
      why: Why,
    };
  },
};
</script>

<style>

</style>