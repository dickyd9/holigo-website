<template>
  <div class="bg-basic-footer h-80 md:block">
      <footer
        class="
          container
          pt-8
          mx-auto
        "
      >
        <div class="
        
            border-b-2
            pb-8
            md:flex md:justify-between md:content-center">
        
        <div class="basis-1/2 grid content-start">
          <img src="../../public/img/logo/navbar-logo-white.png" alt="" class="h-14 mb-2">
          <Toggle></Toggle>
        </div>

        <div class="grid basis-1/4 content-start">
          <h1 class="text-h6 font-semibold pb-2 text-text-grey4">Menu</h1>
            <router-link to="/">
              <span class="text-text-grey4 hover:text-basic-white">Beranda</span>
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

        <div class="grid basis-1/4 content-start">
          <h1 class="text-h6 font-bold pb-2 text-text-grey4">Kontak Kami</h1>
            <div class="flex flex-col gap-2">
              <div class="text-text-grey4 flex gap-2">
                <img src="../assets/img/icon/email.png" alt="" class="h-4"/>
                Email
              </div>
              <div class="text-text-grey4 flex gap-2">
                <img src="../assets/img/icon/Wa.png" alt="" class="h-4"/>
                Email
              </div>
              <div class="text-text-grey4 flex gap-2">
                <img src="../assets/img/icon/Loc.png" alt="" class="h-4"/>
                Jl. Bukit Golf I No.17, Lengkong Karya, Kec. Serpong Utara, Kota Tangerang Selatan, Banten 15310
              </div>
            </div>
        </div>

        <div class="grid basis-1/4 content-start">
          <h1 class="text-h6 font-bold pb-2 text-text-grey4">Social Media</h1>
          <div class="flex gap-4">
            <img src="../assets/img/icon/Ig.png" alt="" class="h-5">
            <img src="../assets/img/icon/Tw.png" alt="" class="h-5">
            <img src="../assets/img/icon/Fb.png" alt="" class="h-5">
          </div>
        </div>
      </div>
      <div class="flex my-4 h-6 justify-center gap-2">
        <img src="../../public/img/icnWhite.png" alt="" class="h-6">
        <div class="text-body2 text-text-grey6">Holigo</div>
        <div class="text-body2 text-text-grey6">© 2022. All Right Reserved</div>
      </div>
      </footer>
      
  </div>
</template>

<script>
import Toggle from '@/components/Toggle.vue'
</script>

<style>

</style>