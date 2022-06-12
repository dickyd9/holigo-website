<template>
  <section class="grid justify-center mb-16">
    <div class="container px-6 mx-auto">
      <div
        class="bg-[url('src/assets/img/Home/Backgrund/download-card.png')] bg-cover md:w-[150vh] md:h-[70vh] grid"
      >
        <div class="grid pl-[80vh] content-center">
          <div class="grid">
            <h1 class="text-h1 font-bold">Worth the Wait</h1>
            <h1 class="text-body1">Heading to your phone soon!</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "card",
  data() {
    return {
      bg: "src/assets/img/Home/Backgrund/download-card.png",
    };
  },
};
</script>

<style></style>
