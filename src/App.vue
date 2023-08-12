<template>
  <NavBar />
  <router-view></router-view>
</template>
<script>
import NavBar from "./views/NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
};
</script>
