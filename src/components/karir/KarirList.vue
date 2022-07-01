<template>
  <MqResponsive target="xl">
    <section class="h-full">

      <div data-aos="fade-up" data-aos-duration="1500">
        <div class="container px-6 mx-auto justify-center text-center">
          <h1 class="text-h3 font-bold">{{karir('header')}}</h1>

          <div id="card" class="p-6 mb-10 rounded-3xl overflow-hidden shadow-md">
            <form class="flex items-center">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <input
                  type="text"
                  id="simple-search"
                  class="
                    bg-basic-background
                    border-none
                    text-basic-black text-sm
                    rounded-xl
                    focus:ring-primary-brand focus:border-primary-brand
                    block
                    w-full
                    pl-6
                    p-2.5
                  "
                  placeholder="Cari passion kamu"
                  required
                />
              </div>
              <button
                type="submit"
                class="
                  p-2.5
                  ml-2
                  w-20
                  font-bold
                  text-text-grey6 
                  bg-primary-brand
                  hover:bg-primary-green-l-10
                  disable:bg-basic-background
                  disable:text-color-grey2 
                  rounded-2xl
                "
              >
                {{karir('btn')}}
              </button>
            </form>

            <div class="pt-4 text-left">
              <h1 class="font-bold">{{karir(cat)}}</h1>
            </div>

            <div id="category" class="pt-4 flex gap-2">
              <a @click="setCat()" :class="!categorySelected ?'bg-primary-brand text-basic-white':'hover:bg-primary-brand hover:text-basic-white'" class="cursor-pointer font-bold px-6 py-3 rounded-xl overflow-hidden shadow-md">
                <h1>ALL</h1>
              </a>
              <a v-for="cat in category" :key="cat" :class="categorySelected == cat ?'bg-primary-brand text-basic-white':'hover:bg-primary-brand hover:text-basic-white'" @click="setCat(cat)" class="cursor-pointer font-bold px-6 py-3 rounded-xl overflow-hidden shadow-md">
                <h1>{{cat}}</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <div id="list" class="container px-6 mx-auto mb-20">
          <div class="grid gap-6">
            <a :href="dt.url" class="flex p-6 shadow-md rounded-2xl" v-for="dt in data.careers" :key="dt.id">
              <h1 class="text-h5 font-bold">{{dt.id}}. </h1>
              <div class="pl-2 w-full">
                <h1 class="text-h5 font-bold">{{dt.title}}</h1>
                <div class="flex gap-2">
                  <h1>{{dt.jobCategory}}</h1> •
                  <h1>{{dt.jobType}}</h1> •
                  <h1>{{dt.location}}</h1>
                </div>
              </div>
              <div class="grid content-center">
                  <img
                      src="../../assets/img/Careers/arrow-right-2.png"
                      alt=""
                      class="h-4"
                  />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </MqResponsive>

  <MqResponsive target="md-lg">
    <section id="karirlist" class="h-full">
      <div data-aos="fade-up" data-aos-duration="1500">
        <div class="container px-6 mx-auto justify-center text-center">
          <h1 class="text-h3 font-bold">{{karir('header')}}</h1>

          <div id="card" class="p-6 mb-10 rounded-3xl overflow-hidden shadow-md">
            <form class="flex items-center">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <Input v-model="search" />
              </div>
              <button
                type="button"
                @click="onSearch"
                class="
                  p-2.5
                  ml-2
                  w-24
                  font-bold
                  text-text-grey6 
                  bg-primary-brand
                  hover:bg-primary-green-l-10
                  disable:bg-basic-background
                  disable:text-color-grey2 
                  rounded-2xl
                "
              >
                {{karir('btn')}}
              </button>
            </form>

            <div class="pt-4 text-left">
              <h1 class="font-bold">{{karir('cat')}}</h1>
            </div>

            <div id="category" class="pt-4 flex gap-2">
              <a @click="setCat()" :class="!categorySelected ?'bg-primary-brand text-basic-white':'hover:bg-primary-brand hover:text-basic-white'" class="cursor-pointer font-bold px-6 py-3 rounded-xl overflow-hidden shadow-md">
                <h1>ALL</h1>
              </a>
              <a v-for="cat in category" :key="cat" :class="categorySelected == cat ?'bg-primary-brand text-basic-white':'hover:bg-primary-brand hover:text-basic-white'" @click="setCat(cat)" class="cursor-pointer font-bold px-6 py-3 rounded-xl overflow-hidden shadow-md">
                <h1>{{cat}}</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <div id="list" class="container px-6 mx-auto mb-20">
          <div class="grid gap-6">
            <a :href="dt.url" target="_blank" class="flex p-6 shadow-md rounded-2xl" v-for="dt in data.careers" :key="dt.id">
              <h1 class="text-h5 font-bold">{{dt.id}}. </h1>
              <!-- {{ data.careers }} -->
              <div class="pl-2 w-full">
                <h1 class="text-h5 font-bold">{{dt.title}}</h1>
                <div class="flex gap-2">
                  <h1>{{dt.jobCategory}}</h1> •
                  <h1>{{dt.jobType}}</h1> •
                  <h1>{{dt.location}}</h1>
                </div>
              </div>
              <div class="grid content-center">
                  <img
                  src="../../assets/img/Careers/arrow-right-2.png"
                  alt=""
                  class="h-8"
                  />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </MqResponsive>

  <MqResponsive target="xs-sm">
    <section class="h-full mb-20">
      <div data-aos="fade-up" data-aos-duration="1500">
        <div class="container px-6 mx-auto justify-center text-center">
          <h1 class="text-h5 font-bold">{{karir('header')}}</h1>

          <div id="card" class="p-6 mb-10 rounded-3xl overflow-hidden shadow-md">
            <form class="flex items-center">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <input
                  v-model="search"
                  class="
                    bg-basic-background
                    border-none
                    text-basic-black text-sm
                    rounded-xl
                    focus:ring-primary-brand focus:border-primary-brand
                    block
                    w-full
                    pl-6
                    py-3
                  "
                  placeholder="Cari passion kamu"
                  required
                />
                <!-- <div class="absolute top-2 right-2">
                  <button type="submit" class="">
                    <img
                      src="../../assets/img/Careers/filter.png"
                      alt=""
                      class="h-8"
                    />
                  </button>
                </div> -->
              </div>
              <button
                type="button"
                @click="onSearch"
                class="
                  p-2.5
                  ml-2
                  w-20
                  font-bold
                  text-text-grey6 
                  bg-primary-brand
                  hover:bg-primary-green-l-10
                  disable:bg-basic-background
                  disable:text-color-grey2 
                  rounded-2xl
                "
              >
                {{karir('btn')}}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <div id="karirList" class="container px-6 mx-auto mb-4">
          <div class="grid gap-6">
            <a :href="dt.url" class="flex p-6 shadow-md rounded-2xl" v-for="dt in data.careers" :key="dt.id">
              <h1 class="text-p1 font-bold">{{dt.id}}. </h1>
              <div class="pl-2 w-full">
                <h1 class="text-p1 font-bold">{{dt.title}}</h1>
                <div id="category" class="flex gap-2 text-p3">
                  <div class="">
                    <h1>{{dt.jobCategory}}</h1>
                    <h1>{{dt.jobType}}</h1>
                  </div>
                  <div class="">
                    <h1>{{dt.location}}</h1>
                  </div>
                </div>
              </div>
              <div class="icon grid content-center">
                <img
                  src="../../assets/img/Careers/arrow-right-2.png"
                  alt=""
                  class="h-4"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </MqResponsive>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import Input from "../Input.vue";
import { doc, getDoc } from "firebase/firestore";
import { onMounted } from "vue";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import { computed } from "@vue/reactivity";
import { useStore } from 'vuex';
import karirList from '../../assets/data/karir/karirList.json';
export default {
  components: {
    MqResponsive,
    Input,
  },
  data() {
    return {
        data: {
            careers:[]
        },
      dataAwal: {
        careers:[]
      },
      category: [],
      search: "",
      categorySelected: ""
    };
  },
  setup() {
        const store = useStore();
        const activeLanguage = computed(() => store.getters.activeLanguage);

        const karir = (string) => {
            return karirList[activeLanguage.value][string];
        }
        
        return{karir}
  },
  async mounted(){

      const firebaseConfig = {
        apiKey: "AIzaSyAZ_ZuyN-szZ2SDYNPXte-Ao3kLCdckxBw",
        authDomain: "holigo-32c2a.firebaseapp.com",
        databaseURL:
          "https://holigo-32c2a-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "holigo-32c2a",
        storageBucket: "holigo-32c2a.appspot.com",
        messagingSenderId: "705946650187",
        appId: "1:705946650187:web:3c82cf6937b0943113efce",
        measurementId: "G-SWVLKKEQQN",
      };
      await initializeApp(firebaseConfig);
      this.getDB();

  },
  computed: {
    dataFilter() {
      return this.data.careers.filter(
        item => {
          let d =  item.title.toLowerCase()
          .indexOf(this.search.toLowerCase()) > -1  || 
          item.jobType.toLowerCase()
          .indexOf(this.search.toLowerCase()) > -1;
          return d;

        }
      )
    }
  },
  methods:{
    setCat(cat) {
      this.categorySelected = cat;
      if (cat) {
        this.data.careers = this.dataAwal.careers.filter(v=>{
          return v.jobCategory == cat;
        });
      } else {
        this.data.careers = this.dataAwal.careers;
      }
    },
    onSearch() {
      if(this.search){
        this.data.careers = this.dataFilter
      } else {
        this.data.careers = this.dataAwal.careers
      }
    },
    getDB() {
    const dbRef = ref(getDatabase());
    get(dbRef)
      .then((snapshot) => {
        console.log(snapshot);
        if (snapshot.exists()) {
          this.data = snapshot.val();
          this.dataAwal = Object.assign({}, this.data);
          this.category = this.dataAwal.careers.map(v=>v.jobCategory)
                          .filter((v, i, a) => a.indexOf(v) === i);
          
          if(this.$route.query.search) {

            this.$nextTick(()=>{
              
              let section = document.getElementById("karirlist"); 
              this.search = this.$route.query.search;
              window.scroll({
                top: 1251,
                left:0,
                behavior:"smooth"
              });
              this.onSearch();
            })
          }
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.log("erro db ");
        console.error(error);
      });    
    }
  }
};
</script>

<style>
</style>