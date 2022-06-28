<template>
<MqResponsive :target="['xl']">
    <section id="custom" 
             class="w-full grid justify-center py-20 mb-20">

        <div class="container w-screen h-[600px] " 
             :style="{ 'background-image': `url(${(bg)})`, 'background-size': '100%'}">

             <div class="flex mt-24 mx-20">
                <div class="max-w-[700px] justify-around">
                    <h1 class="text-h1 font-bold"> 
                        <span class="text-primary-brand">Costumize</span> {{header}}
                    </h1>

                    <h1 class="text-body3 pt-4">
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
                        class="h-[50vh]">
                </div>
            </div>
        </div>
    </section>
</MqResponsive>

<MqResponsive target="md-lg">
    <section id="custom" 
             class="w-full grid justify-center py-16 mb-12">

        <div class="container w-screen h-[500px] " 
             :style="{ 'background-image': `url(${(bg)})`, 'background-size': '100%'}">

             <div class="flex mt-24 mx-20">
                <div class="max-w-[700px] justify-around">
                    <h1 class="text-h1 font-bold"> 
                        <span class="text-primary-brand">Costumize</span> {{header}}
                    </h1>

                    <h1 class="text-body3 pt-4">
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
</MqResponsive>

<MqResponsive target="xs-sm">
    <section class="grid justify-center mb-24">
        <div class="container px-6 bg-[url('src/assets/img/Home/Backgrund/background_card_mobile.png')] bg-contain">
            <div class="pt-10 text-left px-6"> 
                <div class="grid pb-2">
                    <h1 class="text-h4 font-black">
                    <span class="text-primary-brand">Costumize</span> {{header}}</h1>
                    <h1 class="text-p1 pt-2">{{body}}</h1>
                </div>
                <div class="py-4">
                    <Button>Request Trip</Button>
                </div>
                <div class="flex justify-center">
                    <img :src="image" alt="" class="h-56 bottom-2">
                </div>
            </div>
        </div>
    </section>
</MqResponsive>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import Button from '@/components/Button.vue'
export default {
    name: "why",
    components: {
        Button,
        MqResponsive
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