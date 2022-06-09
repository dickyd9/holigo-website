<template>
  <section class="md:h-screen">
    <div class="container px-6 mx-auto md:pt-20 md:flex flex-wrap">
      <div class="grid basis-1/2">
        <div class="flex flex-col justify-center">
          <h1 class="font-black max-w-lg text-center text-h3 md:text-left md:text-h1"> {{heroItem.header}}  <span class="text-primary-brand">Lifestyle</span>
            
            <img :src="heroItem.pattern" alt="" class="absolute w-20 md:left-[70vh] lg:top-[25vh] lg:left-[65vh]">
          </h1>
          <span class="pt-6 text-body1 font-medium max-w-lg text-center md:text-left ">
            {{heroItem.body}}
          </span>
          <div class="flex pt-6 gap-6 max-w-lg">
            <div class="flex" v-for="productList in product">
              <div id="icon" class="pr-2 w-20">
                <img :src="productList.img" alt="">
              </div>
              <div id="text">
                <div class="text-h4 font-semibold">{{productList.title}}</div>
                <div class="text-body3 font-medium max-w-s">{{productList.body}}</div>
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
export default {
  data() {
    return {
      heroItem: {
        header: 'Holigo simplify your',
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