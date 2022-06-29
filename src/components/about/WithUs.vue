<template>
<div data-aos="fade-up" data-aos-duration="1500">
  <MqResponsive target="xl">
    <section class="grid justify-center mb-16" >
      <div class="container px-6 mx-auto">
        <div
          class="bg-[url('/src/assets/img/AboutUS/background/background_card_website_1.png')] bg-cover h-[600px] w-auto"
        >
          <div class="flex content-center">
            <div class=" py-20 pl-24">
              <h1 class="text-h1 font-bold text-left">Siap tumbuhkan potensi kamu bersama?</h1>

              <Button type="button" class="cursor-pointer mt-6">Yuk, Gabung</Button>
            </div>
            <div class="basis-1/2">
              <img :src="bg" alt="" class="h-[500px] pt-10">
            </div>
          </div>
        </div>
      </div>
    </section>
  </MqResponsive>

  <MqResponsive target="md-lg">
    <section class="grid justify-center mb-16" >
      <div class="container px-6 mx-auto">
        <div
          class="bg-[url('/src/assets/img/AboutUS/background/background_card_website_1.png')] bg-cover h-[400px] w-[1220px]"
        >
          <div class="flex content-center">
            <div class=" py-20 pl-24">
              <h1 class="text-h2 font-bold text-left">Siap tumbuhkan potensi kamu bersama?</h1>

              <Button type="button" class="cursor-pointer mt-6">Yuk, Gabung</Button>
            </div>
            <div class="basis-1/2">
              <img :src="bg" alt="" class="h-80 pt-10">
            </div>
          </div>
        </div>
      </div>
    </section>
  </MqResponsive>

  <MqResponsive target="xs-sm">
    <section class="grid justify-center mb-16" >
      <div class="container px-6 mx-auto">
        <div
          class="bg-[url('/src/assets/img/AboutUS/background/background_card_mobile_1.png')] bg-cover h-[468px] w-full"
        >
          <div class="grid">
            <div class="pt-12 pb-6 px-10">
              <h1 class="text-h4 font-bold text-left">Siap tumbuhkan potensi kamu bersama?</h1>

              <Button type="button" class="cursor-pointer mt-6 text-text-button">Yuk, Gabung</Button>
            </div>
            <div class="basis-1/2 flex justify-center">
              <img :src="bg" alt="" class="h-44">
            </div>
          </div>
        </div>
      </div>
    </section>
  </MqResponsive>
</div>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import Button from '@/components/Button.vue';
export default {
  name: "WithUs",
  components: {
        Button,
        MqResponsive
    },
  data() {
    return {
      bg: "src/assets/img/AboutUs/website-illust-5.png",
    };
  },
};
</script>

<style></style>
