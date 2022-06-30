<template>
    <MqResponsive target="xl">
    <section class="h-full px-10 mx-auto my-32">
        <div class="container px-6 mx-auto flex odd:flex-row even:flex-row-reverse" 
             v-for="content in contentList" :key="content.id">
             <div data-aos="fade-up" data-aos-duration="1500">
                <div class="basis-1/2 grid justify-center ">
                    <img :src="content.image" alt="" class="h-[403px]">
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500">\
                <div class="grid basis-1/2 content-center">
                    <img src="../../assets/img/Home/illustration_ destination.png " class="w-20 mb-6">
                    <h1 class="text-h3 font-black">{{content.header}}</h1>
                    <span class="pt-2">{{content.content}}</span>
                </div>
            </div>
        </div>
    </section>
    </MqResponsive>

    <MqResponsive target="md-lg">
    <section class="h-full px-10 mx-auto my-32">
        <div class="container px-6 mx-auto flex odd:flex-row even:flex-row-reverse" 
             v-for="content in content('card')" :key="content.id">
                <div class="basis-1/2 grid justify-center ">
                    <div data-aos="fade-up" data-aos-duration="1500">
                        <img :src="content.img" alt="" class="h-[403px]">
                    </div>
                </div>
                <div class="grid basis-1/2 content-center">
                    <div data-aos="fade-up" data-aos-duration="1500">
                        <img src="../../assets/img/Home/illustration_ destination.png " class="w-20 mb-6">
                        <h1 class="text-h3 font-black">{{content.header}}</h1>
                        <span class="pt-2">{{content.content}}</span>
                    </div>
                </div>
        </div>
    </section>
    </MqResponsive>

    <MqResponsive target="xs-sm">
    <section class="h-full px-6 mx-auto my-14 text-center">
        <div class="container px-6 mx-auto grid mb-14" v-for="content in content('card')" :key="content.id">
            <div class="grid justify-center mb-12">
                <img :src="content.img" alt="" class="h-[230px]">
            </div>
            <div class="grid content-center">
                <h1 class="text-h6 font-black">{{content.header}}</h1>
                <span class="pt-2 text-p1">{{content.content}}</span>
            </div>
        </div>
    </section>
    </MqResponsive>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import { computed } from "@vue/reactivity";
import { useStore } from 'vuex';
import contentList from '../../assets/data/about/content.json';
export default {
    components:{
        MqResponsive
    },
    setup() {
        const store = useStore();
        const activeLanguage = computed(() => store.getters.activeLanguage);

        const content = (string) => {
            return contentList[activeLanguage.value][string];
        }

        return{content}
    },
    data() {
        return {
        contentList: [
                        {  
                            "id": 1,
                            "image": "src/assets/img/AboutUs/website-illust-3.png",
                            "header": "Holigo - Sahabat Holiday kamu",
                            "content": "Memberikan one-stop solution untuk semua kebutuhan kamu. Tiket pesawat, hotel, PPOB, dan sampai pembelian pulsa tersedia dalam satu platform simple yang gampang buat digunakan semua orang. Solusi liburan anti repot dan anti mahal!"
                        },

                        {
                            "id": 2,
                            "image": "src/assets/img/AboutUs/website-illust-4.png",
                            "header": "Mudah, Murah, Meriah",
                            "content": "Memberikan one-stop solution untuk semua kebutuhan kamu. Tiket pesawat, hotel, PPOB, dan sampai pembelian pulsa tersedia dalam satu platform simple yang gampang buat digunakan semua orang. Solusi liburan anti repot dan anti mahal!"
                        },

                        {
                            "id": 3,
                            "image": "src/assets/img/AboutUs/website-illust-2.png",
                            "header": "Selalu siap menemani",
                            "content": "Kenyamanan dalam transaksi menjadi prioritas Holigo. Pintu Holigo selalu terbuka 24 jam setiap hari. Apa pun pertanyaannya, Customer Service officer Holigo siap dihubungi kapan pun dan di mana pun. "
                        },

                        {
                            "id": 4,
                            "image": "src/assets/img/AboutUs/website-illust-1.png",
                            "header": "Berkembang bersama waktu",
                            "content": "Holigo selalu berinovasi dalam pengembangan teknologi untuk terus mengikuti adaptasi teknologi Indonesia agar mudah dan nyaman digunakan. Travelling sekarang jadi simple dan mudah!"
                        }
                    ]
        };
    },
};
</script>

<style>

</style>