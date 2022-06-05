<template>
  <section class="grid justify-items-center py-10">
        <div class="flex flex-col text-center">
            <h1 class="text-2xl font-black">Why Heading</h1>
            <span>Why sub</span>
        </div>
        <div class="flex flex-col pt-10 gap-12 md:flex-row">
            <div class="max-w-xs rounded overflow-hidden shadow-lg" v-for="card in cards">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{{card.header}}</div>
                    <p class="text-green-l20 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
            </div>
        </div>
  </section>
</template>

<script>
import cardWhy from '../../assets/data/cardWhy.json'
export default {
     data() {
    return {
      cards: cardWhy,
    };
  },
};
</script>

<style>

</style>