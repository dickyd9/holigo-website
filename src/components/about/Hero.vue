<template>
    <MqResponsive :target="['xl']">
        <section id="hero" :style="{'background-image': `url(${(bg)})`,'background-size': '100vw'}" class="h-[100vh] flex flex-wrap">
                <div class="container px-6 mx-auto">
                    <div data-aos="fade-up" data-aos-duration="1500">
                    <div class="grid justify-items-center items-center py-80">
                        <h1 class="font-black text-center text-h1 max-w-2xl text-basic-white">
                            <span class="text-primary-brand">{{hero('header1')}}</span> {{hero('header2')}}
                        </h1>
                        <span class="text-center pt-6 text-body1 font-thin max-w-md text-basic-white">
                            {{hero('body')}}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </MqResponsive>

    <MqResponsive target="md-lg">
        <section id="hero" :style="{'background-image': `url(${(bg)})`,'background-size': '100vw'}" class="h-[100vh] flex flex-wrap">
            <div class="container px-6 mx-auto">
                <div data-aos="fade-up" data-aos-duration="1500">
                    <div class="grid justify-items-center items-center py-52">
                        <h1 class="font-black text-center text-h2 text-basic-white md:max-w-3xl md:text-h1">
                            <span class="text-primary-brand">{{hero('header1')}}</span> {{hero('header2')}}
                        </h1>
                        <span class="text-center pt-6 text-body3 font-thin max-w-md text-basic-white">
                            {{hero('body')}}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </MqResponsive>

    <MqResponsive target="xs-sm">
        <section id="hero" 
        class="h-[100vh] flex flex-wrap bg-[url('/img/AboutUs/hero-background.png')] bg-cover">
            <div data-aos="fade-up" data-aos-duration="1500">
                <div class="container px-6 mx-auto">
                    <div class="grid justify-items-center items-center py-72">
                        <h1 class="font-black text-center text-h4 text-basic-white md:max-w-3xl md:text-h1">
                            <span class="text-primary-brand">Semua</span> {{header}}
                        </h1>
                        <span class="text-center pt-6 text-p1 font-thin max-w-md text-basic-white">
                            {{body}}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </MqResponsive>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import { computed } from "@vue/reactivity";
import { useStore } from 'vuex';
import dataHero from '../../assets/data/about/hero.json';

export default {
    name: "hero",
    components:{
        MqResponsive
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
            bg: "/img/AboutUs/hero-background.png",
            header: "kebutuhan dalam satu aplikasi",
            body: "One-stop solution untuk semua kebutuhan lifestyle kamu lengkap dalam satu aplikasi yang simple."
        };
    }
};
</script>

<style>

</style>