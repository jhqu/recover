<template>
  <div class="content">
  
    <div class="down">我是about</div>

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
 .content{
   display: flex;
  flex-direction: column;
    width: 100%;
    margin: 0px;
   
  
    
 }
 .top{
 
    background-color: rgba(255, 255, 255, 1);
   height: 80px;
   width: 100%;
   
 }
 .down{
   z-index: 100;
    background-color: rgba(255, 255, 255, 1);
   margin-top: 15px;
   min-height: 750px;
   width: 80%;
   align-self: center;
   border: 1px solid #eaeaea;
   box-shadow: 0 0 12px #cac6c6;
 }
</style>>
