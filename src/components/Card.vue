<template>
  <div class="md:w-[40rem] md:h-60">
    <div class="static px-6 py-12 h-60 rounded-3xl overflow-hidden shadow-xl bg-basic-white">
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
