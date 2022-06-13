<template>
  <section class="md:h-screen">
    <div class="container px-6 mx-auto md:pt-20 md:flex flex-wrap">
      <div class="grid basis-1/2 transition ease-in-out duration-300 ">
        <div class="flex flex-col justify-center">
          <div class="font-black text-center md:text-left text-h3 md:text-h1"> 
           <div class="pb-2 flex"> 
             {{heroItem.header1}}<img :src="heroItem.pattern" alt="" class="w-8 h-8 md:w-16 md:h-16" />
           </div>
            <div class="text-basic-black flex flex-wrap">
              your <div class="text-primary-brand pl-4"> {{heroItem.header2}}</div>
            </div>
          </div>
          <span class="pt-6 text-body1 font-medium max-w-lg text-center md:text-left ">
            {{heroItem.body}}
          </span>
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
      <div class="grid basis-1/2">
        <div class="md:justify-items-center">
          <img 
              class="h-96 my-20 w-fit md:my-0 md:h-full" 
              :src="heroItem.image" 
              alt=""
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { AOS } from 'aos';
export default {
  onMounted() {
    AOS.init();
  },
  data() {
    return {
      heroItem: {
        header1: 'Holigo simplify',
        header2: ' lifestyle',
        body: 'simple nyaman dan dapat di andalkan untuk kebutuhan traveling kamu.',
        pattern: "src/assets/img/Home/pattern-1.png",
        image: "src/assets/img/Home/website illust-hero color 1.png"
      },

      product: [
        {
          id: 1,
          img: "src/assets/img/Home/website illust-15k+ hotel 1.png",
          title: "15K+",
          body: "Pilihan Hotel"
        },

        {
          id: 2,
          img: "src/assets/img/Home/website illust-75+ maskapai 1.png",
          title: "75+",
          body: "Maskapai Penerbangan"
        },

        {
          id: 3,
          img: "src/assets/img/Home/website illust icon-20+ produk 1.png",
          title: "20+",
          body: "Product Kami"
        }
      ]
    }
  }
};
</script>

<style>

</style>