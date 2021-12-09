<template>
  <div class="hone_centre">
    <div class="ada"></div>
    <div class="down">
      <div class="top">编辑评价项</div>
      <div class="bottom">
        <div class="left">
          <el-row class="tac">
            <el-col :span="20">
              <h5>请选择类型</h5>
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @select="handleSelect"
              >
                <el-menu-item index="1">
                  <i class="el-icon-menu"></i>
                  <span slot="title">添加标题</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">单选按钮</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-document"></i>
                  <span slot="title">多选按钮</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">下拉列表</span>
                </el-menu-item>
                <el-menu-item index="5">
                  <i class="el-icon-setting"></i>
                  <span slot="title">文本框</span>
                </el-menu-item>
                <el-menu-item index="6">
                  <i class="el-icon-setting"></i>
                  <span slot="title">多行文本框</span>
                </el-menu-item>
                <el-menu-item index="7">
                  <i class="el-icon-setting"></i>
                  <span slot="title">日期选择</span>
                </el-menu-item>
                <el-menu-item index="8">
                  <i class="el-icon-setting"></i>
                  <span slot="title">地址选择</span>
                </el-menu-item>
                <el-menu-item index="9">
                  <i class="el-icon-setting"></i>
                  <span slot="title">图片上传</span>
                </el-menu-item>
                <el-menu-item index="10">
                  <i class="el-icon-setting"></i>
                  <span slot="title">附件上传</span>
                </el-menu-item>
                <el-menu-item index="11">
                  <i class="el-icon-setting"></i>
                  <span slot="title">表格</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </div>
        <div class="midel">
          <div class="midel_top">
             <div>
               <div></div>
               <div></div>
             </div>
          </div>
          <div class="midel_bottom">
            <el-row>
              <el-button type="primary">提交</el-button>
              <el-button @click="goback()">返回</el-button>
            </el-row>
          </div>
        </div>
        <div class="right">右边</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "editparity",
  data() {
    return {
      
    };
  },
  methods: {
    goback() {
      this.$router.push("/");
    },
    getparams() {
      console.log(this.$route.params.id);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {
    console.log(this.$route.params.id);
  },
};
</script>
<style scoped>
.el-menu {
  border-right: none;
}
.el-menu-item,
.el-submenu__title {
  height: 45px;
  line-height: 45px;
}
.hone_centre {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
}
.ada {
  height: 80px;
  background-color: red;
  margin: 0;
  padding: 0;
}
.top {
  border-bottom: 1px solid rgba(170, 170, 170, 1);
  padding: 10px 20px;
}
.bottom {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  height: 700px;
}
.midel_top {
  height: 80%;
  z-index: 0;
  height: 600px;
  overflow: hidden;
  overflow-y: auto;
  padding: 10px 20px;
}
.midel_bottom {
  border-top: 1px solid rgba(170, 170, 170, 1);
  height: 100px;
  z-index: 999;
  line-height: 100px;
  text-align: center;
  /* background-color: rgba(215, 215, 215, 1); */
}
.left {
  border-right: 1px solid rgba(170, 170, 170, 1);
  padding: 10px 20px;
  width: 12%;
  min-height: 700px;
  margin: 0 auto;
}
.right {
  border-left: 1px solid rgba(170, 170, 170, 1);
  padding: 10px 20px;
  width: 25%;
  height: 100%;
  min-height: 700px;
}
.midel {
  flex: 1;
  height: 100%;
}
.down {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 15px;
  max-height: 750px;
  width: 80%;
  align-self: center;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 12px #cac6c6;
}
</style>