<template>
  <section class="h-full py-12 content-center">
    <div class="container px-6 mx-auto my-5 justify-items-center">
      <div class="text-center justify-center md:pb-16">
          <h1 class="text-h3 font-black">Dari Kami buat Kamu</h1>
          <span class="pt-2">Mau produk apa pun, semua udah kami sediain biar lifestyle kamu lebih simple</span>
      </div>
      <div class="flex flex-col mt-12 gap-12 md:gap-6 md:mt-20 md:flex-row">
        <div class="relative max-w-[40rem]" v-for="fr in cardFor" :key="fr.id">
              <div class="static px-6 py-4 rounded-3xl overflow-hidden shadow-xl bg-basic-white">
                <img src="../../assets/img/illustration/exmp.png" alt="" class="w-36 absolute left-6 bottom-36 md:bottom-44">
                  <div class="pt-16 md:pt-6">
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