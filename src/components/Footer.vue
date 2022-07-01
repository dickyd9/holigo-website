<template>
<MqResponsive :target="['xl']">
  <div class="bg-basic-footer block h-[42vh] pt-12">
      <footer
        class="
          container
          pt-8
          mx-auto
        "
      >

      <div class="

            border-b-2
            pl-2
            pb-16
            flex 
            justify-between 
            content-center">
        
        <!-- Logo & Toggle -->
        <div class="basis-1/2 grid content-start pb-2 md:pb-0">
          <img src="/img/logo/navbar-logo-white.png" alt="" class=" h-14 mb-12">
            <div class="grid ">
              <span class="text-h6 text-basic-white pb-4">{{footL('lang')}}</span>
              <Toggle/>
            </div>
        </div>

        <!-- Menu -->
        <div class="grid basis-1/4 content-start pb-10 gap-2 md:pb-0">
          <h1 class="text-h6 font-semibold text-text-grey4">Menu</h1>
          <div v-for="menu in footL('menu')"
               :key="menu.id"      
          >
            <router-link :to="menu.link" class="text-text-grey4 hover:text-basic-white pb-12">
              {{menu.title}}
            </router-link>

          </div>
        </div>

        <!-- Contact -->
        <div class="grid basis-1/4 content-start pb-12">
          <h1 class="text-h6 font-bold pb-2 text-text-grey4">{{footL('contactUs')}}</h1>
            <div class="flex flex-grid md:flex-col gap-2" v-for="contactList in footL('contact') " :key="contactList.id">
              <div class="text-text-grey4 flex gap-2 h-10">
                <img :src="contactList.icon" alt="" class="h-6"/>
                {{contactList.content}}
              </div>
            </div>
        </div>

        <!-- Social Media -->
        <div class="grid basis-1/4 content-start pb-6 md:pb-0">
          <h1 class="text-h6 font-bold pb-2 text-text-grey4">Social Media</h1>
          <div class="flex gap-4">
            <a :href="socialNet.link" v-for="socialNet in footL('social') " :key="socialNet.id">
              <img :src="socialNet.icon" :alt="socialNet.content" class="h-6">
            </a>
          </div>
        </div>
      </div>

      <!-- copyright -->
      <div class="flex my-4 md:h-6 justify-center gap-2">
        <img src="/img/icnWhite.png" alt="" class="h-6 md:h-6">
        <div class="md:text-body2 text-text-grey6">Holigo</div>
        <div class="md:text-body2 text-text-grey6">© 2022. All Right Reserved</div>
      </div>
      </footer>
      
  </div>
</MqResponsive>

<MqResponsive target="md-lg">
  <div class="bg-basic-footer block h-[55vh]">
      <footer
        class="
          container
          pt-8
          mx-auto
        "
      >

      <div class="
        
            border-b-2
            pl-2
            pb-16
            flex 
            justify-between 
            content-center">
        
        <!-- Logo & Toggle -->
        <div class="basis-1/2 grid content-start pb-2 md:pb-0">
          <img src="/img/logo/navbar-logo-white.png" alt="" class=" h-10 md:h-14 mb-2">
            <div class="grid ">
              <span class="text-h6 text-basic-white pb-4">{{footL('lang')}}</span>
              <Toggle/>
            </div>
        </div>

        <!-- Menu -->
        <div class="grid basis-1/4 content-start pb-10 gap-2 md:pb-0">
          <h1 class="text-h6 font-semibold text-text-grey4">Menu</h1>
          <div v-for="menu in footL('menu')"
               :key="menu.id"      
          >
            <router-link :to="menu.link" class="text-text-grey4 hover:text-basic-white pb-12">
              {{menu.title}}
            </router-link>

          </div>
        </div>

        <!-- Contact -->
        <div class="grid basis-1/4 content-start pb-12">
          <h1 class="text-h6 font-bold pb-2 text-text-grey4">{{footL('contactUs')}}</h1>
            <div class="flex flex-grid md:flex-col gap-2" v-for="contactList in footL('contact') " :key="contactList.id">
              <div class="text-text-grey4 flex gap-2 h-10">
                <img :src="contactList.icon" alt="" class="h-6"/>
                {{contactList.content}}
              </div>
            </div>
        </div>

        <!-- Social Media -->
        <div class="grid basis-1/4 content-start pb-6 md:pb-0">
          <h1 class="text-h6 font-bold pb-2 text-text-grey4">Social Media</h1>
          <div class="flex gap-4">
            <a :href="socialNet.link" v-for="socialNet in footL('social') " :key="socialNet.id">
              <img :src="socialNet.icon" :alt="socialNet.content" class="h-6">
            </a>
          </div>
        </div>
      </div>

      <!-- copyright -->
      <div class="flex my-4 md:h-6 justify-center gap-2">
        <img src="../../public/img/icnWhite.png" alt="" class="h-6 md:h-6">
        <div class="md:text-body2 text-text-grey6">Holigo</div>
        <div class="md:text-body2 text-text-grey6">© 2022. All Right Reserved</div>
      </div>
      </footer>
      
  </div>
</MqResponsive>

<MqResponsive target="xs-sm">
<div class="bg-basic-footer block h-[65vh]">
      <footer
        class="
          container
          pt-8
          mx-auto
          px-4
        "
      >

        
        <!-- Logo & Toggle -->
        <div class="basis-1/2 grid content-start pb-2 md:pb-0">
          <img src="/img/logo/navbar-logo-white.png" alt="" class=" h-10 mb-2">
          
        </div>

      <div class="
            pl-2
            mb-20
            flex">

        <!-- Menu -->
        <div class="grid basis-96 content-start pb-10 gap-2 md:pb-0">
          <h1 class="text-h6 font-semibold text-text-grey4">Menu</h1>
          <div v-for="menu in footL('menu')"
               :key="menu.id"      
          >
            <router-link :to="menu.link" class="text-text-grey4 hover:text-basic-white pb-12">
              {{menu.title}}
            </router-link>

          </div>
        </div>

        <!-- Contact -->
        <div class="grid content-start pb-12">
          <h1 class="text-h6 font-bold pb-2 text-text-grey4">{{footL('contactUs')}}</h1>
            <div class="flex flex-grid md:flex-col gap-2" v-for="contactList in footL('contact') " :key="contactList.id">
              <div class="text-text-grey4 flex gap-2 h-10">
                <img :src="contactList.icon" alt="" class="h-6"/>
                {{contactList.content}}
              </div>
            </div>
        </div>
      </div>

      <div class="flex mb-6 pb-6 
          border-b-2 border-basic-white">
        <div class="grid basis-1/2 ">
          <span class="text-h6 text-basic-white">{{footL('lang')}}</span>
          <Toggle/>
        </div>
        
          <!-- Social Media -->
          <div class="grid basis-1/2 content-start pb-6 md:pb-0">
            <h1 class="text-h6 font-bold pb-2 text-text-grey4">Social Media</h1>
            <div class="flex gap-4">
              <a :href="socialNet.link" v-for="socialNet in footL('social') " :key="socialNet.id">
                <img :src="socialNet.icon" :alt="socialNet.content" class="h-5">
              </a>
            </div>
          </div>
      </div>

      </footer>
      <!-- copyright -->
      <div class="flex my-4 justify-center gap-2 ">
        <div class="grid content-center">
          <img src="/img/icnWhite.png" alt="" class="h-4">
        </div>
        <div class="md:text-body4 text-text-grey6">Holigo</div>
        <div class="md:text-body4 text-text-grey6">© 2022. All Right Reserved</div>
      </div>
      
  </div>
</MqResponsive>


</template>

<script>
import Toggle from '../components/Toggle.vue';
import { MqResponsive } from "vue3-mq";
import { computed } from "@vue/reactivity";
import { useStore } from 'vuex';
import footer from '../assets/data/footer.json';
export default{
  components:{
    Toggle,
    MqResponsive
  },
  setup(){  
    const store = useStore();
    const activeLanguage = computed(() => store.getters.activeLanguage);

    const footL = (string) => {
      return footer[activeLanguage.value][string];
    }

    return {footL}
  },
  data() {
    return {
      menu: [
        {
          link: "/",
          title: "Beranda"
        },
        {
          link: "/about",
          title: "Tentang Kami"
        },
        {
          link: "/karir",
          title: "Karir"
        }
      ],

      contact: [
        {
          id: 1,
          icon: "/img/icon/email.png",
          content: "Email",
          link: ""
        },

        {
          id: 2,
          icon: "/img/icon/wa.png",
          content: "Whatsapp",
          link: ""
        },

        {
          id: 3,
          icon: "/img/icon/loc.png",
          content: "Jl. Bukit Golf I No.17, Lengkong Karya, Kec. Serpong Utara, Kota Tangerang Selatan, Banten 15310",
          link: ""
        }
      ],

      social: [
        {
          id: 1,
          icon: "/img/icon/Ig.png",
          content: "Instagram",
          link: "https://instagram.com/holigo.id"
        },

        {
          id: 2,
          icon: "img/icon/Tw.png",
          content: "Twitter",
          link: ""
        },

        {
          id: 3,
          icon: "img/icon/Fb.png",
          content: "Facebook",
          link: ""
        }
      ],
    }
  }
}
</script>

<style>

</style>