<template>
  <div>
    <span>im test.vue</span>
    <router-link to="./testChild">go test-child</router-link>
    <router-link to="./testChild2">go test-child2</router-link>
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
    setTimeout(() => {
      this.$store.state.count = 2;
    }, 1000);
  },
  created() {},
  watch: {},
  methods: {
    reduce() {
      this.$store.state.count--;
    },
    add() {
      this.$store.state.count++;
    }
  }
};
</script>

<style scoped>
</style>