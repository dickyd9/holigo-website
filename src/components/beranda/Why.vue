<template>
  <section class="h-[70vh] py-10 bg-basic-footer">
    <div class="container px-6 mx-auto grid justify-items-center">
      <div class="flex flex-col pb-10 text-center justify-center">
          <h1 class="text-h3 font-black text-text-grey5">Kenapa harus holigo?</h1>
          <span class="pt-2 text-text-grey5">Apa yang membuat Holigo berbeda</span>
      </div>
      <div class="flex flex-col gap-6 md:flex-row">
          <div class="max-w-[40rem] rounded overflow-hidden shadow-xl bg-basic-white" v-for="card in cards" :key="card">
              <img src="" alt="">
              <div class="px-6 py-4">
                  <div class="text-h6 font-bold mb-2 text-basic-black">{{card.header}}</div>
                  <p class="text-basic-black">
                  {{card.content}}
                  </p>
              </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import cardWhy from '../../assets/data/whyItem.json'
export default {
     data() {
    return {
      cards: cardWhy,
    };
  },
};
</script>

<style>

</style>