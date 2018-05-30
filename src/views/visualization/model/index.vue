<template>
  <el-row :style="{height:contentHeight + 'px'}">
    <el-col :span="4" class="cel-col">
      <el-row class="custom-tabs">
        <el-col :span="24" style="height:5%">
          <el-col id="1" :span="6" class="el-tabs__item" :class="{'is-active':active==1}" @click.native="changeChartType($event)">
            <i aria-hidden="true" class="fa fa-bar-chart" style=""></i>
          </el-col>
          <el-col id="2" :span="6" class="el-tabs__item" :class="{'is-active':active==2}" @click.native="changeChartType($event)">
            <i aria-hidden="true" class="fa fa-table"></i>
          </el-col>
          <el-col id="3" :span="6" class="el-tabs__item" :class="{'is-active':active==3}" @click.native="changeChartType($event)">
            <i aria-hidden="true" class="fa fa-pie-chart"></i>
          </el-col>
          <el-col id="4" :span="6" class="el-tabs__item" :class="{'is-active':active==4}" @click.native="changeChartType($event)">
            <i aria-hidden="true" class="fa fa-user-circle"></i>
          </el-col>
        </el-col>
        <el-col v-if="active==1" :span="24" style="height:95%">
          1
        </el-col>
        <el-col v-if="active==2" :span="24" style="height:95%">
          2
        </el-col>
        <el-col v-if="active==3" :span="24" style="height:95%">
          3
        </el-col>
        <el-col v-if="active==4" :span="24" style="height:95%">
          4
        </el-col>
      </el-row>
      <!--<div class="el-tabs__nav-scroll">
        <div role="tablist" class="el-tabs__nav" style="transform: translateX(0px);">
          <div class="el-tabs__active-bar is-top" style="width: 19px; transform: translateX(0px);"></div>
          <div id="tab-0" aria-controls="pane-0" role="tab" aria-selected="true" tabindex="0" class="el-tabs__item is-top is-active">
            <span data-v-56ceeb23="" class="tab-label" style="width: 25%;"><i data-v-56ceeb23="" aria-hidden="true" class="fa fa-bar-chart"></i></span>
          </div>
          <div id="tab-1" aria-controls="pane-1" role="tab" tabindex="-1" class="el-tabs__item is-top">
            <span data-v-56ceeb23="" class="tab-label"><i data-v-56ceeb23="" aria-hidden="true" class="fa fa-table"></i></span>
          </div>
          <div id="tab-2" aria-controls="pane-2" role="tab" tabindex="-1" class="el-tabs__item is-top">
            <span data-v-56ceeb23="" class="tab-label"><i data-v-56ceeb23="" aria-hidden="true" class="fa fa-pie-chart"></i></span>
          </div>
          <div id="tab-3" aria-controls="pane-3" role="tab" tabindex="-1" class="el-tabs__item is-top">
            <span data-v-56ceeb23="" class="tab-label"><i data-v-56ceeb23="" aria-hidden="true" class="fa fa-user-circle"></i></span>
          </div>
        </div>
      </div>-->
    </el-col>
    <el-col :span="20" class="cel-col"><div style="border:solid;height:100%"></div></el-col>
  </el-row>
</template>

<script>
export default {
  name: 'model',
  data() {
    return {
      active: 1
    };
  },
  mounted() {
  },
  computed: {
    contentHeight() {
      return this.$store.state.app.clientHeight - this.$store.state.app.navHeight;
    }
  },
  methods: {
    changeChartType($event) {
      const currentId = $event.currentTarget.id;
      if (currentId) {
        this.active = currentId;
      }
    }
  }
};
</script>

<style scoped>
  .cel-col {
    height: 100%;
  }
  .custom-tabs {
    height: 100%;
    text-align:center;
  }
  .custom-tabs > div:first-child {
    border-bottom:solid 1px #e6e6e6
  }
  .custom-tabs > div > div{
    font-size: 25px;
  }
  .tab-label {
    font-size: 25px;
  }
</style>