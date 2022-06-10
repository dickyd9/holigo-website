<template>
  <button
    :type="type"
    class="
      text-btn 
      font-bold 
      text-text-grey6 
      bg-primary-brand  
      w-full 
      px-6 
      py-3 
      rounded-3xl 
      w-40">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'save',
    },
  },
};
</script>