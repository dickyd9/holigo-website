<template>
  <section class="md:h-full px-10 mt-auto">
      <div class="container px-6 mx-auto my-24 md:flex">
        <div class="basis-1/2 items-center ">
          <div class="w-full grid justify-center">
            <img :src="image" alt="" class="w-96">
          </div>
        </div>
        <div class="grid basis-1/2 content-center">
            <img :src="style" class="w-20 pb-6">
            <div class="text-h3 font-black">{{header}}</div>
            <span class="pt-2">{{body}}</span>
            <Button class="mt-6">Selengkapnya</Button>
        </div>
      </div>
  </section>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  components:{
    Button,
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