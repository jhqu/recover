<template>
   <div class="down">
   
  </div>
</template>
<script>
export default {
    name:'editparity',
    data(){
        return{

        }
    },
    methods:{
     getparams(){
         console.log( this.$route.params.id);
     
     }
    },
    mounted(){
        console.log(this.$route.params.id)
    }

   
}
</script>
<style scoped>
.down {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 15px;
  min-height: 750px;
  width: 80%;
  align-self: center;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 12px #cac6c6;
  padding: 10px 20px;
}
</style>