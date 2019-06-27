<template>
  <div>
    <div>im index.vue</div>
    <div>我是参数{{id}}</div>
    <router-link to="/test">go test</router-link>
    <router-link to="/hello">go hello</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0
    };
  },
  props: {},
  components: {},
  mounted() {},
  created() {
    this.id = this.$route.query.id;
  },
  watch: {},
  methods: {}
};
</script>

<style scoped>
</style>