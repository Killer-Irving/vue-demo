<template>
  <div>
    <span>im test-child2.vue</span>
    <div @click="go_info">go info</div>
    <!-- <router-link to="./info">go info</router-link>
    <router-view></router-view>-->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {},
  components: {},
  mounted() {},
  created() {},
  watch: {},
  methods: {
    go_info() {
      this.$router.push("/info");
    }
  }
};
</script>

<style scoped>
</style>