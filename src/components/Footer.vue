<template>
  <div class="bg-basic-footer block h-[100vh] md:h-full">
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
            md:pb-16
            md:flex md:justify-between md:content-center">
        
        <div class="basis-1/2 grid content-start pb-2 md:pb-0">
          <img src="../../public/img/logo/navbar-logo-white.png" alt="" class=" h-10 md:h-14 mb-2">
          <Toggle/>
        </div>

        <div class="grid basis-1/4 content-start pb-10 md:pb-0">
          <h1 class="text-h6 font-semibold pb-2 text-text-grey4">Menu</h1>
            <router-link to="/">
              <span class="text-text-grey4 hover:text-basic-white gap-6">Beranda</span>
            </router-link>

            <span class="text-text-grey4 hover:text-basic-white">
              <router-link to="/about">
                Tentang Kami
              </router-link>
            </span>

            <span class="text-text-grey4 hover:text-basic-white">
              <router-link to="/karir">
                Karir
              </router-link>
            </span>
        </div>

        <div class="grid basis-1/4 content-start pb-12">
          <h1 class="text-h6 font-bold pb-2 text-text-grey4">Kontak Kami</h1>
            <div class="flex flex-grid md:flex-col gap-2" v-for="contactList in contact " :key="contactList.id">
              <div class="text-text-grey4 flex gap-2 h-10">
                <img :src="contactList.icon" alt="" class="h-6"/>
                {{contactList.content}}
              </div>
            </div>
        </div>

        <div class="grid basis-1/4 content-start pb-6 md:pb-0">
          <h1 class="text-h6 font-bold pb-2 text-text-grey4">Social Media</h1>
          <div class="flex gap-4">
            <img src="../assets/img/icon/Ig.png" alt="" class="h-5">
            <img src="../assets/img/icon/Tw.png" alt="" class="h-5">
            <img src="../assets/img/icon/Fb.png" alt="" class="h-5">
          </div>
        </div>
      </div>
      <div class="flex my-4 md:h-6 justify-center gap-2">
        <img src="../../public/img/icnWhite.png" alt="" class="h-6 md:h-6">
        <div class="md:text-body2 text-text-grey6">Holigo</div>
        <div class="md:text-body2 text-text-grey6">© 2022. All Right Reserved</div>
      </div>
      </footer>
      
  </div>
</template>

<script>
import Toggle from '../components/Toggle.vue'
export default{
  data() {
    return {
      contact: [
        {
          id: 1,
          icon: "src/assets/img/icon/email.png",
          content: "Email"
        },

        {
          id: 2,
          icon: "src/assets/img/icon/wa.png",
          content: "Whatsapp"
        },

        {
          id: 3,
          icon: "src/assets/img/icon/loc.png",
          content: "Jl. Bukit Golf I No.17, Lengkong Karya, Kec. Serpong Utara, Kota Tangerang Selatan, Banten 15310"
        },
      ]
    }
  }
}
</script>

<style>

</style>