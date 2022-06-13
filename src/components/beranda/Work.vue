<template>
  <section
    id="work"
    class="h-full bg-[url('src/assets/img/Home/Backgrund/background_2.png')] bg-cover"
  >
    <div class="container mx-auto pt-20">
      <div id="text" class="text-center text-text-grey6">
        <div class="text-h3 font-bold">
          <span class="text-primary-brand">Mending</span> {{ header }}
        </div>
        <div class="text-body2">{{ body }}</div>
      </div>

      <div id="text" class="pt-10 flex justify-between">
        <span class="grid content-center text-right"> <img :src="arrowLeft" alt="" class="h-12"> </span>

        <div class="flex gap-2">
          <div
            class="grid pt-6 pb-16 px-4 shadow-md bg-basic-white rounded-2xl md:h-[236px] md:w-[368px]"
            v-for="work in card"
            :key="work.id"
          >
            <img :src="work.img" alt="" class="w-28" />
            <h1 class="text-h6 font-semibold">{{ work.header }}</h1>
            <span class="text-body4 font-medium">{{ work.content }}</span>
          </div>
        </div>
        <span class="grid content-center text-right"> <img :src="arrowRight" alt="" class="h-12"> </span>
      </div>
    </div>

    <div
      id="stepper"
      class="container px-6 mx-auto mb-20 grid justify-center py-10"
    >
      <ul class="dots flex gap-6">
        <li>List</li>
        <li>List</li>
        <li>List</li>
      </ul>
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

      arrowLeft: "src/assets/img/icon/pagination_icon_left.png",
      arrowRight: "src/assets/img/icon/pagination_icon_right.png",

      card: [
        {
          id: 1,
          img: "src/assets/img/Home/Budaya holigo/website illust-serius tapi santai.png",
          header: "Santai Tapi Serius",
          content: "Work hard, Play hard bersama - sama",
        },

        {
          id: 2,
          img: "src/assets/img/Home/Budaya holigo/website illust icon-peduli kenyamanan.png",
          header: "Peduli Kenyamananmu",
          content: "Kamu boleh menggunakan casual yang santai ",
        },

        {
          id: 3,
          img: "src/assets/img/Home/Budaya holigo/website illust icon-peduli dengan kesehatan.png",
          header: "Peduli Kesehatan",
          content: "Kami peduli dengan kesehatan kamu",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
