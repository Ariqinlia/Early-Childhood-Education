<template>
  <div>
    <div class="crumbs crumbs-register">
      <el-breadcrumb separator="/" class="register-title">
        <el-breadcrumb-item>
          <i class="el-icon-setting"></i><span>注册</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="userContent">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item prop="name" label="用户名称">
          <el-input v-model="form.name" placeholder="请输入用户名称"></el-input>
        </el-form-item>
        <el-form-item prop="pass" label="密码">
          <el-input v-model="form.pass" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass" label="确认密码">
          <el-input v-model="form.checkPass" type="password" placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="邮箱">
          <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="phone" label="手机">
          <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="sex" label="性别">
          <el-select class="select-sex" v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" value="man"></el-option>
            <el-option label="女" value="woman"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('form')">确定</el-button>
          <el-button @click="onCancle()">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Util from "../utils/utils";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.checkPass !== "") {
          this.$refs.form.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.pass) {
        callback(new Error("两次输入的密码不一致"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else if (!Util.emailReg.test(this.form.email)) {
        callback(new Error("请输入正确的邮箱"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else if (!Util.phoneReg.test(this.form.phone)) {
        callback(new Error("请输入正确的手机号"));
      } else {
        callback();
      }
    };
    return {
      form: {
        name: "",
        pass: "",
        checkPass: "",
        email: "",
        phone: "",
        sex: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        email: [{ validator: validateEmail, trigger: "blur" }],
        phone: [{ validator: validatePhone, trigger: "blur" }],
        sex: [{ required: true, message: "请输入性别", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      const self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          self.$axios
            .post("/api/user/addUser", self.form)
            .then(function(response) {
              console.log(response);
              alert("注册成功!");
              self.$router.push("/login");
            })
            .then(function(error) {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    onCancle() {
      this.$router.push("/login");
    }
  }
};
</script>

<style>
.crumbs-register {
  background-color: #237995;
  height: 50px;
  line-height: 50px;
}
.register-title {
  line-height: 50px;
  margin: 0 auto;
  width: 50px;
  font-size: 16px;
}
.register-title i, 
.register-title span {
  color: #ddd;
}
.userContent {
  width: 400px;
  margin: 20px auto;
}
.select-sex {
  width: 320px;
}
</style>