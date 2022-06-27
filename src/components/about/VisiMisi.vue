<template>
  <MqResponsive :target="['lg']">
    <section class="container px-6 mx-auto mt-32 mb-20 text-center">
        <h1 class="text-h3 font-bold">{{header}}</h1>
        <h1 class="text-h6 pt-2">{{body}}</h1>

        <div class="py-12 flex gap-4 px-12">

          <div class="basis-1/2 rounded-xl bg-[url('/src/assets/img/AboutUS/background/background_visi.png')] bg-cover h-[500px] p-12">
            <div class="text-h3 font-bold text-basic-white text-left pb-6">Visi kami</div>
              <ul class="list-disc text-left text-basic-white pl-6 pr-12" v-for="visi in visiList" :key="visi.id">
                <li class="pb-4">{{visi}}</li>
              </ul>
          </div>

          <div class="basis-1/2 rounded-xl bg-[url('/src/assets/img/AboutUS/background/background_misi.png')] bg-cover h-[500px] p-12">
            <div class="text-h3 font-bold text-basic-white text-left pb-6">Misi kami</div>
              <ul class="list-disc text-left text-basic-white pl-6 pr-12" v-for="misi in misiList" :key="misi.id">
                <li class="pb-4">{{misi}}</li>
              </ul>
          </div>
          
        </div>
    </section>
  </MqResponsive>

  <MqResponsive :target="['xs']">
    <section class="container px-6 mx-auto mt-32 mb-6 text-center">
      <h1 class="text-h4 font-bold">{{header}}</h1>
        <h1 class="text-p1 pt-2">{{body}}</h1>
        <div class="py-12 grid gap-4">
          <div class="basis-1/2 rounded-3xl bg-basic-footer py-8 px-4" >
            <div class="text-h4 font-bold text-basic-white text-left mb-6">Visi kami</div>
              <ul class="list-disc text-left text-basic-white pl-6 pr-4" v-for="visi in visiList" :key="visi.id">
                <li class="pb-4 text-p1">{{visi}}</li>
              </ul>
          </div>
          <div class="basis-1/2 rounded-3xl bg-basic-footer py-8 px-4">
            <div class="text-h4 font-bold text-basic-white text-left pb-6">Misi kami</div>
              <ul class="list-disc text-left text-basic-white pl-6 pr-4" v-for="misi in misiList" :key="misi.id">
                <li class="pb-4 text-p1">{{misi}}</li>
              </ul>
          </div>
          
        </div>
    </section>
  </MqResponsive>
</template>

<script>
import { MqResponsive } from "vue3-mq";
export default {
  components:{
      MqResponsive
  },
  data() {
    return {
      header: "Mau yang terbaik untuk kamu",
      body: "Kami selalu melihat ke depan dan memberikan yang terbaik untuk semua kebutuhan kamu",
      visiList: [
        "Menjadi salah satu aplikasi favorit penyedia jasa wisata terbaik dan terpercaya",
        "Menjadi aplikasi yang mempunyai fitur lengkap untuk kebutuhan sehari-hari",
        "Berkontribusi dalam meningkatkan industri pariwisata dan transportasi di Indonesia"
      ],
      misiList: [
        "Menjalin kerjasama yang baik dengan semua mitra usaha baik domestik maupun internasional",
        "Memberikan pelayanan yang maksimal dan memuaskan kepada semua pelanggan",
        "Memberikan kesejahteraan kepada setiap anggota perusahaan",
        "Menjadi aplikasi yang selalu up to date dalam memberikan keamanan dan kenyamanan"
      ]

    }
  }

}
</script>

<style>

</style>