<template>
<div data-aos="fade-up" data-aos-duration="1500">
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
                        <span class="text-primary-brand">Costumize</span> {{costum('header2')}}
                    </h1>

                    <h1 class="text-body3 pt-4">
                        {{costum('body')}}
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
        <div class="container px-6 bg-[url('/img/Home/Backgrund/background_card_mobile.png')] bg-contain">
            <div class="pt-10 text-left px-6"> 
                <div class="grid pb-2">
                    <h1 class="text-h4 font-black">
                    <span class="text-primary-brand">{{costum('header1')}}</span> {{costum('header2')}}</h1>
                    <h1 class="text-p1 pt-2">{{costum('body')}}</h1>
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
</div>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import Button from '@/components/Button.vue'
import { computed } from "@vue/reactivity";
import { useStore } from 'vuex';
import dataCos from '../../assets/data/beranda/custom.json';

export default {
    name: "customize",
    components: {
        Button,
        MqResponsive 
    },
    setup() {
        const store = useStore();
        const activeLanguage = computed(() => store.getters.activeLanguage);

        const costum = (string) => {
            return dataCos[activeLanguage.value][string];
        }

        return {costum}
    },
    data(){
        return{
            bg: "img/Home/Backgrund/card_background_1.png",
            header: "perjalanan kamu",
            body: "Rancang perjalanan sesuai selera dan jadwal kamu, dan dapatkan harga terbaik supaya travel tetap on budget. Yuk langsung customize perjalanan kamu sekarang.",
            image: "/img/Home/website illust-customize your trip.png",
        };
    }
}
</script>

<style>

</style>