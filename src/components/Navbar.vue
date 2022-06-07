<template>
  <header class="top-0 w-full z-10 md:fixed " :class="{ 'bg-basic-white': !view.topOfPage}">
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
        <a
          href="/"
          class="
            text-h6
            font-bold
            text-text-grey1
            md:text-h4
          "
          >Logo
        </a>

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
          <li class="font-bold text-basic-white hover:text-primary-brand hover:border-b-2 hover:border-b-primary-brand" v-if="$route.path == '/about'" > Beranda </li>
          <li class="font-bold hover:text-primary-brand hover:border-b-2 hover:border-b-primary-brand" v-else> Beranda </li>
        </router-link>

        <router-link to="/about">
          <li class="font-bold text-basic-white hover:text-primary-brand hover:border-b-2 hover:border-b-primary-brand" v-if="$route.path == '/about'" > Tentang Kami </li>
          <li class="font-bold hover:text-primary-brand hover:border-b-2 hover:border-b-primary-brand" v-else> Tentang Kami </li>
        </router-link>

        <router-link to="/karir">
          <li class="font-bold text-basic-white hover:text-primary-brand hover:border-b-2 hover:border-b-primary-brand" v-if="$route.path == '/about'" > Karir </li>
          <li class="font-bold hover:text-primary-brand hover:border-b-2 hover:border-b-primary-brand" v-else> Karir </li>
        </router-link>

        <div>
          <Toggle v-model="value" class="my-toggle-red">
            <template v-slot:label="{ checked, classList }">
              <span :class="classList.label">{{ checked ? 'IND' : 'EN' }}</span>
            </template>
          </Toggle>
        </div>

      </ul>
    </nav>
  </header>
</template>

<script>
import Toggle from '@vueform/toggle'
export default {

  components: {
      Toggle,
    },
  data() {
    return {
      showMenu: false,
      value: true,
      view: {
        topOfPage: true
      }
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(){
      if(window.pageYOffset>250){
        if(this.view.topOfPage) this.view.topOfPage = false
      } else {
        if(!this.view.topOfPage) this.view.topOfPage = true
      }
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