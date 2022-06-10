<template>
  <section class="h-full py-12 content-center">
    <div class="container px-6 mx-auto my-5 justify-items-center">
      <div class="text-center justify-center md:pb-16">
          <h1 class="text-h3 font-black">{{header}}</h1>
          <span class="pt-2">{{body}}</span>
      </div>
      <div class="flex flex-col mt-12 gap-12 md:gap-6 md:mt-20 md:flex-row">
        <div class="relative max-w-[40rem]" v-for="fr in card" :key="fr.id">
              <div class="static px-6 py-12 rounded-3xl overflow-hidden shadow-xl bg-basic-white">
                <img :src="fr.image" alt="" class="w-36 absolute left-6 bottom-36 md:bottom-44">
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
export default {
     data() {
    return {
      header: "Dari Kami buat Kamu",
      body: "Mau produk apa pun, semua udah kami sediain biar lifestyle kamu lebih simple",
      card: [
              {  
                  "id": 1,
                  "image": "src/assets/img/Home/Product us/website illust-hotel 1.png",
                  "header": "Booking Hotel",
                  "content": "Gak usah bingung nyari tempat tinggal holiday kamu, langsung aja cari dari sini."
              },

              {
                  "id": 2,
                  "image": "src/assets/img/Home/Product us/website illust-tiket pesawat 1.png",
                  "header": "Tiket Pesawat",
                  "content": "Up up here we go! Terbang kemana pun tinggal langsung pilih. "
              },

              {
                  "id": 3,
                  "image": "src/assets/img/Home/Product us/website illust-pulsa paket data 1.png",
                  "header": "Pulsa & Paket Data",
                  "content": "Gak ada lagi kata 'abis kuota' atau 'abis pulsa', langsung isi ulang disini aja."
              },

              {
                  "id": 4,
                  "image": "src/assets/img/Home/Product us/website illust icon-tagihan.png",
                  "header": "Isi Ulang & Tagihan",
                  "content": "Gak perlu ngantri di loket atau bayar tagihan yang ribet, bisa langsung online."
              }
          ]

    };
  },
};
</script>

<style>

</style>