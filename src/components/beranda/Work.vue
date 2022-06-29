<template>
<MqResponsive :target="['xl']">
  <section
    id="work"
    class="h-full bg-[url('src/assets/img/Home/Backgrund/background_2.png')] bg-cover"
  >
    <div class="container mx-auto pt-24">
      
      <div data-aos="fade-up" data-aos-duration="1500">
        <div id="text" class="text-center text-text-grey6">
          <div class="text-h3 font-bold">
            <span class="text-primary-brand">Mending</span> {{ header }}
          </div>
          <div class="text-body2">{{ body }}</div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="1500">
        <div id="text" class="grid md:pt-10 md:flex md:justify-center">

          <vueper-slides
            class="no-shadow w-full px-20 pb-6"
            :visible-slides="3"
            :slide-ratio="1 / 4"
            :dragging-distance="70"
            :gap="1">

            <template #arrow-left>
              <img :src="arrowLeft" alt="arrowleft" class="h-12">
            </template>

            <template #arrow-right>
              <img :src="arrowRight" alt="arrowright" class="h-12">
            </template>

            <vueper-slide 
              v-for="(work, i) in card"
              :key="i"
            >
            <template #content>
              <div class="vueperslide__content-wrapper">
                <div class="grid bg-basic-white rounded-3xl p-10 h-72">
                  <div>
                    <img :src="work.img" alt="" class="w-28" />
                  </div>
                  <div class="pt-6 text-left">
                    <div class="vueperslide__title text-h6 font-bold">{{ work.header }}</div>
                    <div class="vueperslide__content text-h6 font-thin">{{ work.content }}</div>
                  </div>
                </div>
              </div>
            </template>
            </vueper-slide>
          </vueper-slides>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <div class="flex justify-center">
          <Button class="mb-28">
            Yuk, Gabung!
          </Button>
        </div>
      </div>  
    </div>
  </section>
</MqResponsive>

<MqResponsive target="md-lg">
  <section
    id="work"
    class="h-full bg-[url('src/assets/img/Home/Backgrund/background_2.png')] bg-cover mb-24"
  >
    <div class="container mx-auto pt-20">
      
      <div data-aos="fade-up" data-aos-duration="1500">
        <div id="text" class="text-center text-text-grey6">
          <div class="text-h3 font-bold">
            <span class="text-primary-brand">Mending</span> {{ header }}
          </div>
          <div class="text-body2">{{ body }}</div>
        </div>
      </div>
      
      <div data-aos="fade-up" data-aos-duration="1500">
        <div id="text" class="pt-10 flex justify-center">

          <vueper-slides
            class="no-shadow w-full px-12"
            :visible-slides="3"
            :slide-ratio="1 / 4"
            :dragging-distance="70"
            :gap="1">

            <template #arrow-left>
              <img :src="arrowLeft" alt="arrowleft" class="h-12">
            </template>

            <template #arrow-right>
              <img :src="arrowRight" alt="arrowright" class="h-12">
            </template>

            <vueper-slide 
              v-for="(work, i) in card"
              :key="i"
            >
            <template #content>
              <div class="vueperslide__content-wrapper">
                <div class="grid bg-basic-white rounded-3xl p-4 w-[350px] h-[236px]">
                  <div>
                    <img :src="work.img" alt="" class="w-24" />
                  </div>
                  <div class="pt-4 text-left">
                    <div class="vueperslide__title text-h6 font-bold">{{ work.header }}</div>
                    <div class="vueperslide__content text-body3 font-thin">{{ work.content }}</div>
                  </div>
                </div>
              </div>
            </template>
            </vueper-slide>

            <template #bullet>

            </template>
          </vueper-slides>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <div class="flex justify-center">
          <Button class="mb-28 mt-10">
            Yuk, Gabung!
          </Button>
        </div>
      </div>
        
    </div>
  </section>
</MqResponsive>

<MqResponsive target="xs-sm">
  <section
    id="work"
    class="h-full bg-[url('src/assets/img/Home/Backgrund/background_benefit_holigo.png')] bg-cover mb-8"
  >
    <div class="container mx-auto pt-20">
      <div id="text" class="text-center text-text-grey6">
        <div class="text-h4 font-bold">
          <span class="text-primary-brand">Mending</span> {{ header }}
        </div>
      </div>

      <div id="text" class="pt-10 flex justify-center">
        <vueper-slides
          class="no-shadow w-full px-2 pb-2"
          :bulletsOutside="true"
          :arrows="false"
          :visible-slides="1"
          :slide-ratio="1 / 2"
          :dragging-distance="120"
          :gap="1">

          <vueper-slide 
            v-for="(work, i) in card"
            :key="i"
          >
          <template #content>
            <div class="vueperslide__content-wrapper">
              <div class="grid bg-basic-white rounded-3xl shadow-xl px-4 py-4 w-[350px] h-[180px]">
                <div>
                  <img :src="work.img" alt="" class="w-16" />
                </div>
                <div class="py-4 text-left">
                  <div class="vueperslide__title text-h6 font-bold">{{ work.header }}</div>
                  <div class="vueperslide__content text-body3 font-thin">{{ work.content }}</div>
                </div>
              </div>
            </div>
          </template>
          </vueper-slide>
        </vueper-slides>
      </div>
        <div class="flex justify-center">
          <Button class="mt-8 mb-24">
            Yuk, Gabung!
          </Button>
        </div>
    </div>
  </section>
</MqResponsive>

  
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { MqResponsive } from "vue3-mq";
import Button from '@/components/Button.vue'

export default {
  name: "work",
  components: { VueperSlides, VueperSlide, MqResponsive, Button },
  data() {
    return {
      currentSlide: 0,
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

        {
          id: 4,
          img: "src/assets/img/Home/Budaya holigo/website illust icon-peduli dengan hakmu.png",
          header: "Peduli Hak Kamu",
          content: "Kami peduli hak kamu sebagai tenaga kerja",
        },

        {
          id: 5,
          img: "src/assets/img/Home/Budaya holigo/website illust icon-semua disediakan.png",
          header: "Semua Disediain",
          content: "Laptop, coffee, dan lainnya kami sediain",
        },

        {
          id: 6,
          img: "src/assets/img/Home/Budaya holigo/website illust icon-peduli potensi.png",
          header: "Peduli Potensimu",
          content: "Kami mau potensi kamu terus berkembang",
        },
      ],
    };
  },
};
</script>

<style>
@media only screen and (min-width: 960px) {
  .vueperslide--active {
    zoom: 1.1;
    transition: 2s;
  }
}

.vueperslides__bullet {
    margin-left: 1px;
    bottom: 4rem;
    margin-bottom: 1px;
    border: none;
    background: none;
}

.vueperslides__bullet .default {
  background-color: #E0E0E0;
  border: none;
  box-shadow: none;
  transition: 0.5s;
  margin: 0px;
  width: 12px;
  height: 12px;
}

.vueperslides__bullet--active .default {
  background-color: #00BD17;
  width: 24px; 
}

.vueperslides__bullet span {
  display: block;
  color: #fff;
  font-size: 10px;
  opacity: 0.8;
}

</style>
