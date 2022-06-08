<template>
  <section class="h-full py-12 bg-basic-footer content-center">
    <div class="container px-6 mx-auto my-5 grid justify-items-center">
      <div class="flex flex-col pb-16 text-center justify-center">
          <h1 class="text-h3 font-black text-text-grey6">Kenapa harus holigo?</h1>
          <span class="pt-2 text-text-grey6">Apa yang membuat Holigo berbeda</span>
      </div>
      <div class="flex flex-col gap-6 mt-20 md:flex-row">
        <div class="relative max-w-[40rem]" v-for="cardWhy in why" :key="cardWhy.id">
              <div class="static px-6 py-4 rounded-3xl overflow-hidden shadow-xl bg-basic-white">
                <img src="../../assets/img/illustration/exmp.png" alt="" class="w-36 absolute bottom-44 left-6">
                  <div class="pt-6">
                    <h1 class="text-h6 font-bold mb-2 text-basic-black">
                      {{cardWhy.header}}
                    </h1>
                    <p class="text-basic-black">
                      {{cardWhy.content}}
                    </p>
                  </div>
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