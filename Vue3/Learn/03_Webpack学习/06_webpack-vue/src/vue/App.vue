<template>
  <h2>这是vue渲染的</h2>
  <h2>{{ title }}</h2>

  <hello-world></hello-world>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";

export default {
  //注册局部组件
  components: {
    HelloWorld,
  },
  data() {
    return {
      title: "hello,vue",
      message: "xxx",
    };
  },
  methods: {},
};
</script>

<style scoped>
h2 {
  color: red;
}
</style>
