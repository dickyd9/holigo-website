<template>
  <div class="" >
    <Switch
      v-model="enabled"
      :class="enabled ? 'bg-basic-background' : 'bg-basic-background'"
      class="relative inline-flex h-[34px] w-[70px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      <span
        aria-hidden="true"
        :class="enabled ? 'translate-x-9' : 'translate-x-0'"
        class="pointer-events-none inline-block h-[30px] w-[30px] transform rounded-full bg-primary-brand shadow-lg ring-0 transition duration-200 ease-in-out"
      >
        <span class="h-full grid content-center text-p3 text-white font-bold">{{enabled ? 'ID' : 'EN'}}</span>
      </span>
        <span class="absolute grid content-center h-full w-full text-p3 px-3 font-bold"
        :class="enabled ? 'flex justify-start'  : 'flex justify-end'">{{enabled ? 'EN' : 'ID'}}</span>
    </Switch>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Switch } from '@headlessui/vue'
import { useStore } from 'vuex';
const store = useStore();

const enabled = ref(false);

const languages = [
 {
    language : 'id',
    label : 'ID'
 },
 {
   language : 'en',
   label : 'EN'
 }
];

const changeActiveLanguage = (language) => {
  store.dispatch('setLanguage', language)
};

watch (enabled, (enabled, prev) => {
  if (enabled){
    changeActiveLanguage('id');
  } else {
    changeActiveLanguage('en');
  }
})
</script>