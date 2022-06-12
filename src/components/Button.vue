<template>
  <button
    :type="type"
    class="
      text-btn 
      font-bold 
      text-text-grey6 
      bg-primary-brand  
      w-40
      px-6 
      py-3 
      rounded-3xl">
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