<template>
  <header class="top-0 w-full z-10 md:fixed transition ease-in-out duration-50 delay-50" 
          :class="{ 'transition ease-in-out duration-300 delay-50 bg-basic-white ': !view.topOfPage, 'transition ease-in-out duration-50 delay-50 opacity-0 -translate-y-6': !showNavbar }"
          >
    <nav
      class="
        container
        px-6
        py-5
        mx-auto
        md:flex md:justify-between md:items-center
      "
    >
      <div class="flex items-center justify-between">
        <img src="../../public/img/logo/navbar-logo-white.png" alt="" class="w-36 md:w-24" v-if="$route.path == '/about'" :class="{ '../../public/img/logo/navbar-logo-color.png': !view.topOfPage, '../../public/img/logo/navbar-logo-color.png': !showNavbar}">
        <img src="../../public/img/logo/navbar-logo-color.png" alt="" class="w-36 md:w-24" v-else>

        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button
            type="button"
            class="
              text-gray-800
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>


      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
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

        <router-link to="/">
          <li class="
                font-bold 
                text-basic-white 
                hover:text-primary-brand 
                hover:border-b-2 
                hover:border-b-primary-brand" 
              v-if="$route.path == '/about'" 
              :class="{ 'text-basic-black': !view.topOfPage}"> 
            Beranda 
            </li>

          <li class="font-bold hover:text-primary-brand hover:border-b-2 hover:border-b-primary-brand" v-else> Beranda </li>
        </router-link>

        <router-link to="/about">
          <li class="
                font-bold 
                text-basic-white 
                hover:text-primary-brand 
                hover:border-b-2 
                hover:border-b-primary-brand" 
              v-if="$route.path == '/about'" 
              :class="{ 'text-basic-black': !view.topOfPage}"> 
            Tentang Kami 
            </li>

          <li class="font-bold hover:text-primary-brand hover:border-b-2 hover:border-b-primary-brand" v-else> Tentang Kami </li>
        </router-link>

        <router-link to="/karir">
          <li class="
                font-bold 
                text-basic-white 
                hover:text-primary-brand 
                hover:border-b-2 
                hover:border-b-primary-brand" 
              v-if="$route.path == '/about'" 
              :class="{ 'text-basic-black': !view.topOfPage}"> 
            Karir
            </li>

          <li class="font-bold hover:text-primary-brand hover:border-b-2 hover:border-b-primary-brand" v-else> Karir </li>
        </router-link>
        <div class="w-14 h-8 flex items-center bg-gray-300 rounded-full p-1" :class="{ 'bg-green-400': toggleActive}" >      
          <div class="bg-primary-brand w-6 h-6 rounded-full shadow-md grid content-center justify-center" :class="{ 'translate-x-6': toggleActive}">
              <span class="text-[12px] text-basic-white select-none"> En</span>
          </div>
        </div>
      </ul>
    </nav>
  </header>
</template>

<script>
const OFFSET = 0
export default {
  data() {
    return {
      showMenu: false,
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

<style src="@vueform/toggle/themes/default.css"></style>

<style scoped>
  .exact-active-link {
      border-bottom: #42b983 solid;
  }

</style>