<template>

  <div class="content" >
 
    <div class="top" v-if="$route.path!='/login'">
      <Top :menulist="menulist"></Top>
  
    </div>
<<<<<<< HEAD
=======
    
    
>>>>>>> 99da4d3a3c47c78fae9b1c7f8890ec2263807ab8
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
 .ada{
   height: 80px;
   background-color: gold;
 }
 .content{
   display: flex;
  flex-direction: column;
    width: 100%;
    margin: 0px;
<<<<<<< HEAD
 
    
=======
    height: 920px;
    overflow:auto;
    overflow-y: auto;
>>>>>>> 99da4d3a3c47c78fae9b1c7f8890ec2263807ab8
    
    
 }
 .top{
 
  background-color: rgba(255, 255, 255, 1);
   height: 80px;
   width: 100%;
<<<<<<< HEAD
      z-index: 999;
 

  }
=======
   position: absolute;
   z-index: 999;
 

 
   
   
   
 }
>>>>>>> 99da4d3a3c47c78fae9b1c7f8890ec2263807ab8
 .down{
    background-color: rgba(255, 255, 255, 1);
   margin-top: 15px;
   min-height: 750px;
 
   width: 80%;
   align-self: center;
   border: 1px solid #eaeaea;
   box-shadow: 0 0 12px #cac6c6;
 }
</style>>
