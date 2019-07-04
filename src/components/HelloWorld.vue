<template>
  <div>
    <div>我是helloworld页面</div>
    <div>state：{{this.$store.state.index.count}}</div>
    <div>getters:{{this.$store.getters.stateCount}}</div>
    <span @click="reduce">-</span>
    <span @click="add">+</span>
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
      this.$store.state.index.count = 2;
    }, 1000);
  },
  created() {
    console.log(this.$store.state)
    console.log(this.$store.getters)
  },
  watch: {},
  methods: {
    reduce() {
      this.$store.state.index.count--;
    },
    add() {
      this.$store.state.index.count++;
    }
  }
};
</script>

<style scoped>
</style>