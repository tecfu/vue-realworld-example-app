<template>
  <div id="app">
    <rwv-header></rwv-header>
    <router-view></router-view>
    <rwv-footer></rwv-footer>
  </div>
</template>

<script>
import "@/../public/scss/style.scss";
import { FETCH_CONFIG } from "@/store/actions.type";
import RwvHeader from "@/components/TheHeader";
import RwvFooter from "@/components/TheFooter";

export default {
  name: "App",
  components: {
    RwvHeader,
    RwvFooter
  },
  created: function() {
    this.$store.dispatch(FETCH_CONFIG);
  }
};
</script>

<style>
</style>
