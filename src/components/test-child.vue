<template>
  <div>
    <span>im test-child.vue</span>
    <div @click="page_up">返回上一页</div>
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
    page_up() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
</style>