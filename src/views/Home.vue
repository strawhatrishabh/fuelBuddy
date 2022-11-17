<template>
  <div>
    <div class="container h-full fixed block top-50 left-50 z-50" v-if="screenLoader">
      <div class="flex items-center justify-center">
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
            <baseInput type="email" />
            <baseInput type="password" />
            <baseButton :btnType="'SignIn'" />
            <p class="text-sm font-semibold mt-2 pt-1 mb-0">
              Don't have an account?
              <a
                href="javascript:void(0)"
                class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                @click.prevent="signup()"
              >Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
    const route = useRoute()

    function signup(query) {
      router.push({
        path: '/signup',
      })
    }
</script>

<script>
import { useLoginStore } from "../store/index.ts";
import baseInput from "../components/baseInput.vue";
import baseButton from "../components/baseButton.vue";
export default {
  name: "Home",
  components: {
    baseInput,
    baseButton
  },
  computed: {
    screenLoader() {
      const loginStore = useLoginStore();
      return loginStore.screenLoader;
    }
  },
  data() {
    return {
      // screenLoader: loginStore.screenLoader
    };
  }
};
</script>

<style>
</style>