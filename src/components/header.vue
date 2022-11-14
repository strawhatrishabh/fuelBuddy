<template>
  <div>
    <section class="container mx-auto">
    <div class="relative bg-white">
      <div class="px-4">
        <div
          class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
        >
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span class="sr-only">fuel buddy</span>
              <img
                class="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt
              />
            </a>
          </div>
          <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <p
              v-if="loggedUser"
              class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >{{loggedUser}}</p>
            <p
              v-else
              @click="$router.push('/')"
              class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >SignIn</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  </div>
</template>

<script>
import { useLoginStore } from "../store/index.ts";
export default {
    name: "headerComponent",
    computed: {
        loggedUser() {
            const loginStore = useLoginStore();
            return loginStore.loggedUser
        }
    },
};
</script>

<style>
</style>