<template>
  <section id="work" :style="{'background-image': `url(${(bg)})`,'background-size': '100vw'}" class="h-full">
      <div class="container px-6 mx-auto my-20 py-12">
        <div id="text" class="text-center text-text-grey6">
            <div class="text-h3 font-bold">
              <span class="text-primary-brand">Mending</span> {{header}}
            </div>
            <div class="text-body2">{{body}}</div>
        </div>
        <div id="text" class="pt-10 flex justify-between px-12">
            <div class="pt-6 pl-4 shadow-md bg-basic-white rounded-2xl h-[236px] w-[368px]" v-for="work in card" :key="work.id">
            <img :src="work.img" alt="" class="w-32">  
              <h1 class="text-h6 font-semibold">{{work.header}}</h1>
              <span class="text-body4 font-medium">{{work.content}}</span>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: "work",
  data() {
    return {
      bg: "src/assets/img/Home/Backgrund/background_2.png",
      header: "kerja di holigo karena...",
      body: "Alasan kenapa kamu cocok tumbuh bareng Holigo",

      card: [
              {  
                  "id": 1,
                  "img": "src/assets/img/Home/Budaya holigo/website illust-serius tapi santai.png",
                  "header": "Santai Tapi Serius",
                  "content": "Work hard, Play hard bersama - sama"
              },

              {
                  "id": 2,
                  "img": "src/assets/img/Home/Budaya holigo/website illust icon-peduli kenyamanan.png",
                  "header": "Peduli Kenyamananmu",
                  "content": "Kamu boleh menggunakan casual yang santai "
              },

              {
                  "id": 3,
                  "img": "src/assets/img/Home/Budaya holigo/website illust icon-peduli dengan kesehatan.png",
                  "header": "Peduli Kesehatan",
                  "content": "Kami peduli dengan kesehatan kamu"
              }
            ]
    };
  },

};
</script>

<style>

</style>