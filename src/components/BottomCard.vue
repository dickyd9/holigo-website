<template>
  <section id="cardBtm" class="grid justify-center py-20">
      <div class="grid h-[22rem] w-full" 
      :style="{'background-image': `url(${(bg)})`, 'background-size': '100vw'}">
        <div class="relative pl-96 pr-24 justify-center">
          <div class="pt-32 w-full flex flex-col">
            <h1 class="text-h2 font-bold">Worth the Wait</h1>
            <h1>Heading to your phone soon!</h1>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: "cardBtm",
  data() {
    return{
      bg: "src/assets/img/Home/download card.png",
    }
  }
};
</script>

<style>

</style>