<template>
<MqResponsive target="xl">
    <section class="h-full mb-44">
        <div class="h-screen container px-6 mx-auto grid py-24 md:flex flex-wrap">
            <div class="grid basis-1/2 content-center">
                  <h1 class="text-[4rem] font-black">
                    {{header}}
                  </h1>
                  <span class="text-h6 max-w-xl">
                      {{body}}
                  </span>
  
                  <div id="search" class="pt-6 max-w-lg">
                      <form class="flex items-center">   
                          <label for="simple-search" class="sr-only">Search</label>
                          <div class="relative w-full">
                              <input type="text" id="simple-search" 
                              class="
                              bg-basic-background
                              border-none
                              text-basic-black 
                              text-sm 
                              rounded-xl 
                              focus:ring-primary-brand
                              focus:border-primary-brand 
                              block 
                              w-full 
                              pl-6 
                              p-2.5 
                              " 
                              placeholder="Search" 
                              required>
                          </div>
                          <button type="submit" 
                          class="p-2.5 ml-2 w-20 font-bold 
                                text-text-grey6 
                                bg-primary-brand
                                hover:bg-primary-green-l-10
                                disable:bg-basic-background
                                disable:text-color-grey2 
                                rounded-2xl">
                              Cari
                          </button>
                      </form>
                      <button type="submit" class="pt-5 text-primary-brand"> 
                          <div class="flex gap-2">
                          Lihat semua lowongan <img :src="icon" alt="" class="h-6 hover:left-8">
                          </div>
                      </button>
                  </div>
            </div>
            <div class="grid basis-1/2 content-center justify-center">
              <img 
                  class="object-contain h-[560px]" 
                  :src="image" 
                  alt=""
              >
            </div>
        </div>
    </section>
</MqResponsive>

<MqResponsive target="md-lg">
    <section class="h-full mb-44">
        <div class="h-screen container px-6 mx-auto grid py-24 md:flex flex-wrap">
            <div class="grid basis-1/2 content-center">
                <div data-aos="fade-up" data-aos-duration="1500">
                  <h1 class="text-[4rem] font-black">
                    {{hero('header')}}
                  </h1>
                  <span class="text-h6 max-w-xl">
                      {{hero('body')}}
                  </span>
  
                  <div id="search" class="pt-6 max-w-lg">
                      <form class="flex items-center">   
                          <label for="simple-search" class="sr-only">Search</label>
                          <div class="relative w-full">
                              <Input name="search" />
                          </div>
                          <button 
                                class="p-2.5 ml-2 w-24 text-sm text-text-grey6 font-bold
                                bg-primary-brand
                                hover:bg-primary-green-l-10
                                disable:bg-basic-background
                                disable:text-color-grey2 
                                rounded-2xl">
                              {{hero('btn')}}
                          </button>
                      </form>
                      <button class="pt-5 text-primary-brand"> 
                          <div class="flex gap-2">
                          {{hero('lowongan')}} <img :src="icon" alt="" class="h-6 hover:ml-2 hover:delay-300 hover:duration-300 hover:ease-in-out">
                          </div>
                      </button>
                  </div>
                </div>
            </div>
            <div class="grid basis-1/2 content-center justify-center">
                <div data-aos="fade-up" data-aos-duration="1500">
                    <img 
                        class="object-contain h-[560px]" 
                        :src="image" 
                        alt=""
                    >
                </div>
            </div>
        </div>
    </section>
</MqResponsive>

<MqResponsive target="xs-sm">
    <section class="h-full">
        <div class="container px-6 mx-auto grid py-24">
            <!-- image -->
            <div class="grid basis-1/2 content-center justify-center">
              <img 
                  class="object-contain h-[255px]" 
                  :src="image" 
                  alt=""
              >
            </div>
            <!-- content -->
            <div class="grid basis-1/2 content-center pt-8">
                  <h1 class="text-h4 font-black">
                    {{hero('body')}}
                  </h1>
                  <span class="text-p1 max-w-xl">
                      {{hero('body')}}
                  </span>
  
                  <div id="search" class="pt-6 max-w-lg">
                      <form class="flex items-center">   
                          <label for="simple-search" class="sr-only">Search</label>
                          <div class="relative w-full">
                              <Input name="search" />
                          </div>
                          <button 
                                class="p-2.5 ml-2 w-20 text-sm text-text-grey6 font-bold 
                                bg-primary-brand
                                hover:bg-primary-green-l-10
                                disable:bg-basic-background
                                disable:text-color-grey2 
                                rounded-3xl">
                              {{hero('btn')}}
                          </button>
                      </form>
                      <button type="submit" class="pt-5 text-primary-brand"> 
                          <div class="flex gap-2 hover:w-8">
                          {{hero('lowongan')}} <img :src="icon" alt="" class="h-6">
                          </div>
                      </button>
                  </div>
            </div>
        </div>
    </section>
</MqResponsive>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import Input from "../Input.vue";
import { computed } from "@vue/reactivity";
import { useStore } from 'vuex';
import dataHero from '../../assets/data/karir/hero.json';
export default {
    components: {
        MqResponsive,
        Input
    },
    setup() {
        const store = useStore();
        const activeLanguage = computed(() => store.getters.activeLanguage);

        const hero = (string) => {
            return dataHero[activeLanguage.value][string];
        }
        
        return{hero}
    },
    data() {
        return {
            header: "Yuk, unlock potensi kamu bareng kami!",
            body: "Sigap, siap, santai, serius. Belajar dan asah kemampuan bersama-sama.",
            image: "/img/Careers/website illust-unlock your potential color 2.png",
            icon: "/img/icon/arrow right.png"
        }
    },
    method: {
        onSearch() {

        }
    }
};
</script>

<style>

</style>