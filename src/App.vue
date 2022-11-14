<template>
  <div>
    <headerComponent />
    <router-view />
  </div>
</template>

<script>
import headerComponent from "./components/header.vue"
export default {
  components: {
    headerComponent
  }
}
</script>
