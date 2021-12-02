<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="60px" class="demo-ruleForm login-container">
      <h3 class="title">系统登录</h3>
  <el-form-item label="账号" prop="user">
    <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
   <el-checkbox v-model="checked" class="checkpaw">记住密码</el-checkbox>
  <el-form-item>
    <el-button type="primary" style="width:100%" @click="submitForm('ruleForm')">提交</el-button>
    <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
  </el-form-item>
</el-form>
      
  
</template>

<script>
export default {
   name:'login',
      data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      let validateUser =(rule,value,callback)=>{
            if(value===''){
                callback(new Error('请输入账号'))
            }else{
                callback()
            }
      }
      return {
        ruleForm: {
          user: '',
          pass: '',
          age: ''
        },
        checked:true,
        rules: {
          user: [
            { validator: validateUser, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }

}
</script>

<style scoped>
.login-container{
 -webkit-border-radius: 5px;
 border-radius: 5px;
 width: 340px;
 margin: 180px auto;
 padding: 30px 30px 0 0;
border: 1px solid #eaeaea;
box-shadow: 0 0 25px #cac6c6;
}
.title{
     margin: 0px auto 30px 30px;
      text-align: center;
      color: #505458;
}
.checkpaw{
    margin: 0 0 20px 30px;
}
</style>>

