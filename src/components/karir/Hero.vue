<template>
  <section class="h-full">
      <div class="h-screen container px-6 mx-auto grid py-24 md:flex flex-wrap">
          <div class="grid basis-1/2 content-center">
                <h1 class="text-[4rem] font-black">
                  Yuk, unlock potensi kamu bareng kami!
                </h1>
                <span class="text-h6 max-w-xl">
                    Sigap, siap, santai, serius. Belajar dan asah kemampuan bersama-sama. 
                </span>

                <div id="search" class="pt-6 max-w-lg">
                    <form class="flex items-center">   
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <input type="text" id="simple-search" 
                            class="
                            bg-gray-50 
                            border 
                            border-gray-300 
                            text-basic-black 
                            text-sm 
                            rounded-xl 
                            focus:ring-blue-500 
                            focus:border-blue-500 
                            block 
                            w-full 
                            pl-6 
                            p-2.5 
                            " 
                            placeholder="Search" 
                            required>
                        </div>
                        <button type="submit" class="p-2.5 ml-2 w-20 text-sm font-medium text-white bg-primary-brand rounded-2xl">
                            Cari
                        </button>
                    </form>
                    <button type="submit" class="pt-5 text-primary-brand"> 
                        Lihat semua lowongan 
                    </button>
                </div>
          </div>
          <div class="grid basis-1/2 content-center justify-center">
            <img 
                class="object-contain h-full w-fit" 
                src="../.././assets/img/illustration/exmp.png" 
                alt=""
            >
          </div>
      </div>
  </section>
</template>

<script>

export default {
    
};
</script>

<style>

</style>