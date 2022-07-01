<template>

<MqResponsive :target="['xl']">
  <section class="h-screen pt-28">
    <div class="flex container px-6 mx-auto">
      <!-- grid left -->
      <div class="grid basis-1/2 transition ease-in-out duration-300 ">
        <div class="flex flex-col justify-center">
          <div class="text-h1 font-black text-center">
            <!-- Text Title -->
            <div class="pb-2 flex"> 
             {{heroItem.header1}}<img :src="heroItem.pattern" alt="" class="w-8 h-8 md:w-16 md:h-16" />
           </div>
           <div class="text-basic-black flex flex-wrap">
              your <div class="text-primary-brand pl-4"> {{heroItem.header2}}</div>
           </div>
          </div>
          <!-- Text body -->
          <span class="pt-6 text-body1 font-medium max-w-lg text-center md:text-left ">
            {{heroItem.body}}
          </span>
          <!-- Product Flex -->
          <div class="flex pt-6 max-w-lg md:gap-6">
            <div class="flex" v-for="productList in product" :key="productList.id">
              <div id="icon" class="pr-2 w-12 md:w-20">
                <img :src="productList.img" alt="">
              </div>
              <div id="text">
                <div class="font-semibold text-h6 md:text-h4">{{productList.title}}</div>
                <div class="font-medium text-body4 md:text-body3">{{productList.body}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- grid right -->
      <div class="grid basis-1/2">
        <div class="justify-items-center">
          <img 
              class="h-[80vh]" 
              :src="heroItem.image" 
              alt=""
          >
        </div>
      </div>
    </div>
  </section>
</MqResponsive>

<MqResponsive target="md-lg">
  <section class="h-screen pt-16">
    <div class="flex container px-6 mx-auto">
      <!-- grid left -->
      <div class="grid basis-1/2 transition ease-in-out duration-300 ">
        <div class="flex flex-col justify-center">
          <div class="text-h1 font-black text-center">
            <!-- Text Title -->
            <div class="pb-2 flex"> 
              {{ hero('header1') }}
             <img :src="pattern" alt="" class="w-8 h-8 md:w-16 md:h-16" />
           </div>
           <div class="text-basic-black flex flex-wrap">
              your  <div class="text-primary-brand pl-4"> 
                      {{ hero('header2') }}
                    </div>
           </div>
          </div>
          <!-- Text body -->
          <span class="pt-6 text-body1 font-medium max-w-lg text-center md:text-left ">
            {{ hero('body') }}
          </span>
          <!-- Product Flex -->
          <div class="flex pt-6 max-w-lg md:gap-6">
            <div class="flex" v-for="productList in hero('product')" :key="productList.id">
              <div id="icon" class="pr-2 w-12 md:w-20">
                <img :src="productList.img" alt="">
              </div>
              <div id="text">
                <div class="font-semibold text-h6 md:text-h4">{{productList.title}}</div>
                <div class="font-medium text-body4 md:text-body3">{{productList.body}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- grid right -->
      <div class="grid basis-1/2">
        <div class="justify-items-center">
          <img 
              class="h-full w-full" 
              :src="image" 
              alt=""
          >
        </div>
      </div>
    </div>
  </section>
</MqResponsive>

<MqResponsive target="xs-sm">
  <section class="pt-20">
    <div class="grid container px-6 mx-auto">
      <!-- grid left -->
      <div class="flex justify-center basis-1/2">
          <img 
              class="h-[33vh] pb-4" 
              :src="image" 
              alt=""
          >
      </div>
      <!-- grid right -->
      <div class="grid basis-1/2 transition ease-in-out duration-300 ">
        <div class="grid gap-4">
          <!-- Text Title -->
          <div class="text-h4 font-black text-left">
            <div class="flex"> 
             {{hero('header1')}}<img :src="pattern" alt="" class="w-8 h-8 md:w-16 md:h-16" />
           </div>
           <div class="text-basic-black flex flex-wrap">
              your <div class="text-primary-brand pl-4"> {{hero('header2')}}</div>
           </div>
          </div>
          <!-- Text body -->
          <span class="text-body4 font-medium text-left ">
            {{hero('body')}}
          </span>

          <!-- Product Flex -->
          <div class="flex gap-2 justify-center pt-6">
            <div class="flex" v-for="productList in hero('product')" :key="productList.id">
              <div id="icon" class="pr-2 w-14">
                <img :src="productList.img" alt="">
              </div>
              <div id="text">
                <div class="font-semibold text-[20px]">{{productList.title}}</div>
                <div class="font-medium text-[12px]">{{productList.body}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</MqResponsive>

</template>

<script setup>
import { MqResponsive } from "vue3-mq";
import { computed } from "@vue/reactivity";
import { useStore } from 'vuex';
import dataHero from '../../assets/data/beranda/hero.json';
const store = useStore();
const activeLanguage = computed(() => store.getters.activeLanguage);

const hero = (string) => {
  return dataHero[activeLanguage.value][string];
}

const pattern = "/img/Home/pattern-1.png"
const image = "/img/Home/website illust-hero color 1.png"
</script>

<style>

</style>