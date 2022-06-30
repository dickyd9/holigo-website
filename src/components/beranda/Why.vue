<template>
  <MqResponsive :target="['xl']">
    <section
      id="why"
      class="h-full pt-28 pb-44 mb-16 content-center bg-[url('src/assets/img/Home/Backgrund/background_1.png')] bg-cover" 
    >
    
      <div class="container px-6 mx-auto mt-12 justify-items-center">
        <!-- Title -->
        <div data-aos="fade-up" data-aos-duration="1500">
          <div class="flex flex-col pb-16 text-center justify-center">
            <h1 class="text-h1 font-black text-text-grey6">{{header}}</h1>
            <span class="pt-2 text-body3 text-text-grey6">
              {{body}}</span>
          </div>
        </div>
        <!-- Content -->
        <div data-aos="fade-up" data-aos-duration="1500">
          <div class="flex flex-row my-16 gap-5">
            <Card class="relative h-full w-[400px]" v-for="cardItem in card" :key="cardItem.id">
              <img
                :src="cardItem.image"
                alt=""
                class="w-40 absolute pb-5 left-2 bottom-28"
              />
              <div class="pt-16 h-56 px-5">
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
    </div>
    </section>
  </MqResponsive>

  <MqResponsive target="md-lg">
    <section
      id="why"
      class="h-full content-center bg-[url('src/assets/img/Home/Backgrund/background_1.png')] bg-cover pt-28 pb-56" 
    >
      <div class="container px-6 mx-auto justify-items-center">
        <!-- Title -->
        <div data-aos="fade-up" data-aos-duration="1500">
          <div class="flex flex-col text-center justify-center pb-24">
            <h1 class="text-h1 font-black text-text-grey6">{{dWhy('header')}}  <span class="text-primary-brand">holigo</span> ?</h1>
            <span class="pt-2 text-body3 text-text-grey6">
              {{dWhy('body')}}</span>
          </div>
        </div>
        <!-- Content -->
        <div data-aos="fade-up" data-aos-duration="1500">
          <div class="flex flex-row gap-5">
            <Card class="relative" v-for="cardItem in dWhy('card')" :key="cardItem.id">
              <img
                :src="cardItem.image"
                alt=""
                class="w-24 absolute pb-5 left-4 bottom-32"
              />
              <div class="pt-16 pb-5 px-5">
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
    </div>
    </section>
  </MqResponsive>

  <MqResponsive target="xs-sm">
    <section
      id="why"
      class="h-full" 
    >
      <div class="container pt-16 pb-32 mx-auto bg-[url('src/assets/img/Home/Backgrund/background_why_holigo.png')] bg-cover">
        <!-- Title -->
        <div data-aos="fade-up" data-aos-duration="1500">
          <div class="flex flex-col text-center justify-center">
            <h1 class="text-h4 font-black text-text-grey6">{{header}} <span class="text-primary-brand">holigo</span> ?</h1>
            <span class="pt-4 text-p1 text-text-grey6">{{body}}</span>
          </div>
        </div>

        <!-- Content -->
        <div data-aos="fade-up" data-aos-duration="1500">
          <div id="text" class="pt-6 flex justify-center">
          <vueper-slides
            class="no-shadow w-full"
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
                <div class="grid pt-10 pb-1 w-[350px] h-[250px]">
                  <div class="relative px-4 pb-2 text-left bg-basic-white rounded-3xl shadow-md">
                    <img :src="work.image" alt="" class="w-20 absolute left-4 bottom-28" />
                    <div class="vueperslide__title text-h6 font-bold pt-8">{{ work.header }}</div>
                    <div class="vueperslide__content text-body3 font-thin pt-1">{{ work.content }}</div>
                  </div>
                </div>
              </div>
            </template>
            </vueper-slide>
          </vueper-slides>
          </div>
        </div>
      </div>
    </section>
  </MqResponsive>
</template>

<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { MqResponsive } from "vue3-mq";
import Card from "../Card.vue";
import { computed } from "@vue/reactivity";
import { useStore } from 'vuex';
import why from '../../assets/data/beranda/why.json';
const store = useStore();
const activeLanguage = computed(() => store.getters.activeLanguage);

const dWhy = (string) => {
  return why[activeLanguage.value][string];
}

</script>

<style>

</style>
