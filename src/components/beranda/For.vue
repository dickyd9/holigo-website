<template>
  <MqResponsive :target="['xl']">
    <section class="h-full py- mb-24 content-center">
      <div class="container px-6 mx-auto my-5">
        <div class="text-center justify-center pb-16">
          <h1 class="text-h3 font-black">{{ header }}</h1>
          <span class="pt-2">{{ body }}</span>
        </div>
        <div
          class="flex flex-row my-16 gap-5"
        >
        <Card class="relative" v-for="fr in card" :key="fr.id">
            <img
              :src="fr.image"
              alt=""
              class="w-40 absolute pb-5 left-2 bottom-32"
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

  <MqResponsive :target="['lg']">
    <section class="h-full py-16 content-center">
      <div class="container px-6 mx-auto my-5">
        <div class="text-center justify-center pb-16">
          <h1 class="text-h3 font-black">{{ header }}</h1>
          <span class="pt-2">{{ body }}</span>
        </div>
        <div
          class="flex flex-row mt-10 gap-5"
        >
        <Card class="relative w-80" v-for="fr in card" :key="fr.id">
            <img
              :src="fr.image"
              alt=""
              class="w-24 absolute pb-5 left-4 bottom-32"
            />
            <div class="pt-16 pb-5 px-5">
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

  <MqResponsive :target="['xs']">
    <section class="h-full py-16 content-center">
      <div class="container px-6 mx-auto my-5">
        <div class="text-center justify-center pb-16">
          <h1 class="text-h3 font-black">{{ header }}</h1>
          <span class="pt-2">{{ body }}</span>
        </div>
        <div id="text" class="relative flex justify-center">
          <vueper-slides
            class="no-shadow w-full px-2 pb-2 relative "
            :bulletsOutside="true"
            :arrows="false"
            :visible-slides="1"
            :slide-ratio="1 / 2"
            :dragging-distance="120"
            :gap="1">

            <vueper-slide 
              v-for="(work, i) in card"
              :key="i"
              class="relative"
            >
            <template #content>
              <div class="vueperslide__content-wrapper relative">
                <div class="relative grid bg-basic-white rounded-3xl px-4 py-4 w-[272px] h-[191px]">
                    <img :src="work.image" alt="" class="absolute w-16 bottom-40"/>
                  <div class="py-4 text-left">
                    <div class="vueperslide__title text-body1 font-bold">{{ work.header }}</div>
                    <div class="vueperslide__content text-p1 font-thin">{{ work.content }}</div>
                  </div>
                </div>
              </div>
            </template>
            </vueper-slide>
          </vueper-slides>
        </div>
      </div>
    </section>
  </MqResponsive>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import Card from '../Card.vue'
export default {
  components:{
    Card,
    MqResponsive, 
    VueperSlides, 
    VueperSlide,
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
