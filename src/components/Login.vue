<template>
  <div>
    <div @click="login">登录 Im login.vue</div>
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
  mounted() {},
  created() {
    if (this.$store.state.isLogin) {
      this.$router.push("./index");
    }
  },
  watch: {},
  methods: {
    login() {
      this.$router.push("./index?id=11");
    }
  }
};
</script>

<style scoped>
</style>