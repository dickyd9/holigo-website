<template>
  <MqResponsive target="md-xl">
    <section class="h-full py-16 content-center">
      <div class="container px-6 mx-auto my-5">
        <div class="text-center justify-center pb-16">
          <h1 class="text-h3 font-black">{{ header }}</h1>
          <span class="pt-2">{{ body }}</span>
        </div>
        <div
          class="flex flex-row mt-10 gap-5"
        >
        <Card class="relative" v-for="fr in card" :key="fr.id">
            <img
              :src="fr.image"
              alt=""
              class="w-24 absolute pb-5 left-4 bottom-28"
            />
            <div class="pt-10 pb-5 px-5">
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
  </MqResponsive>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import Card from '../Card.vue'
export default {
  components:{
    Card,
    MqResponsive
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
