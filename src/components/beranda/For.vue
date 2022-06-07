<template>
  <section class="grid justify-items-center py-12">
    <div class="container px-6 mx-auto grid justify-items-center">
      <div class="flex flex-col text-center py-10">
          <h1 class="text-h3 font-black">Dari Kami buat Kamu</h1>
          <span class="pt-2">Mau produk apa pun, semua udah kami sediain biar lifestyle kamu lebih simple</span>
      </div>
      <div class="flex flex-col pt-10 gap-6 md:flex-row">
          <div class="max-w-[40rem] rounded overflow-hidden shadow-xl" v-for="fr in cardFor" :key="fr.id">
              <div class="px-6 py-4">
                  <div class="text-h6 font-bold mb-2">{{fr.header}}</div>
                  <p class="">
                  {{fr.content}}
                  </p>
              </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import For from './data/forItems.json'
export default {
     data() {
    return {
      cardFor: For,

    };
  },
};
</script>

<style>

</style>