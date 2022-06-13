<template>
  <section
    id="why"
    class="h-full py-12 content-center bg-[url('src/assets/img/Home/Backgrund/background_1.png')] bg-auto md:bg-cover" 
  >
    <div class="container px-6 mx-auto mt-20 md:mt-12 justify-items-center">
      <div class="flex flex-col pb-6 text-center justify-center md:pb-16">
        <h1 class="text-h3 font-black text-text-grey6">{{header}}</h1>
        <span class="pt-2 text-text-grey6">
          {{body}}</span>
      </div>
      <div class="flex flex-col mt-12 gap-24 pb-16 pt-12 md:gap-4 md:mt-12 md:flex-row">
        <Card class="relative" v-for="cardItem in card" :key="cardItem.id">
          <img
            :src="cardItem.image"
            alt=""
            class="w-36 absolute left-4 bottom-40 md:bottom-56"
          />
          <div class="pt-6 md:pt-6">
            <h1 class="text-h6 font-bold mb-2 text-basic-black">
              {{ cardItem.header }}
            </h1>
            <p class="text-basic-black">
              {{ cardItem.content }}
            </p>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "../Card.vue";
export default {
  name: "why",
  components: {
    Card,
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
