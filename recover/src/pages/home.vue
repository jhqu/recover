<template>
  <div>
    <ul>
     
      <li v-for="item of sumArr" :class="'fontclor'" :key="item.id">{{item.name}}{{item.id}}</li>
    </ul>
    <el-button type="primary" round @click="setBackPlack">更改篮球运动员</el-button>
  </div>
</template>

<script>
export default {
   name:'home',
   data(){
     return {
           sumArr:[
             {name:'姚明',sex:'男',id:1},
              {name:'王治郅',sex:'男',id:2},
             {name:'易建联',sex:'男',id:3}
           ],
             activeClass: 'active',
            errorClass: 'color:red'
          }
   },
   methods:{
     setBackPlack(){
      this.sumArr.pop() //末尾删除
      // this.sumArr.shift() //开头删除
      // this.sumArr.push({name:'詹姆斯',sex:'男',id:4}) //向下添加
     // this.sumArr.unshift({name:'詹姆斯',sex:'男',id:4}) //向上添加
     }
   }
}
</script>

<style  scoped>
 .fontclor{
   color: red;
 }
</style>>
