<template>
  <div>
    <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="login()"
        >Sign In</button>
      </div>
  </div>
</template>

<script>
import { useLoginStore } from "../store/index.ts";
export default {
    name: "baseInput",
    data() {
        return {

        }
    },
    methods: {
        async login() {
            const loginStore = useLoginStore();
            if(loginStore.validInput) {
                let login = await loginStore.authenticateFirebase();
                this.$router.push({path: "/dashboard"})
            }
        }
    }
}
</script>

<style>

</style>