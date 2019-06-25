<template>
  <div>
    <span>im info.vue</span>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
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