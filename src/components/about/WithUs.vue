<template>
  <section class="grid justify-center mb-16">
    <div class="container px-6 mx-auto">
      <div
        class="bg-[url('src/assets/img/Illustrasi/About us/background/background_card_website_1.png')] bg-cover"
      >
        <div class="grid content-center md:pl-[70vh] ">
          <div class="grid">
            <h1 class="text-h2 font-bold">Siap tumbuhkan potensi kamu bersama?</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { MqResponsive } from "vue3-mq";
export default {
  name: "WithUs",
  components: {
        MqResponsive
    },
  data() {
    return {
      bg: "src/assets/img/Illustrasi/About us/background/background_card_website_1.png",
    };
  },
};
</script>

<style></style>
