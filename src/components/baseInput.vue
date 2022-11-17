<template>
  <div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2 text-left" :for="type">{{type}}</label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        :class="inputValue || validateType ? '' : 'border-red-500'"
        :id="type"
        :type="type"
        :placeholder="type"
        v-model="inputValue"
        @input="validateType = false; validateInput()"
      />
      <p
        v-if="(!inputValue && !validateType) || inputValidation"
        class="text-red-500 text-xs italic"
      >Please choose a {{type}}.</p>
    </div>
  </div>
</template>

<script>
import { useLoginStore } from "../store/index.ts";
export default {
  name: "baseInput",
  props: ["type"],
  data() {
    return {
      inputValue: "",
      validateType: true,
      inputValidation: false
    };
  },
  methods: {
    validateInput() {
      const loginStore = useLoginStore();
      if (this.type == "email") {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/;
        if (this.inputValue.match(mailformat)) {
          loginStore.username = this.inputValue;
          this.inputValidation = false;
          loginStore.validInput = true;
        } else {
          this.inputValidation = true;
          loginStore.validInput = false;
        }
      }
      if (this.type == "password") {
        if (this.inputValue) {
          this.inputValidation = false;
          loginStore.validInput = true;
        } else {
          this.inputValidation = true;
          loginStore.validInput = false;
        }
        loginStore.password = this.inputValue;
      }
      if(this.type == 'name') {
        loginStore.name = this.inputValue;
      }
    }
  }
};
</script>

<style>
</style>