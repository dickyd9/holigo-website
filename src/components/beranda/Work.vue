<template>
  <section id="work" class="h-full">
      <div class="container px-6 mx-auto my-20 py-12">
        <div id="text" class="text-center text-text-grey6">
            <div class="text-h3 font-bold">
              <span class="text-primary-brand">Mending</span> kerja di holigo karena...
            </div>
            <div class="text-body2">Alasan kenapa kamu cocok tumbuh bareng Holigo</div>
        </div>
        <div id="text" class="pt-12 flex justify-between px-12">
            <div class="p-6 shadow-md bg-basic-white rounded-2xl h-[236px] w-[368px]" v-for="work in workItem" :key="work.id">
            <img src="../../assets/img/illustration/exmp.png" alt="" class="w-32">  
              <h1 class="text-h6 font-semibold">{{work.header}}</h1>
              <span class="text-body4 font-medium">{{work.content}}</span>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
import Work from './data/work.json'
export default {
  data() {
    return {
      workItem: Work,

    };
  },

};
</script>

<style>
#work {
  background-image: url("../../assets/img/Home/Backgrund/background_2.png");
  background-size: 100vw;
}
</style>