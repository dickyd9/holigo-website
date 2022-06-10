<template>
  <section id="hero" :style="{'background-image': `url(${(bg)})`,'background-size': '100vw'}" class="h-[100vh] grid md:flex flex-wrap">
        <div class="container px-6 mx-auto">
            <div class="grid justify-items-center items-center py-52">
                <h1 class="font-black text-center text-h2 text-basic-white md:max-w-3xl md:text-h1">
                    <span class="text-primary-brand">Semua</span> {{header}}
                </h1>
                <span class="text-center pt-6 text-body3 font-thin max-w-md text-basic-white">
                    {{body}}
                </span>
            </div>
        </div>
  </section>
</template>

<script>
export default {
    name: "hero",
    data() {
        return {
            bg: "src/assets/img/AboutUs/hero-background.png",
            header: "kebutuhan dalam satu aplikasi",
            body: "One-stop solution untuk semua kebutuhan lifestyle kamu lengkap dalam satu aplikasi yang simple."
        };
    }
};
</script>

<style>

</style>