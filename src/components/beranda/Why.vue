<template>
  <section id="why" class="h-full py-12 content-center" 
  :style="{
    'background-image': `url(${(bg)})`,
    'background-size': '100vw'}" >
    <div class="container px-6 mx-auto my-5 justify-items-center">
      <div class="flex flex-col pb-6 text-center justify-center md:pb-16">
          <h1 class="text-h3 font-black text-text-grey6">Kenapa harus holigo?</h1>
          <span class="pt-2 text-text-grey6">Apa yang membuat Holigo berbeda</span>
      </div>
      <div class="flex flex-col mt-12 gap-12 md:gap-6 md:mt-12 md:flex-row">
        <div class="relative max-w-[40rem] " v-for="cardItem in card" :key="cardItem.id">
              <div class="static px-6 py-4 h-60  rounded-3xl overflow-hidden shadow-xl bg-basic-white">
                <img :src="cardItem.image" alt="" class="w-36 absolute left-4 bottom-36 md:bottom-48">
                  <div class="pt-20 md:pt-6">
                    <h1 class="text-h6 font-bold mb-2 text-basic-black">
                      {{cardItem.header}}
                    </h1>
                    <p class="text-basic-black">
                      {{cardItem.content}}
                    </p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "why",
  data() {
    return {
      bg: "src/assets/img/Home/Backgrund/background_1.png",

      card: [
              {  
                  "id": 1,
                  "image": "src/assets/img/Home/WhyHoligo/website illust icon-harga terbaik 1.png",
                  "header": "Harga Terbaik",
                  "content": "Travelling ga perlu mahal! Semua kebutuhan disediakan dengan harga yang budget-friendly."
              },

              {
                  "id": 2,
                  "image": "src/assets/img/Home/WhyHoligo/website illust icon-metode pembayaran variatif 1.png",
                  "header": "Metode pembayaran variatif",
                  "content": "Banyak jalan menuju transaksi berhasil, pilih metode pembayaran sesuai yang kamu mau!"
              },

              {
                  "id": 3,
                  "header": "Mudah digunakan",
                  "image": "src/assets/img/Home/WhyHoligo/website illust icon-mudah digunakan 1.png",
                  "content": "Aplikasinya simple dan gampang untuk digunakan siapa pun, kapan pun, dan di mana pun!"
              },

              {
                  "id": 4,
                  "header": "Pelayanan 24 Jam",
                  "image": "src/assets/img/Home/WhyHoligo/website illust icon-pelayanan 24 jam (1) 1.png",
                  "content": "Customer Service kami siap membantu semua kebutuhan kamu 24 jam setiap harinya!"
              }
          ]
    };
  },
};
</script>

<style>

</style>