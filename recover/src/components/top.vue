<template>
  <div class="contenttop">
    <div class="left">
      <div class="logo_png"></div>
      <div class="logo_name">收破烂评估</div>
    </div>
    <div class="centre">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item
          :index="item.id.toString()"
          v-for="item of menulist"
          :key="item.id"
          >评价页面管理</el-menu-item
        >
      </el-menu>
    </div>
    <div class="right">
      <el-badge :value="3" class="item">
      <div class="messge">
        <!-- <div class="megnum">8</div> -->
      </div>
      </el-badge>
      <div class="mesglist">
        <el-dropdown>
  <span class="el-dropdown-link">
    消息
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕dgdfgdgdgfdgdfgdfgdf</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
      </div>
      <div class="orle"></div>
      <div class="rolelist">
        <el-dropdown>
  <span class="el-dropdown-link">
    管理员
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕dgdfgdgdgfdgdfgdfgdf</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
      </div>
      <div class="exit"></div>
      <div class="exittext">退出登录</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "3",
      // menulist: [
      //   { id: 1, name: "评价页面管理" },
      //   { id: 2, name: "评价尺度管理" },
      //   { id: 3, name: "评价人员管理" },
      //   { id: 4, name: "菜单管理" },
      //   { id: 5, name: "权限管理" },
      //   { id: 6, name: "账号管理" },
      //   { id: 7, name: "表单权限管理" },
      // ],
    };
  },
  props:['menulist'],
  methods: {
    handleSelect(key, keyPath) {
      
      console.log(this.menulist)
      if(key === "1")
      {
        this.$router.push('/about')
      }else if(key === "2"){
           this.$router.push('/')
      }
     
    },
    

  },
};
</script>
<style  scoped>
.contenttop {
  
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
<<<<<<< HEAD
  z-index: 0;

=======
 
>>>>>>> 99da4d3a3c47c78fae9b1c7f8890ec2263807ab8
}
.left {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 0 0 20px;
}
.left div {
  margin: 0 0 0 15px;
}
.centre /deep/.el-menu.el-menu--horizontal {
border-bottom: none;
}
.logo_png {
  background: url(../assets/imgs/logo.png) no-repeat;
  background-size: 100% 100%;
  width: 52px;
  height: 48px;
}
.right {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px 0 0;
}
.right div {
  margin-left: 10px;
}
.messge {
  background: url(../assets/imgs/messge.png);
  background-size: 100% 100%;
  width: 32px;
  height: 32px;
}
.mesglist{
  margin-left: -5px !important;
}
.rolelist{
  margin-left: -3px !important;
}
.megnum {
  position: relative;
  color: white;
  font-size: 14px;
  background-color: red;
  border-radius: 50%;

  text-align: center;
  margin: 0 0px 0 0;
  left: -20px;
  top: -8px;
  
}
.orle{
    background: url(../assets/imgs/role.png);
  background-size: 100% 100%;
  width: 32px;
  height: 32px;
}
.exit{
    background: url(../assets/imgs/loginout.png);
  background-size: 100% 100%;
  width: 30px;
  height: 30px;
}
  .exittext{
        font-size: 14px;
    color: #606266;
    cursor: pointer;
    outline: 0;
  }
.dropdown{
  color: red;
}
</style>