<template>
  <section>
    <div class="flex flex-wrap">
      <div class="container px-6 mx-auto w-full h-56">
        <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 justify-center gap-5">
          <li class="text-center">
            <a class="font-bold hover:text-primary-brand hover:cursor-pointer" v-on:click="toggleTabs(1)" 
              v-bind:class="{
                'text-basic-black': openTab !== 1,
                'border-b-primary-brand': openTab === 1, 
                'border-b-2': openTab === 1
              }">

              Profile
            </a>
          </li>
          <li class="text-center">
            <a class="font-bold hover:text-primary-brand hover:cursor-pointer" v-on:click="toggleTabs(2)" 
              v-bind:class="{
                'text-basic-black': openTab !== 2,
                'border-b-primary-brand': openTab === 2, 
                'border-b-2': openTab === 2
              }">

              Profile
            </a>
          </li>
          <li class="text-center">
            <a class="font-bold hover:text-primary-brand hover:cursor-pointer" v-on:click="toggleTabs(3)" 
              v-bind:class="{
                'text-basic-black': openTab !== 3,
                'border-b-primary-brand': openTab === 3, 
                'border-b-2': openTab === 3
              }">

              Profile
            </a>
          </li>
          <li class="text-center">
            <a class="font-bold hover:text-primary-brand hover:cursor-pointer" v-on:click="toggleTabs(4)" 
              v-bind:class="{
                'text-basic-black': openTab !== 4,
                'border-b-primary-brand': openTab === 4, 
                'border-b-2': openTab === 4
              }">

              Profile
            </a>
          </li>
        </ul>
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
          <div class="py-5 flex-auto">
            <div class="tab-content tab-space">
              <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                <div class="grid grid-cols-6 gap-4">
                  <h1>1</h1>
                  <h1>1</h1>
                  <h1>1</h1>
                  <h1>1</h1>
                  <h1>1</h1>
                  <h1>1</h1>
                </div>
              </div>
              <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                <div class="grid grid-cols-6 gap-4">
                  <h1>2</h1>
                  <h1>2</h1>
                  <h1>2</h1>
                  <h1>2</h1>
                  <h1>2</h1>
                  <h1>2</h1>
                </div>
              </div>
              <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                <p>
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly maximize timely deliverables for
                  real-time schemas.
                  <br />
                  <br />
                  Dramatically maintain clicks-and-mortar solutions
                  without functional solutions.
                </p>
              </div>
              <div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}">
                <p>
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly maximize timely deliverables for
                  real-time schemas.
                  <br />
                  <br />
                  Dramatically maintain clicks-and-mortar solutions
                  without functional solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "brand-tabs",
  data() {
    return {
      openTab: 1
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
}
</script>