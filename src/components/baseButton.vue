<template>
  <div>
    <div class="flex items-center justify-between">
        <button
          v-if="btnType == 'SignIn'"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="login()"
        >Sign In</button>
        <button
          v-if="btnType == 'SignUp'"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="signup()"
        >Sign Up</button>
      </div>
  </div>
</template>

<script>
import { useLoginStore } from "../store/index.ts";
export default {
    name: "baseInput",
    props: ["btnType"],
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
        },
        async signup() {
          const loginStore = useLoginStore();
          if(loginStore.validInput) {
                let signup = await loginStore.createFirebaseUser();
                this.$router.push({path: "/dashboard"})
            }
        }
    }
}
</script>

<style>

</style>