<template>
  <MqResponsive :target="['xl']">
    <section class="h-full px-10">
      <div class="container px-6 mx-auto md:my-24 md:flex">
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

  <MqResponsive :target="['lg']">
    <section class="h-full px-10">
      <div class="container px-6 mx-auto md:my-24 md:flex">
        <div class="basis-1/2 items-center">
          <img :src="image" alt="" class="w-[465px]"/>
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

  <MqResponsive :target="['xs']">
    <section class="h-full px-5  pt-20">
      <div class="container px-6 mx-auto ">
        <!-- image -->
        <div class="basis-1/2 items-center flex justify-center">
          <img :src="image" alt="" class="w-64"/>
        </div>

          <div class="flex pt-6">
            <img :src="style" class="flex content-center w-20 pb-6">
          </div>

        <!-- content -->
        <div class="grid basis-1/2 content-center">
            <div class="text-h4 font-black">{{header}}</div>
            <span class="text-p2 pt-2">{{body}}</span>
            <Button type="button" class="cursor-pointer mt-6">Selengkapnya</Button>
        </div>
      </div>
    </section>
  </MqResponsive>
</template>

<script>
import Button from '@/components/Button.vue'
import { MqResponsive } from "vue3-mq";

export default {
  components:{
    Button,
    MqResponsive
  },
  data() {
    return {
      style :"src/assets/img/Home/illustration_ destination.png",
      image : "src/assets/img/Home/website illust-sahabat holiday color 2.png",
      header : "Sahabat holiday kamu",
      body : "Memberikan one-stop solution untuk semua kebutuhan kamu. Tiket pesawat, hotel, PPOB, dan sampai pembelian pulsa tersedia dalam satu platform simple yang gampang buat digunakan semua orang. Solusi liburan anti repot dan anti mahal!"
    };
  }
}
</script>

<style>

</style>