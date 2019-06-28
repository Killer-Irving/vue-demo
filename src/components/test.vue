<template>
  <div>
    <span>im test.vue</span>
    <router-link to="/test/testChild">go test-child</router-link>
    <router-link to="/test/testChild2">go test-child2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  props: {},
  components: {},
  mounted() {
  },
  created() {},
  watch: {
    $route(to, from) {
      console.log(to.path);
    }
  },
  methods: {
  }
};
</script>

<style scoped>
</style>