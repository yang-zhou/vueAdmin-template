<template>
  <div style="height:100%">
    <el-row>
      <el-col :span="4"><div style="border:solid;height:100px"></div></el-col>
      <el-col :span="20"><div style="border:solid;height:100%"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'model',
  data() {
    return {

    };
  },
  mounted() {
    console.log('clientHeight' + document.body.clientHeight);
    console.log('offsetHeight' + document.body.offsetHeight);
    console.log('scrollHeight' + document.body.scrollHeight);
  },
  computed: {
  }
};
</script>

<style scoped>
</style>