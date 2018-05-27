<template>
  <el-row :gutter="12"  class="box-line">
    <el-col :span="6" v-for="(box, index) in boxs" :key="index" class="box-col">
      <div class="box" :class="{shadow: currentHover==index?true:false}" @mouseover="mouseOver(index)" @mouseout="mouseOut(index)">
        <div class="tool-container">
          <el-row :span="24" class="tool-content" v-if="currentHover==index">
            <el-col :span="8"><a class="el-icon-edit" @click="editModel"></a></el-col>
            <el-col :span="8"><a class="el-icon-share" @click="shareModel"></a></el-col>
            <el-col :span="8"><a class="el-icon-delete" @click="deleteModel"></a></el-col>
          </el-row>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {
      currentHover: -1
    };
  },
  computed: {
    boxs() {
      const boxs = [];
      for (let i = 0; i < 10; i++) {
        boxs.push({ name: 'yang' + i, age: i });
      }
      return boxs;
    }
  },
  methods: {
    // 阴影效果Logic
    mouseOver(index) {
      this.currentHover = index;
    },
    mouseOut(index) {
      this.currentHover = -1;
    },
    // 编辑模型
    editModel() {
      alert('编辑页面');
    },
    // 预览模型
    preViewModel() {
      alert('预览页面');
    },
    // 发布模型
    shareModel() {
      alert('发布页面');
    },
    // 删除模型
    deleteModel() {
      this.$confirm('此操作将永久删除模型, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
};
</script>

<style scoped>
  .box-line {
    padding-left: 5px;
    padding-right: 5px;
  }
  .box-col {
     padding-top: 5px
  }
  .box {
    height: 250px;
    border: 0.5px solid;
    box-shadow: 10px 10px 20px #888888;
    border-radius: 8px;
    background: url(/src/assets/img/view.jpg) no-repeat center center;
    background-size: 100% 100%
  }
  .shadow {
    box-shadow: 15px 15px 50px #888888;
  }
  .tool-container {
    text-align: center;
    height: 100%;
  }
  .tool-content {
  }
  .tool-content > div{
    height: auto;
    font-size: 40px;
    color: white
  }
</style>
