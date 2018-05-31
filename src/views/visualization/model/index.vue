<template>
  <!--
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
    <el-col :span="20" style="height:100%;">
      <div style="height:100%;padding:0px;margin:0px;position: relative;" @drop="dropDownElement" @dragover.prevent ref="container">
        <VueDragResize :isActive="true" :parentLimitation="true" :x="290" :w="200" :h="200" v-on:resizing="resize" @dragging="onDragging">
          <h3>Hello World!</h3>
          <p>{{ top }} х {{ left }} </p>
          <p>{{ width }} х {{ height }}</p>
        </VueDragResize>
      </div>
    </el-col>
  </el-row>
  -->
  <div style="width:100%;" :style="{height:contentHeight + 'px'}">
    <div class="left-container">
      <el-row style="height:5%;font-size:25px">
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
      </el-row>
      <div v-if="active==1" :span="24" style="height:95%">
          <vue-scroll :ops="ops">
            <el-row style="font-size:50px;text-align:center">
              <el-col :span="12" style="padding-top:15px;" v-for="(icon,index) in chartIcons" :key="index" draggable="true">
                <a aria-hidden="true" :class="icon.iconClazz"></a>
              </el-col>
            </el-row>
          </vue-scroll>
        </div>
        <el-col v-if="active==2" :span="24" style="height:95%">
          2
        </el-col>
        <el-col v-if="active==3" :span="24" style="height:95%">
          3
        </el-col>
        <el-col v-if="active==4" :span="24" style="height:95%">
          4
        </el-col>
    </div>
    <div style="width:85%;height:100%;float:left;">
      <div style="height:100%;position: relative;" @drop="dropDownElement" @dragover.prevent ref="container">
        <VueDragResize :isActive="true" :parentLimitation="true" :x="290" :w="200" :h="200" v-on:resizing="resize" @dragging="onDragging">
          <h3>Hello World!</h3>
          <p>{{ top }} х {{ left }} </p>
          <p>{{ width }} х {{ height }}</p>
        </VueDragResize>
      </div>
    </div>
  </div>

</template>

<script>
import VueDragResize from 'vue-drag-resize';
import VueDraggableResizable from 'vue-draggable-resizable';

function ChartIcon(iconClazz) {
  this.iconClazz = iconClazz;
}
export default {
  name: 'model',
  components: {
    VueDragResize,
    VueDraggableResizable
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
      left: 0,
      dragElementData: {
        minX: 0,
        maxX: 0,
        minY: 0,
        maxY: 0
      }
    };
  },
  mounted() {
    // 初始化拖拽框位置
    const container = this.$refs.container;
    const containerX = container.offsetLeft;
    const containerY = container.offsetTop;
    this.dragOverElement.minX = containerX;
    this.dragOverElement.minY = containerY;
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
    resize(currentRect) {
      this.width = currentRect.width;
      this.height = currentRect.height;
      if (currentRect.left >= this.dragOverElement.minX) {
        currentRect.left = this.dragOverElement.minX;
      }
      this.top = currentRect.top;
      // this.left = currentRect.left;
    },
    onDragging(currentRect) {
      this.width = currentRect.width;
      this.height = currentRect.height;
      if (currentRect.left < this.dragOverElement.minX) {
        console.log(this.dragOverElement.minX);
        currentRect.left = this.dragOverElement.minX;
        console.log(currentRect.left);
      }
    },
    dropDownElement(event) {
      console.log(event.target.offsetLeft + '--------' + event.target.offsetTop);
      console.log(event.target.offsetHeight + '--------' + event.target.offsetWidth);
      console.log(event.offsetX + '-------' + event.offsetY);
    }
  }
};
</script>

<style scoped>
  .left-container {
    height:100%;width:15%;float:left;
    border-bottom: solid 1px #e6e6e6
  }




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