<template>
  <div class="md:w-[40rem] ">
    <div class="static px-6 py-12 h-56 md:h-72 rounded-3xl overflow-hidden shadow-xl bg-basic-white">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
};
</script>

<style></style>
