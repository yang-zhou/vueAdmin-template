<template>
  <el-row :style="{height:contentHeight + 'px'}">
    <el-col :span="4" class="auto-height">
      <div style="height:8%">
        <el-tabs>
          <el-tab-pane>
            <span slot="label"><i class="fa fa-bar-chart" aria-hidden="true"></i></span>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="fa fa-table" aria-hidden="true"></i></span>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="fa fa-user-circle" aria-hidden="true"></i></span>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div style="height:92%;border:red solid;">234</div>
    </el-col>
    <el-col :span="20" class="auto-height"><div></div></el-col>
  </el-row>
</template>

<script>
export default {
  name: 'model',
  data() {
    return {

    };
  },
  mounted() {
  },
  computed: {
    contentHeight() {
      return this.$store.state.app.clientHeight - this.$store.state.app.navHeight;
    }
  }
};
</script>

<style scoped>
  .auto-height {
    height: 100%;
  }
  .auto-height > div {
    height: 100%;
    border: solid 0.5px;
  }
</style>