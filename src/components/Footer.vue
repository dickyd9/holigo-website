<template>
  <div class="bg-basic-footer h-56 md:block">
      <footer
        class="
          container
          py-12
          mx-auto
          md:flex md:justify-between md:content-center
        "
      >
      
      <div class="h-32 basis-1/2 grid content-start">
        <h2>logo</h2>
        <h2>toggle</h2>
      </div>

      <div class="h-32 grid basis-1/4 content-start">
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

      <div class="h-32 grid basis-1/4 content-start">
        <h1 class="text-h6 font-bold pb-2 text-text-grey4">Kontak Kami</h1>
          <div class="flex flex-col">
            <span class="text-text-grey4">Email</span>
            <span class="text-text-grey4">Alamat</span>
          </div>
      </div>

      <div class="h-32 grid basis-1/4 content-start">
        <h1 class="text-h6 font-bold pb-2 text-text-grey4">Social Media</h1>
        <div class="flex gap-1">
          <h1>logo</h1>
          <h1>logo</h1>
          <h1>logo</h1>
        </div>
      </div>
      </footer>
      
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>