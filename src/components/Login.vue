<template>
  <div>
    <div @click="login">登录 Im login.vue</div>
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
  created() {
    if (this.$store.state.isLogin) {
      this.$router.push("/index");
    }
    this.request_aaa()
  },
  watch: {},
  methods: {
    login() {
      this.$router.push("/index?id=11");
    },
    request_aaa() {
      this.$request.get();
    }
  }
};
</script>

<style scoped>
</style>