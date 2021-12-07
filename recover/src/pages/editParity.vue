<template>
  <div class="down">
    <div class="top">编辑评价项</div>
    <div class="bottom">
      <div class="left">左边左边左边左边左边左边左边</div>
      <div class="midel">
          <div class="midel_top">
              顶部<br/>sfsdfs
              顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs
              顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs
              顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs
              顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs
              顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs
              顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs顶部<br/>sfsdfs
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
</template>
<script>
export default {
  name: "editparity",
  data() {
    return {};
  },
  methods: {
      goback(){
       this.$router.push('/')
      },
    getparams() {
      console.log(this.$route.params.id);
    },
  },
  mounted() {
    console.log(this.$route.params.id);
  },
};
</script>
<style scoped>
.top {
  
  border-bottom: 1px solid rgba(170, 170, 170, 1);;
  padding: 10px 20px;
}
.bottom {
  
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  height: 700px;
}
.midel_top{
    height: 80%;
    z-index: 0;
    height: 600px;
    overflow: hidden;
    overflow-y: auto;
    padding: 10px 20px;
}
.midel_bottom{
    border-top:1px solid rgba(170, 170, 170, 1);;
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
  border-left: 1px solid rgba(170, 170, 170, 1);;
   padding: 10px 20px;
  width: 25%;
   height: 100%;
   min-height: 700px;
   
}
.midel{
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