<template>
  <MqResponsive :target="['xl']">
    <section class="h-full px-10">
      <div class="container mx-auto mb-24 flex">
        <div class="basis-1/2 items-center">
          <img :src="image" alt="" class="w-[586px]"/>
        </div>
        <div class="grid basis-1/2 content-center">
            <img :src="style" class="w-20 pb-6">
            <div class="text-h2 font-black">{{header}}</div>
            <span class="pt-2 text-body3">{{body}}</span>
            <Button type="button" class="cursor-pointer mt-6">Selengkapnya</Button>
        </div>
      </div>
    </section>
  </MqResponsive>

  <MqResponsive target="md-lg">
    <section class="h-full px-10">
      <div class="container px-6 mx-auto md:my-24 md:flex">
        <div class="basis-1/2 items-center">
          <img :src="content('image')" alt="" class="w-[465px]"/>
        </div>
        <div class="grid basis-1/2 content-center">
            <img :src="content('style')" class="w-20 pb-6">
            <div class="text-h2 font-black">{{content('header')}}</div>
            <span class="pt-2 text-body3">{{content('body')}}</span>
            <Button type="button" class="cursor-pointer mt-6">{{content('btn')}}</Button>
        </div>
      </div>
    </section>
  </MqResponsive>

  <MqResponsive target="xs-sm">
    <section class="h-full px-5 py-20">
      <div class="container px-6 mx-auto ">
        <!-- image -->
        <div class="basis-1/2 items-center flex justify-center">
          <img :src="translateString('image')" alt="" class="w-64"/>
        </div>

          <div class="flex pt-6">
            <img :src="translateString('style')" class="flex content-center w-20 pb-6">
          </div>

        <!-- content -->
        <div class="grid basis-1/2 content-center">
            <div class="text-h4 font-black">{{translateString('header')}}</div>
            <span class="text-p2 pt-2">{{translateString('body')}}</span>
            <Button type="button" class="cursor-pointer mt-6">Selengkapnya</Button>
        </div>
      </div>
    </section>
  </MqResponsive>
</template>

<script setup>
import Button from '@/components/Button.vue'
import { MqResponsive } from "vue3-mq";
import { computed } from "@vue/reactivity";
import { useStore } from 'vuex';
import dataContent from '../../assets/data/beranda/content.json';
const store = useStore();
const activeLanguage = computed(() => store.getters.activeLanguage);

const content = (string) => {
  return dataContent[activeLanguage.value][string];
}
</script>

<style>

</style>