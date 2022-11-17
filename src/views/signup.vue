<template>
    <div>
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
            <baseInput type='name' />
            <baseInput type='email' />
            <baseInput type='password' />
            <baseButton :btnType="'SignUp'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue"
import baseInput from "../components/baseInput.vue"
import baseButton from "../components/baseButton.vue"
import { useLoginStore } from "../store/index.ts";

const loginStore = useLoginStore();

let screenLoader = ref('');
screenLoader.value = loginStore.screenLoader
</script>