<template>
  <section class="h-full">
      <div class="container px-6 mx-auto justify-center text-center">
        <h1 class="text-h3 font-bold">Daftar Lowongan</h1>
        
        <div id="card" class="p-6 mb-10 rounded-3xl overflow-hidden shadow-md">
             <form class="flex items-center">   
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <input type="text" id="simple-search" 
                    class="
                    bg-text-grey5
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
                    placeholder="Cari passion kamu" 
                    required>
                </div>
                <button type="submit" class="p-2.5 ml-2 w-20 text-sm font-medium text-white bg-primary-brand rounded-2xl ">
                    Cari
                </button>
            </form>
            
            <div class="pt-4 text-left">
                <h1 class="font-bold">Pilih sesuai kategori</h1>
            </div>

            <div id="category" class="pt-4 flex gap-2">
                <a href="/" class="px-6 py-3 rounded-xl overflow-hidden shadow-md">
                    <h1>Cat1</h1>
                </a>
            </div>
        </div>
      </div>
        <div id="list" class="container px-6 mx-auto mb-20">
            <div class="grid gap-6">    
                <a href="/" class="flex p-6 shadow-md rounded-2xl">
                    <h1 class="text-h5 font-bold">1. </h1>
                    <div class="pl-2 w-full">
                        <h1 class="text-h5 font-bold">Legal Manager</h1>
                        <div class="flex gap-2">
                            <h1>body</h1>
                            <h1>body</h1>
                            <h1>body</h1>
                        </div>
                    </div>
                    <div class="icon w-full text-right">
                        >
                    </div>
                </a>
            </div>
        </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
    #card::before {
        background-color: black;
    }
</style>