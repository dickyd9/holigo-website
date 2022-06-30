<template>
<MqResponsive target="xl">
    <section>
    <div class="flex flex-wrap">
      <div class="container px-6 mx-auto w-full mb-20">
        <!-- Header Tab Start -->
        <div data-aos="fade-up" data-aos-duration="1500">
          <ul
            class="flex mb-0 list-none flex-wrap pt-3 pb-4 justify-center gap-6"
          >
          <!-- Tab1 -->
            <li class="text-center">
              <a
                class="font-bold hover:text-primary-brand hover:cursor-pointer"
                v-on:click="toggleTabs(1)"
                v-bind:class="{
                  'text-basic-black text-h3': openTab !== 1,
                  'border-b-primary-brand': openTab === 1,
                  'border-b-2': openTab === 1,
                }"
              >
                Transportasi
              </a>
            </li>
          <!-- Tab2 -->
            <li class="text-center">
              <a
                class="font-bold hover:text-primary-brand hover:cursor-pointer"
                v-on:click="toggleTabs(2)"
                v-bind:class="{
                  'text-basic-black': openTab !== 2,
                  'border-b-primary-brand': openTab === 2,
                  'border-b-2': openTab === 2,
                }"
              >
                Hotel
              </a>
            </li>
          <!-- Tab3 -->
            <li class="text-center">
              <a
                class="font-bold hover:text-primary-brand hover:cursor-pointer"
                v-on:click="toggleTabs(3)"
                v-bind:class="{
                  'text-basic-black': openTab !== 3,
                  'border-b-primary-brand': openTab === 3,
                  'border-b-2': openTab === 3,
                }"
              >
                Pulsa & Paket data
              </a>
            </li>
          <!-- Tab4 -->
            <li class="text-center">
              <a
                class="font-bold hover:text-primary-brand hover:cursor-pointer"
                v-on:click="toggleTabs(4)"
                v-bind:class="{
                  'text-basic-black': openTab !== 4,
                  'border-b-primary-brand': openTab === 4,
                  'border-b-2': openTab === 4,
                }"
              >
                Tagihan & Isi Ulang
              </a>
            </li>
          </ul>
        </div>
        <!-- Header Tab End -->
        
        <!-- Content Tab Start -->
        <div data-aos="fade-up" data-aos-duration="1500">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6"
          >
            <div class="py-10 flex-auto">
              <div class="tab-content tab-space">
                <!-- Content tab1 -->
                <div
                  v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
                >
                  <div class="grid grid-cols-6 gap-y-6">
                    <div
                      class="grid justify-center"
                      v-for="transport in transportList"
                      :key="transport.id"
                    >
                      <img :src="transport.img" alt="" class="h-28 w-28" />
                    </div>
                  </div>
                </div>
                <!-- Content tab2 -->
                <div
                  v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
                >
                  <div class="grid grid-cols-6 gap-y-6">
                    <div
                      class="grid justify-center"
                      v-for="hotel in hotelList"
                      :key="hotel.id"
                    >
                      <img :src="hotel.img" alt="" class="h-28 w-28" />
                    </div>
                  </div>
                </div>
                <!-- Content tab3 -->
                <div
                  v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
                >
                  <div class="grid grid-cols-6 gap-y-6">
                    <div
                      class="grid justify-center"
                      v-for="pp in ppList"
                      :key="pp.id"
                    >
                      <img :src="pp.img" alt="" class="h-28 w-28" />
                    </div>
                  </div>
                </div>
                <!-- Content tab4 -->
                <div
                  v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }"
                >
                  <div class="grid grid-cols-6 gap-y-6">
                    <div
                      class="grid justify-center"
                      v-for="tagihan in tagihanList"
                      :key="tagihan.id"
                    >
                      <img :src="tagihan.img" alt="" class="h-28 w-28" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Content Tab End -->

      </div>
    </div>
  </section>
</MqResponsive>

<MqResponsive target="md-lg">
  <section>
    <div class="grid">
      <!-- Title -->
      <div data-aos="fade-up" data-aos-duration="1500">
        <div class="flex flex-col text-center mb-10">
          <span class="text-h1 font-bold">
            Partner <span class="text-primary-brand">{{partner('header2')}}</span>
          </span>
          <span class="text-body1 pt-2">
            {{partner('body')}}
          </span>
        </div>
      </div>

      <!-- Content -->
      <div data-aos="fade-up" data-aos-duration="1500">
        <div class="container mx-auto w-full mb-20">
          <!-- Header Tab -->
          <ul
            class="flex mb-0 list-none flex-wrap pt-6 pb-6 justify-center gap-6"
          >
            <li class="text-center" 
            v-for="tab in partner('tab')" :key="tab.id">
              <a
                class="font-bold hover:text-primary-brand hover:cursor-pointer"
                v-on:click="toggleTabs(tab.id)"
                v-bind:class="{
                  'text-basic-black': openTab !== tab.id,
                  'border-b-primary-brand': openTab === tab.id,
                  'border-b-2': openTab === tab.id,
                }"
              >
                {{tab.name}}
              </a>
            </li>
          </ul>
          <div
            class="relative flex flex-col bg-white w-full mb-12"
          >
            <div class="pt-12 flex-auto">
              <div class="tab-content tab-space">
                <div
                  v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
                >
                  <div class="grid grid-cols-6 gap-y-6">
                    <div
                      class="grid justify-center"
                      v-for="transport in transportList"
                      :key="transport.id"
                    >
                      <img :src="transport.img" alt="" class="md:h-20 md:w-20" />
                    </div>
                  </div>
                </div>
                <div
                  v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
                >
                  <div class="grid grid-cols-6 gap-y-6">
                    <div
                      class="grid justify-center"
                      v-for="hotel in hotelList"
                      :key="hotel.id"
                    >
                      <img :src="hotel.img" alt="" class="h-20 w-20" />
                    </div>
                  </div>
                </div>
                <div
                  v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
                >
                  <div class="grid grid-cols-6 gap-y-6">
                    <div
                      class="grid justify-center"
                      v-for="pp in ppList"
                      :key="pp.id"
                    >
                      <img :src="pp.img" alt="" class="h-20 w-20" />
                    </div>
                  </div>
                </div>
                <div
                  v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }"
                >
                  <div class="grid grid-cols-6 gap-y-6">
                    <div
                      class="grid justify-center"
                      v-for="tagihan in tagihanList"
                      :key="tagihan.id"
                    >
                      <img :src="tagihan.img" alt="" class="h-20 w-20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</MqResponsive>

<MqResponsive target="xs-sm">

</MqResponsive>


</template>

<script >
import { MqResponsive } from "vue3-mq";
import { computed } from "@vue/reactivity";
import { useStore } from 'vuex';
import dataPartner from '../../assets/data/beranda/partner.json';


export default {
  name: "brand-tabs",
  setup(){  
    const store = useStore();
    const activeLanguage = computed(() => store.getters.activeLanguage);

    const partner = (string) => {
      return dataPartner[activeLanguage.value][string];
    }

    return {partner}
  },
  components: {
        MqResponsive
    },
  
  computed: {
  },
  data() {
    return {
      openTab: 1,

      transportList: [
        {
          id: 1,
          img: "src/assets/img/partner/transportation/air-asia.png",
          title: "air asia",
        },
        {
          id: 2,
          img: "src/assets/img/partner/transportation/batik-air.png",
          title: "batik air",
        },
        {
          id: 3,
          img: "src/assets/img/partner/transportation/citilink.png",
          title: "citilink",
        },
        {
          id: 4,
          img: "src/assets/img/partner/transportation/emirates-airways.png",
          title: "emirates airways",
        },
        {
          id: 5,
          img: "src/assets/img/partner/transportation/etihad.png",
          title: "etihad",
        },
        {
          id: 6,
          img: "src/assets/img/partner/transportation/garuda-indonesia.png",
          title: "garuda indonesia",
        },
        {
          id: 7,
          img: "src/assets/img/partner/transportation/jetstar.png",
          title: "jetstar",
        },
        {
          id: 8,
          img: "src/assets/img/partner/transportation/lion.png",
          title: "lion",
        },
        {
          id: 9,
          img: "src/assets/img/partner/transportation/malaysia-airlines.png",
          title: "malaysia airlines",
        },
        {
          id: 10,
          img: "src/assets/img/partner/transportation/qatar-airways.png",
          title: "qatar airways",
        },
        {
          id: 11,
          img: "src/assets/img/partner/transportation/singapore-airlines.png",
          title: "singapore airlines",
        },
        {
          id: 12,
          img: "src/assets/img/partner/transportation/sriwijaya-air.png",
          title: "sriwijaya-air",
        },
      ],
      hotelList: [
        {
          id: 1,
          img: "src/assets/img/partner/hotel/accor.png",
          title: "accor hotel",
        },
        {
          id: 2,
          img: "src/assets/img/partner/hotel/gran-mahakam.png",
          title: "gran mahakam",
        },
        {
          id: 3,
          img: "src/assets/img/partner/hotel/grand-hyatt.png",
          title: "grand hyatt",
        },
        {
          id: 4,
          img: "src/assets/img/partner/hotel/grand-sahid-jaya.png",
          title: "grand syahid jaya",
        },
        {
          id: 5,
          img: "src/assets/img/partner/hotel/ibis-hotel.png",
          title: "ibis hotel",
        },
        {
          id: 6,
          img: "src/assets/img/partner/hotel/intercontinental.png",
          title: "intercontinental",
        },
        {
          id: 7,
          img: "src/assets/img/partner/hotel/marriott.png",
          title: "marriott",
        },
        {
          id: 8,
          img: "src/assets/img/partner/hotel/mulia-resort.png",
          title: "mulia-resort",
        },
        {
          id: 9,
          img: "src/assets/img/partner/hotel/novotel.png",
          title: "novotel",
        },
        {
          id: 10,
          img: "src/assets/img/partner/hotel/pullman-hotel.png",
          title: "pullman-hotel",
        },
        {
          id: 11,
          img: "src/assets/img/partner/hotel/sheraton.png",
          title: "sheraton",
        },
        {
          id: 12,
          img: "src/assets/img/partner/hotel/the-ritz-carlton.png",
          title: "the ritz carlton",
        },
      ],
      ppList: [
        {
          id: 1,
          img: "src/assets/img/partner/internet/Axis.png",
          title: "Axis",
        },
        {
          id: 2,
          img: "src/assets/img/partner/internet/By U.png",
          title: "By u",
        },
        {
          id: 3,
          img: "src/assets/img/partner/internet/Im 3.png",
          title: "Im3",
        },
        {
          id: 4,
          img: "src/assets/img/partner/internet/Indosat.png",
          title: "Indosat",
        },
        {
          id: 5,
          img: "src/assets/img/partner/internet/Kartu halo.png",
          title: "Halo",
        },
        {
          id: 6,
          img: "src/assets/img/partner/internet/matrix.png",
          title: "matrix",
        },
        {
          id: 7,
          img: "src/assets/img/partner/internet/Simpati.png",
          title: "Simpati",
        },
        {
          id: 8,
          img: "src/assets/img/partner/internet/Smartfren.png",
          title: "Smrartfren",
        },
        {
          id: 9,
          img: "src/assets/img/partner/internet/Telkomsel.png",
          title: "Telkomsel",
        },
        {
          id: 10,
          img: "src/assets/img/partner/internet/tri.png",
          title: "tri",
        },
        {
          id: 11,
          img: "src/assets/img/partner/internet/Xl.png",
          title: "Xl",
        },
      ],
      tagihanList: [
        {
          id: 1,
          img: "src/assets/img/partner/topup/angsuran-kredit.png",
          title: "Angsuran Kredit",
        },
        {
          id: 2,
          img: "src/assets/img/partner/topup/asuransi.png",
          title: "Asuransi",
        },
        {
          id: 3,
          img: "src/assets/img/partner/topup/BPJS.png",
          title: "BPJS",
        },
        {
          id: 4,
          img: "src/assets/img/partner/topup/dompet-online.png",
          title: "dompet online",
        },
        {
          id: 5,
          img: "src/assets/img/partner/topup/e-money.png",
          title: "E-Money",
        },
        {
          id: 6,
          img: "src/assets/img/partner/topup/e-voucher.png",
          title: "E-Voucher",
        },
        {
          id: 7,
          img: "src/assets/img/partner/topup/edukasi.png",
          title: "Edukasi",
        },
        {
          id: 8,
          img: "src/assets/img/partner/topup/Gas.png",
          title: "Gas",
        },
        {
          id: 9,
          img: "src/assets/img/partner/topup/Multifinance.png",
          title: "Multifinance",
        },
        {
          id: 10,
          img: "src/assets/img/partner/topup/paket-data.png",
          title: "Paket Data",
        },
        {
          id: 11,
          img: "src/assets/img/partner/topup/pascabayar.png",
          title: "Pasca Bayar",
        },
        {
          id: 12,
          img: "src/assets/img/partner/topup/PDAM.png",
          title: "PDAM",
        },
        {
          id: 13,
          img: "src/assets/img/partner/topup/pulsa.png",
          title: "Pulsa",
        },
        {
          id: 14,
          img: "src/assets/img/partner/topup/Roaming.png",
          title: "Roaming",
        },
        {
          id: 15,
          img: "src/assets/img/partner/topup/Streaming.png",
          title: "Streaming",
        },
        {
          id: 16,
          img: "src/assets/img/partner/topup/Token-listrik.png",
          title: "Token Listrik",
        },
        {
          id: 17,
          img: "src/assets/img/partner/topup/token-PLN.png",
          title: "Token PLN",
        },
        {
          id: 18,
          img: "src/assets/img/partner/topup/TV.png",
          title: "TV",
        },
        {
          id: 19,
          img: "src/assets/img/partner/topup/voucher-game.png",
          title: "Voucher Game",
        },
      ],
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
