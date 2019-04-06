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
        <legend>用户注册</legend>
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
        <el-form-item
          label="确认密码"
          prop="checkPass">
          <el-input
            v-model="ruleForm2.checkPass"
            type="password"
            autocomplete="off"/>
        </el-form-item>
        <el-form-item
          label="手机号码"
          prop="tel">
          <el-input v-model.number="ruleForm2.tel"/>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </fieldset>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var checkTel = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value.toString().length !== 11) {
            callback(new Error('必须输入11位'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
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
        age: '',
        username: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        tel: [
          { validator: checkTel, trigger: 'blur' }
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
          alert('submit!')
          this.$router.push({ path: '/login' })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
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
