<template>
<MqResponsive :target="['xl']">
    <section class="grid justify-center my-24">
    <div class="container px-6 mx-auto">
      <div
        class="bg-[url('src/assets/img/Home/Backgrund/download-card.png')] bg-cover md:w-[150vh] md:h-[70vh] grid"
      >
        <div class="grid content-center md:pl-[70vh] ">
          <div class="grid">
            <h1 class="text-h1 font-bold">Worth the Wait</h1>
            <h1 class="text-body1">Heading to your phone soon!</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</MqResponsive>

<MqResponsive :target="['lg']">
    <section class="grid justify-center mb-16">
    <div class="container px-6 mx-auto">
      <div
        class="bg-[url('src/assets/img/Home/Backgrund/download-card.png')] bg-cover md:w-[150vh] md:h-[70vh] grid"
      >
        <div class="grid content-center md:pl-[70vh] ">
          <div class="grid">
            <h1 class="text-h1 font-bold">Worth the Wait</h1>
            <h1 class="text-body1">Heading to your phone soon!</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</MqResponsive>

<MqResponsive :target="['sm']">
  
</MqResponsive>


</template>

<script>
import { MqResponsive } from "vue3-mq";
export default {
  name: "card",
  components: {
        MqResponsive
    },
  data() {
    return {
      bg: "src/assets/img/Home/Backgrund/download-card.png",
    };
  },
};
</script>

<style></style>
