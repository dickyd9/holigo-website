<template>
<MqResponsive target="lg-xl">
  <header class="top-0 w-full z-10 fixed transition ease-in-out duration-50 delay-50"
  :class="{ 
    'transition ease-in-out duration-300 delay-50 bg-basic-white ': !view.topOfPage, 
    'transition ease-in-out duration-50 delay-50 opacity-0 -translate-y-6': !showNavbar 
    }">
    
    <nav class="
        container
        px-6
        py-5
        mx-auto
        flex 
        justify-between 
        items-center
      ">

      
      <div class="flex items-center justify-between">
        <img src="/img/logo/navbar-logo-white.png" alt="" class="w-36 md:w-24" v-if="$route.path == '/about'" :class="{ '../../public/img/logo/navbar-logo-color.png': !view.topOfPage}">
        <img src="/img/logo/navbar-logo-color.png" alt="" class="w-36 md:w-24" v-else>
      </div>

        <ul
          class="
            h-full
            flex-col
            mt-8
            pb-100
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
          <router-link :to="link.link" v-for="link in nav" :key="link.id">
            <li class="
                  font-bold 
                  text-basic-white 
                  hover:text-primary-brand 
                  hover:border-b-2 
                  hover:border-b-primary-brand" 
                v-if="$route.path == '/about'" 
                :class="{ 'text-basic-black': !view.topOfPage}"> 
              {{link.content}} 
              </li>

            <li class="font-bold hover:text-primary-brand hover:border-b-2 hover:border-b-primary-brand" v-else> {{link.content}} </li>
          </router-link>
          <Toggle/>
        </ul>
    </nav>

  </header>
</MqResponsive>

<MqResponsive target="xs-md">
  <header 
        class="top-0 w-full z-10 fixed transition ease-in-out duration-50 delay-50"
        :class="{ 
          'transition ease-in-out duration-300 delay-50 bg-basic-white ': !view.topOfPage, 
          'transition ease-in-out duration-50 delay-50 opacity-0 -translate-y-6': !showNavbar 
          }">
    <nav class="
        container
        px-6
        py-5
        mx-auto
        flex
        flex-col 
        justify-between
      ">
      <div class="flex items-center justify-between">
        <img src="/img/logo/navbar-logo-white.png" alt="" class="w-24" v-if="$route.path == '/about'" :class="{ '../../public/img/logo/navbar-logo-color.png': !view.topOfPage}">
        <img src="/img/logo/navbar-logo-color.png" alt="" class="w-24" v-else>

        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex">
          <button
            type="button"
            class="
              text-gray-800
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
        </div>
      </div>

    <!-- if page about -->
    <ul
    :class="showMenu ? 'grid' : 'hidden' "
    class="h-full
          flex-col
          mt-8
          pb-100
          space-y-4"
    v-if="$route.path == '/about'"
    >
      <router-link :to="link.link" v-for="link in nav" :key="link.id">
        <li class="
              list-none
              font-bold
              text-basic-white 
              hover:text-primary-brand 
              hover:border-b-2 
              hover:border-b-primary-brand" 
            v-if="$route.path == '/about'" 
            :class="{ 'text-basic-black': !view.topOfPage}"> 
          {{link.content}} 
          </li>
        <li class="list-none font-bold hover:text-primary-brand hover:border-b-2 hover:border-b-primary-brand" v-else> {{link.content}} </li>
      </router-link>
      <Toggle/>
    </ul>
    <!-- else -->
    <ul
    :class="showMenu ? 'grid bg-basic-white' : 'hidden' "
    class="h-full
          flex-col
          mt-8
          pb-100
          space-y-4"
    v-else
    >
      <router-link :to="link.link" v-for="link in nav" :key="link.id">
        <li class="
              list-none
              font-bold
              text-basic-white 
              hover:text-primary-brand 
              hover:border-b-2 
              hover:border-b-primary-brand" 
            v-if="$route.path == '/about'" 
            :class="{ 'text-basic-black': !view.topOfPage}"> 
          {{link.content}} 
          </li>
        <li class="list-none font-bold hover:text-primary-brand hover:border-b-2 hover:border-b-primary-brand" v-else> {{link.content}} </li>
      </router-link>
    <Toggle/>
    </ul>
    </nav>
  </header>
</MqResponsive>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import Toggle from '../components/Toggle.vue';
export default {
  components: {
        MqResponsive,
        Toggle
    },
  data() {
    return {
      nav: [
        {  
          "id": 1,
          "link": "/",
          "content": "Beranda"
        },

        {  
          "id": 2,
          "link": "/about",
          "content": "Tentang Kami"
        },

        {  
          "id": 3,
          "link": "/karir",
          "content": "Karir"
        },
      ],
      showMenu: false,
      closeMenu: false,
      value: true,
      showNavbar: true,
      lastScrollPosition: 0,
      toggleActive: false,
      view: {
        topOfPage: true
      }
    }
  },
  mounted(){
    window.addEventListener('scroll', this.onScroll)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },

  beforeMount() { 
    window.addEventListener('scroll', this.handleScroll)
  },
  
  methods: {
    handleScroll(){
      if(window.pageYOffset>0){
        if(this.view.topOfPage) this.view.topOfPage = false
      } else {
        if(!this.view.topOfPage) this.view.topOfPage = true
      }
    },

    onScroll () {
        // Get the current scroll position
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
        if (currentScrollPosition < 0) {
          return
        }
        // Here we determine whether we need to show or hide the navbar
        this.showNavbar = currentScrollPosition < this.lastScrollPosition
        // Set the current scroll position as the last scroll position
        this.lastScrollPosition = currentScrollPosition
      }
  }
};
</script>


<style scoped>


</style>