<template>
  <MqResponsive target="md-xl">
    <section
      id="why"
      class="h-full py-16 content-center bg-[url('src/assets/img/Home/Backgrund/background_1.png')] bg-cover" 
    >
      <div class="container px-6 mx-auto mt-12 justify-items-center">
        <div class="flex flex-col pb-6 text-center justify-center md:pb-16">
          <h1 class="text-h1 font-black text-text-grey6">{{header}}</h1>
          <span class="pt-2 text-body3 text-text-grey6">
            {{body}}</span>
        </div>
        <div class="flex flex-row mt-10 pb-24 gap-5">
          <Card class="relative" v-for="cardItem in card" :key="cardItem.id">
            <img
              :src="cardItem.image"
              alt=""
              class="w-24 absolute pb-5 left-4 bottom-28"
            />
            <div class="pt-10 pb-5 px-5">
              <h1 class="text-body2 font-bold mb-4 text-basic-black">
                {{ cardItem.header }}
              </h1>
              <p class="text-basic-black text-p1">
                {{ cardItem.content }}
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
import Card from "../Card.vue";
export default {
  name: "why",
  components: {
    Card,
    MqResponsive
  },
  data() {
    return {
      bg: "src/assets/img/Home/Backgrund/background_1.png",
      header: "Kenapa harus holigo?",
      body: "Apa yang membuat Holigo berbeda",

      card: [
        {
          id: 1,
          image:
            "src/assets/img/Home/WhyHoligo/website illust icon-harga terbaik 1.png",
          header: "Harga Terbaik",
          content:
            "Travelling ga perlu mahal! Semua kebutuhan disediakan dengan harga yang budget-friendly.",
        },

        {
          id: 2,
          image:
            "src/assets/img/Home/WhyHoligo/website illust icon-metode pembayaran variatif 1.png",
          header: "Metode pembayaran variatif",
          content:
            "Banyak jalan menuju transaksi berhasil, pilih metode pembayaran sesuai yang kamu mau!",
        },

        {
          id: 3,
          header: "Mudah digunakan",
          image:
            "src/assets/img/Home/WhyHoligo/website illust icon-mudah digunakan 1.png",
          content:
            "Aplikasinya simple dan gampang untuk digunakan siapa pun, kapan pun, dan di mana pun!",
        },

        {
          id: 4,
          header: "Pelayanan 24 Jam",
          image:
            "src/assets/img/Home/WhyHoligo/website illust icon-pelayanan 24 jam (1) 1.png",
          content:
            "Customer Service kami siap membantu semua kebutuhan kamu 24 jam setiap harinya!",
        },
      ],
    };
  },
};
</script>

<style></style>
