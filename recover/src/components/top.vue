<template>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item 
  :index="item.id.toString()"
  v-for="item of menulist"  
  :key="item.id">评价页面管理</el-menu-item>
  </el-menu>



</template>
<script>
export default {
     data() {
      return {
        activeIndex: '3',
        menulist:[
            {id:1,name:'评价页面管理'},
            {id:2,name:'评价尺度管理'},
            {id:3,name:'评价人员管理'},
            {id:4,name:'菜单管理'},
            {id:5,name:'权限管理'},
            {id:6,name:'账号管理'},
            {id:7,name:'表单权限管理'},
        ],
        
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style  scoped>

</style>