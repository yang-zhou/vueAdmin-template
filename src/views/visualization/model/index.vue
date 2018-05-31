<template>
  <el-row :style="{height:contentHeight + 'px'}">
    <el-col :span="4" class="cel-col">
      <el-row class="custom-tabs">
        <el-col :span="24" style="height:5%">
          <el-col id="1" :span="6" class="el-tabs__item" :class="{'is-active':active==1}" @click.native="changeChartType">
            <i aria-hidden="true" class="fa fa-bar-chart"></i>
          </el-col>
          <el-col id="2" :span="6" class="el-tabs__item" :class="{'is-active':active==2}" @click.native="changeChartType">
            <i aria-hidden="true" class="fa fa-table"></i>
          </el-col>
          <el-col id="3" :span="6" class="el-tabs__item" :class="{'is-active':active==3}" @click.native="changeChartType">
            <i aria-hidden="true" class="fa fa-pie-chart"></i>
          </el-col>
          <el-col id="4" :span="6" class="el-tabs__item" :class="{'is-active':active==4}" @click.native="changeChartType">
            <i aria-hidden="true" class="fa fa-user-circle"></i>
          </el-col>
        </el-col>
        <el-col v-if="active==1" :span="24" style="height:95%">
          <vue-scroll :ops="ops">
            <el-row style="font-size:50px">
              <el-col :span="12" style="padding-top:15px;" v-for="(icon,index) in chartIcons" :key="index" draggable="true">
                <a aria-hidden="true" :class="icon.iconClazz"></a>
              </el-col>
            </el-row>
          </vue-scroll>
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
    </el-col>
    <el-col :span="20" class="cel-col" style="height:100%;" @drop.native="dropDownElement" @dragover.native.prevent>
      <div style="height:100%;width:100%;border:solid blue">
        <VueDragResize :parentLimitation="true" :isActive="true" :x="300" :w="200" :h="200" v-on:resizing="resize" v-on:dragging="resize">
          <h3>Hello World!</h3>
          <p>{{ top }} х {{ left }} </p>
          <p>{{ width }} х {{ height }}</p>
        </VueDragResize>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import VueDragResize from 'vue-drag-resize';

function ChartIcon(iconClazz) {
  this.iconClazz = iconClazz;
}
export default {
  name: 'model',
  components: {
    VueDragResize
  },
  data() {
    return {
      ops: {
        rail: {
          vRail: {
            width: '3px'
          }
        }
      },
      active: 1,
      width: 0,
      height: 0,
      top: 0,
      left: 0
    };
  },
  mounted() {
  },
  computed: {
    contentHeight() {
      return this.$store.state.app.clientHeight - this.$store.state.app.navHeight;
    },
    chartIcons() {
      const icons = [];
      for (let i = 0; i < 100; i++) {
        icons.push(new ChartIcon('fa fa-bar-chart'));
      }
      return icons;
    }
  },
  methods: {
    changeChartType(event) {
      const currentId = event.currentTarget.id;
      if (currentId) {
        this.active = currentId;
      }
    },
    resize(newRect) {
      this.width = newRect.width;
      this.height = newRect.height;
      this.top = newRect.top;
      this.left = newRect.left;
    },
    dropDownElement(event) {
      console.log(event.offsetX + '-------' + event.offsetY);
    },
    dragOverElement(event) {
      event.preventDefault();
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
    border-right:solid 1px #e6e6e6
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