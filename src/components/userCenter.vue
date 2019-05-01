<template>
  <div class="userinfo">
    <div class="top">
      <a href="#/">返回首页</a> >
      <span>个人中心</span>
    </div>
    <div class="userContent">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>
            <h3>个人中心</h3>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-form label-width="80px">
        <el-form-item label="用户名称">
          <el-input v-model="res.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="账号名称">
          <el-input v-model="res.account" :disabled=isdisabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="res.email" :disabled=isdisabled placeholder='eg:194ha@126.com'></el-input>
        </el-form-item>
        <el-form-item label="手机">
          <el-input v-model="res.phone" :disabled=isdisabled></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="res.sex" disabled></el-input>
        </el-form-item>
      </el-form>
    </div>
		<button @click="isdisabled = false">编辑</button>
		<button @click="updateUserinfo()">确认修改</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
			res: {},
			isdisabled: true,
			// currentId: null
    };
  },
  created() {
    this.getUserData();
  },
  computed: {
    username() {
      return this.$route.params.resName;
    }
  },
  methods: {
    getUserData() {
      this.$axios
        .post("/api/user/getUser", JSON.stringify(this.username))
        .then(res => {
					this.res = res.data[0]
					// this.currentId = res.u_id
        })
        .then(function(error) {
          console.log(error);
        });
		},
		updateUserinfo() {
			// this.isdisabled = false
			this.$axios
					.post('/api/user/updateUser', JSON.stringify(this.res))
					.then( res => {
						alert('修改成功!')
					})
		}
  },
  mounted() {
    // this.getUserData();
  }
};
</script>

<style>
.userinfo {
  position: relative;
  width: 100%;
}
.top {
  position: absolute;
  left: 50px;
  top: 0;
}
.crumbs {
  width: 80%;
  margin: 20px auto;
}
.userContent {
  width: 400px;
  margin: 50px auto 0;
}
.select-sex {
  width: 320px;
}
</style>