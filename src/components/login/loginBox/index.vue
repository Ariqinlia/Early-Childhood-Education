<template>
  <div class="register">
    <el-form
      ref="ruleForm2"
      :model="ruleForm2"
      :rules="rules2"
      status-icon
      label-width="100px"
      class="demo-ruleForm">
      <fieldset>
        <legend>用户登录</legend>
        <el-form-item
          label="昵称"
          prop="username">
          <el-input
            v-model="ruleForm2.username"
            type="text"
            autocomplete="off"/>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="pass">
          <el-input
            v-model="ruleForm2.pass"
            type="password"
            autocomplete="off"/>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm2')">登录</el-button>
          <el-button @click="resetForm('ruleForm2')">注册</el-button>
        </el-form-item>
      </fieldset>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入昵称'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
        username: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push({ path: '/' })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$router.push({ path: '/register' })
    }
  }
}
</script>

<style lang="scss">
  .register {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
  fieldset {
    padding: 40px;
  }
  .el-form-item:last-child {
    margin: 0;
  }
</style>
