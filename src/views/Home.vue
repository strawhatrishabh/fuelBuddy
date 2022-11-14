<template>
  <div>
    <!-- <div class="w-full h-screen bg-gray-200 flex justify-center items-center">
        <div class="bg-gray-400 w-96 h-96 relative z-0">
            <p class="italic text-bold bd-red-100 font-serif">Map</p>
            <div class="absolute inset-0 flex justify-center items-center z-10">
            <p class="text-2xl font-bold">This should be on top of the map</p>
            </div>
        </div>
    </div> -->
    <!-- v-if="screenLoader" -->
    <div class="container h-full fixed block top-50 left-50 z-50" v-if="screenLoader">
        <div class="flex items-center justify-center ">
            <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    </div>
    <div>
      <div class="container h-full" :class="screenLoader? 'opacity-25 z-30' : ''">
        <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="w-full"
              alt="Phone image"
            />
          </div>
          <div class="md:w-8/12 lg:w-5/12 mb-12 md:mb-0">
            <baseInput type='email' />
            <baseInput type='password' />
            <baseButton />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useLoginStore } from "../store/index.ts";
import baseInput from "../components/baseInput.vue"
import baseButton from "../components/baseButton.vue"
export default {
    name: "Home",
    components: {
        baseInput,
        baseButton
    },
    computed: {
        screenLoader() {
            const loginStore = useLoginStore();
            return loginStore.screenLoader
        }
    },
    data() {
        return {
            // screenLoader: loginStore.screenLoader
        }
    },
    methods: {
        login() {
            this.$router.push({path: '/dashboard'})
        }
    }
};
</script>

<style>
</style>