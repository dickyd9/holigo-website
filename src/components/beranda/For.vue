<template>
  <section class="grid justify-items-center py-12">
    <div class="container px-6 mx-auto justify-items-center">
      <div class="flex flex-col text-center py-10">
          <h1 class="text-h3 font-black">Dari Kami buat Kamu</h1>
          <span class="pt-2">Mau produk apa pun, semua udah kami sediain biar lifestyle kamu lebih simple</span>
      </div>
      <div class="flex flex-col gap-6 mt-20 md:flex-row">
        <div class="relative max-w-[40rem]" v-for="fr in cardFor" :key="fr.id">
              <div class="static px-6 py-4 rounded-3xl overflow-hidden shadow-xl bg-basic-white">
                <img src="../../assets/img/illustration/exmp.png" alt="" class="w-20 absolute bottom-44 left-6">
                  <div class="pt-6">
                    <h1 class="text-h6 font-bold mb-2 text-basic-black">
                      {{fr.header}}
                    </h1>
                    <p class="text-basic-black">
                      {{fr.content}}
                    </p>
                  </div>
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