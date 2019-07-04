<template>
  <div>
    <div @click="login">登录 Im login.vue</div>
    <div>{{this.$store.state.login.pagelog}}</div>
    <div>{{this.content}}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      page: "login"
    };
  },
  props: {},
  components: {},
  computed: {
    ...mapState({
      content: state => state.login.pagelog
    })
  },
  mounted() {},
  created() {
    console.log(this.$store.state.login.pagelog);
    // if (this.$store.state.isLogin) {
    //   this.$router.push("/index");
    // }
    // this.request_aaa();
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