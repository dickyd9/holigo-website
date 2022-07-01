<template>
  <MqResponsive :target="['xl']">
    <section class="h-full py- mb-24 content-center">
      <div class="container px-6 mx-auto my-5">
        <!-- Title -->
        <div data-aos="fade-up" data-aos-duration="1500">
          <div class="text-center justify-center pb-24">
            <h1 class="text-h3 font-black">{{ header }}</h1>
            <span class="pt-2">{{ body }}</span>
          </div>
        </div>
        <!-- Content -->
        <div data-aos="fade-up" data-aos-duration="1500">
          <div class="flex flex-row my-16 gap-5">
          <Card class="relative w-[400px]" v-for="fr in card" :key="fr.id">
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
      </div>
    </section>
  </MqResponsive>

  <MqResponsive target="md-lg">
    <section class="h-full py-16 content-center">
      <div class="container px-6 mx-auto my-5">
        <!-- Title -->
        <div data-aos="fade-up" data-aos-duration="1500">
          <div class="text-center justify-center pb-16">
            <h1 class="text-h3 font-black">{{ dFor('header') }}</h1>
            <span class="pt-2">{{ dFor('body') }}</span>
          </div>
        </div>
        <!-- Content -->
        <div data-aos="fade-up" data-aos-duration="1500">
          <div class="flex flex-row mt-10 gap-5">
          <Card class="relative w-80" v-for="fr in dFor('card')" :key="fr.id">
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
      </div>
    </section>
  </MqResponsive>

<MqResponsive target="xs-sm">
  <section
    id="work"
    class="h-full mb-14"
  >
    <div class="container mx-auto pt-20">
      <!-- Title -->
      <div data-aos="fade-up" data-aos-duration="1500">
        <div id="text" class="text-center px-6">
          <div class="text-h4 font-bold">{{ dFor('header') }}</div>
          <div class="text-p1">{{ dFor('body') }}</div>
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
              v-for="(work, i) in dFor('card')"
              :key="i"
            >
            <template #content>
              <div class="vueperslide__content-wrapper">
                <div class="grid pt-10 pb-2 w-[350px] h-[250px]">
                  <div class="relative px-4 pb-2 text-left bg-basic-white rounded-3xl shadow-md">
                    <img :src="work.image" alt="" class="w-20 absolute left-4 bottom-28" />
                    <div class="vueperslide__title text-h6 font-bold pt-10">{{ work.header }}</div>
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
import { MqResponsive } from "vue3-mq";
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import Card from '../Card.vue'
import { computed } from "@vue/reactivity";
import { useStore } from 'vuex';
import fr from '../../assets/data/beranda/for.json';
const store = useStore();
const activeLanguage = computed(() => store.getters.activeLanguage);

const dFor = (string) => {
  return fr[activeLanguage.value][string];
}

</script>

<style></style>
