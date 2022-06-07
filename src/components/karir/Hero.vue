<template>
  <section class="h-full">
      <div class="h-screen container px-6 mx-auto grid py-24 md:flex flex-wrap">
          <div class="grid basis-1/2 content-center">
              <h1 class="text-h2 font-black">Header</h1>
              <span class="text-h6">Body</span>
                <div id="search" class="pt-6">
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
                    <button type="submit" class="pt-5"> Lihat semua lowongan 
                        <ArrowNarrowRightIcon class="h-5 w-5 text-blue-500"/>
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