<template>
  <section id="why" class="h-full py-12 content-center">
    <div class="container px-6 mx-auto my-5 justify-items-center">
      <div class="flex flex-col pb-6 text-center justify-center md:pb-16">
          <h1 class="text-h3 font-black text-text-grey6">Kenapa harus holigo?</h1>
          <span class="pt-2 text-text-grey6">Apa yang membuat Holigo berbeda</span>
      </div>
      <div class="flex flex-col mt-12 gap-12 md:gap-6 md:mt-20 md:flex-row">
        <div class="relative max-w-[40rem] " v-for="cardWhy in why" :key="cardWhy.id">
              <div class="static px-6 py-4 h-60  rounded-3xl overflow-hidden shadow-xl bg-basic-white">
                <img :src="cardWhy.image" alt="" class="w-36 absolute left-6 bottom-36 md:bottom-44">
                  <div class="pt-16 md:pt-6">
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
#why {
  background-image: url("../../assets/img/Home/Backgrund/background_1.png");
  background-size: 100vw;
}
</style>