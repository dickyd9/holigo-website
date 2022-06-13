<template>
  <section id="custom" class="w-full grid justify-center mb-96 my-20 md:mb-20 h-96">
      <div class="container px-12 mx-auto " :style="{
                    'background-image': `url(${(bg)})`,
                    'background-size': '100%'}">
        <div class="flex mt-8">
            <div class="max-w-[40vw] justify-around">
                <h1 class="text-h2 font-bold"> 
                    <span class="text-primary-brand">Costumize</span> {{header}}
                </h1>

                <h1 class="text-body2 pt-4">
                    {{body}}
                </h1>
                
                <div class="mt-6">
                    <Button>Request Trip</Button>
                </div>
            </div>
            <div class="w-full grid content-center justify-center">
                <img 
                    :src="image" 
                    alt=""
                    class="h-80">
            </div>
        </div>
      </div>
  </section>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
    name: "why",
    components: {
        Button,
    },
    data(){
        return{
            bg: "src/assets/img/Home/Backgrund/card_background_1.png",
            header: "perjalanan kamu",
            body: "Rancang perjalanan sesuai selera dan jadwal kamu, dan dapatkan harga terbaik supaya travel tetap on budget. Yuk langsung customize perjalanan kamu sekarang.",
            image: "src/assets/img/Home/website illust-customize your trip.png",
        };
    }
}
</script>

<style>

</style>