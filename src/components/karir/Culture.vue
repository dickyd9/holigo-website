<template>
<MqResponsive target="xl">
  <section class="h-full mb-52">
    <div class="container px-6 mx-auto">
      <div class="justify-center text-center">
        <h1 class="text-h3 font-bold">{{header}} <span class="text-primary-brand">Holigo</span></h1>
        <span>{{body}}</span>
      </div>
      <div class="grid grid-cols-2 mx-24">
        <div id="content-culture" class="flex pt-12" v-for="culture in culturList" :key="culture.id">
          <img :src="culture.image" alt="" class="h-24">
          <div class="pl-6 grid">
            <h1 class="text-h4 font-bold">{{culture.header}}</h1>
            <h1>{{culture.content}}</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</MqResponsive>

<MqResponsive target="md-lg">
  <section class="h-full mb-52">
    <div class="container px-6 mx-auto">
      <div class="justify-center text-center">
        <h1 class="text-h3 font-bold">{{header}} <span class="text-primary-brand">Holigo</span></h1>
        <span>{{body}}</span>
      </div>
      <div class="grid grid-cols-2 mx-24">
        <div id="content-culture" class="flex pt-12" v-for="culture in culturList" :key="culture.id">
          <img :src="culture.image" alt="" class="h-24">
          <div class="pl-6 grid">
            <h1 class="text-h4 font-bold">{{culture.header}}</h1>
            <h1>{{culture.content}}</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</MqResponsive>

<MqResponsive target="xs-sm">
  <section class="h-full mb-24">
    <div class="container px-6 mx-auto">
      <!-- Title -->
      <div class="justify-center text-center">
        <h1 class="text-h4 font-bold">{{header}} 
          <span class="text-primary-brand">Holigo</span>
        </h1>
        <span class="text-p1">{{body}}</span>
      </div>
      <!-- Content -->
      <div class="grid">
        <div id="content-culture" class="flex pt-12" v-for="culture in culturList" :key="culture.id">
          <img :src="culture.image" alt="" class="h-14">
          <div class="pl-6 grid">
            <h1 class="text-body3 font-bold">{{culture.header}}</h1>
            <h1 class="text-p1">{{culture.content}}</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</MqResponsive>
</template>

<script>
import { MqResponsive } from "vue3-mq";
export default {
    components: {
        MqResponsive
    },
     data() {
    return {
      header: "Budaya team",
      body: "Team Holigo itu santai tapi selalu siap. Yuk gabung keluarga besar Holigo.",

      culturList: [
                      {  
                          "id": 1,
                          "image": "src/assets/img/Careers/budaya holigo/website illust-serius tapi santai.png",
                          "header": "Santai Tapi Serius",
                          "content": "Work hard, Play hard bersama -sama "
                      },

                      {  
                          "id": 2,
                          "image": "src/assets/img/Careers/budaya holigo/website illust icon-peduli kenyamanan.png",
                          "header": "Peduli Kenyamananmu",
                          "content": "Kamu boleh menggunakan casual yang santai "
                      },

                      {  
                          "id": 3,
                          "image": "src/assets/img/Careers/budaya holigo/website illust icon-peduli dengan kesehatan.png",
                          "header": "Peduli Kesehatan Kamu",
                          "content": "Kami peduli dengan kesehatan kamu"
                      },

                      {  
                          "id": 4,
                          "image": "src/assets/img/Careers/budaya holigo/website illust icon-peduli dengan hakmu.png",
                          "header": "Peduli Hak Kamu",
                          "content": "Kami peduli hak kamu sebagai tenaga kerja"
                      },

                      {  
                          "id": 5,
                          "image": "src/assets/img/Careers/budaya holigo/website illust icon-semua disediakan.png",
                          "header": "Semua Disediain",
                          "content": "Laptop, Coffee, dan lainnya kami sediain"
                      },

                      {  
                          "id": 6,
                          "image": "src/assets/img/Careers/budaya holigo/website illust icon-peduli potensi.png",
                          "header": "Peduli Potensimu",
                          "content": "Kami mau potensi kamu terus berkembang"
                      }
                  ]

    };
  },
};
</script>

<style>

</style>