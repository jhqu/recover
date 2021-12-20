<template>

  <div class="content"  >
 
    <div class="top" v-if="$route.path!='/login'">
      <Top :menulist="menulist"></Top>
  
    </div>

<router-view></router-view>
  </div>

</template>

<script>
import Top from './components/top.vue'


export default {
   name:'home',
   components:{
     Top:Top
   },
   data(){
     return {
       menulist: [
        { id: 1, name: "评价页面管理",url:'/'},
        { id: 2, name: "评价尺度管理",url:'/about' },
        { id: 3, name: "评价人员管理" ,url:'about'},
        { id: 4, name: "菜单管理" ,url:'/abut'},
     
        { id: 6, name: "账号管理" ,url:'/out'},
        { id: 7, name: "表单权限管理" ,url:'/at'},
      ],
           sumArr:[
             {name:'姚明',sex:'男',id:1},
              {name:'王治郅',sex:'男',id:2},
             {name:'易建联',sex:'男',id:3}
           ],
             activeClass: 'active',
            errorClass: 'color:red',
            isShow:false,
            styleObjct:{
              
            }
          }
        
   },
   mounted(){
     console.log(this.$route.path);
   },
   methods:{
     setBackPlack(){
      this.sumArr.pop() //末尾删除
      // this.sumArr.shift() //开头删除
      // this.sumArr.push({name:'詹姆斯',sex:'男',id:4}) //向下添加
     // this.sumArr.unshift({name:'詹姆斯',sex:'男',id:4}) //向上添加
     }
   },
   
}
</script>

<style  scoped>

 .content{

   display: flex;
  flex-direction: column;
    width: 100%;
    margin: 0px;

    min-height: 880px;
    overflow:hidden;
    overflow-y: auto;
 }
 .top{
 
  background-color: rgba(255, 255, 255, 1);
   height: 80px;
   width: 100%;
  
   position: absolute;
   z-index: 999;
  
 
}


</style>
