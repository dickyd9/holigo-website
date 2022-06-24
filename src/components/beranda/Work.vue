<template>
  <section
    id="work"
    class="h-full bg-[url('src/assets/img/Home/Backgrund/background_2.png')] bg-cover"
  >
    <div class="container mx-auto pt-20">
      <div id="text" class="text-center text-text-grey6">
        <div class="text-h3 font-bold">
          <span class="text-primary-brand">Mending</span> {{ header }}
        </div>
        <div class="text-body2">{{ body }}</div>
      </div>

      <div id="text" class="grid md:pt-10 md:flex md:justify-center">

        <vueper-slides
          class="no-shadow w-12 md:w-full px-20 pb-6"
          :visible-slides="3"
          :slide-ratio="1 / 4"
          :dragging-distance="70">

          <template #arrow-left>
            <img :src="arrowLeft" alt="arrowleft" class="h-12">
          </template>

          <template #arrow-right>
            <img :src="arrowRight" alt="arrowright" class="h-12">
          </template>

          <vueper-slide 
            v-for="i in 9"
            :key="i"
            :title="i.toString()"
          />
<!-- 
          <template #bullet>
            <img 
              :src="arrowRight" 
              alt="arrowright" 
              class="h-6">
          </template> -->

        </vueper-slides>

      </div>
    </div>
  </section>
</template>

<!-- <div class="md:flex md:gap-2">
          <div
            class="grid pt-6 pb-16 px-4 shadow-md bg-basic-white rounded-2xl md:h-[236px] md:w-[368px]"
            v-for="work in card"
            :key="work.id"
          >
            <img :src="work.img" alt="" class="w-28" />
            <h1 class="text-h6 font-semibold">{{ work.header }}</h1>
            <span class="text-body4 font-medium">{{ work.content }}</span>
          </div>
        </div> -->

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: "work",
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      bg: "src/assets/img/Home/Backgrund/background_2.png",
      header: "kerja di holigo karena...",
      body: "Alasan kenapa kamu cocok tumbuh bareng Holigo",

      arrowLeft: "src/assets/img/icon/pagination_icon_left.png",
      arrowRight: "src/assets/img/icon/pagination_icon_right.png",

      card: [
        {
          id: 1,
          img: "src/assets/img/Home/Budaya holigo/website illust-serius tapi santai.png",
          header: "Santai Tapi Serius",
          content: "Work hard, Play hard bersama - sama",
        },

        {
          id: 2,
          img: "src/assets/img/Home/Budaya holigo/website illust icon-peduli kenyamanan.png",
          header: "Peduli Kenyamananmu",
          content: "Kamu boleh menggunakan casual yang santai ",
        },

        {
          id: 3,
          img: "src/assets/img/Home/Budaya holigo/website illust icon-peduli dengan kesehatan.png",
          header: "Peduli Kesehatan",
          content: "Kami peduli dengan kesehatan kamu",
        },
      ],
    };
  },
};
</script>

<style scoped>

.vueperslides__bullet .default {
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 16px;
  height: 16px;
}

.vueperslides__bullet--active .default {background-color: #42b983;}

.vueperslides__bullet span {
  display: block;
  color: #fff;
  font-size: 10px;
  opacity: 0.8;
}
</style>
