<template>
  <section class="h-full py-12 content-center">
    <div class="container px-6 mx-auto my-5">
      <div class="text-center justify-center md:pb-16">
        <h1 class="text-h3 font-black">{{ header }}</h1>
        <span class="pt-2">{{ body }}</span>
      </div>
      <div
        class="flex flex-col mt-20 gap-24 content-center md:gap-6 md:mt-20 md:flex-row"
      >
      <Card class="relative" v-for="fr in card" :key="fr.id">
          <img
            :src="fr.image"
            alt=""
            class="w-36 absolute left-6 bottom-40 md:bottom-56"
          />
          <div class="pt-8 md:pt-6">
            <h1 class="text-h6 font-bold mb-2 text-basic-black">
              {{ fr.header }}
            </h1>
            <p class="text-basic-black">
              {{ fr.content }}
            </p>
          </div>
      </Card>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '../Card.vue'
export default {
  components:{
    Card,
  },
  data() {
    return {
      header: "Dari Kami buat Kamu",
      body: "Mau produk apa pun, semua udah kami sediain biar lifestyle kamu lebih simple",
      card: [
        {
          id: 1,
          image: "src/assets/img/Home/Product us/website illust-hotel 1.png",
          header: "Booking Hotel",
          content:
            "Gak usah bingung nyari tempat tinggal holiday kamu, langsung aja cari dari sini.",
        },

        {
          id: 2,
          image:
            "src/assets/img/Home/Product us/website illust-tiket pesawat 1.png",
          header: "Tiket Pesawat",
          content:
            "Up up here we go! Terbang kemana pun tinggal langsung pilih. ",
        },

        {
          id: 3,
          image:
            "src/assets/img/Home/Product us/website illust-pulsa paket data 1.png",
          header: "Pulsa & Paket Data",
          content:
            "Gak ada lagi kata 'abis kuota' atau 'abis pulsa', langsung isi ulang disini aja.",
        },

        {
          id: 4,
          image:
            "src/assets/img/Home/Product us/website illust icon-tagihan.png",
          header: "Isi Ulang & Tagihan",
          content:
            "Gak perlu ngantri di loket atau bayar tagihan yang ribet, bisa langsung online.",
        },
      ],
    };
  },
};
</script>

<style></style>
