<template>
  <div>
    <ul>
      <li>
        <a href="#/">首页</a>
      </li>
      <li>
        <a href="#/info">幼儿早教</a>
      </li>
      <li>
        <a href="#/commu">交流圈</a>
      </li>
      <li>
        <a href="#/product">商品推荐</a>
      </li>
    </ul>
    <ul class="login" v-if="isLogin">
      <li>
        <a href="#/login">登录</a>
      </li>
      <li>
        <a href="#/register">注册</a>
      </li>
    </ul>
    <ul class="login" v-if="!isLogin">
      <li>
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <!-- <img class="user-logo" src="../../../static/img/img.jpg"> -->
            头像
            {{resName}}
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="userCenter">个人中心</el-dropdown-item>
            <el-dropdown-item command="loginout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
// import { mapActions } from 'vuex'
export default {
  filters: {
    headerFilter(value) {}
  },
  props: {
    a: {
      type: Object,
      default: null
    }
  },
  computed: {
    isLogin() {
      console.log("resName:", this.resName);
      if (this.resName === null) {
        // 数据库中没有则显示注册登录
        return true;
      }
      // 有则隐藏
      return false;
    }
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      resName: sessionStorage.getItem("ms_username")
    };
  },
  watch: {},
  created() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleCommand(command) {
      if (command == "loginout") {
        sessionStorage.removeItem("ms_username");
        sessionStorage.removeItem("ms_userId");
        this.$router.push("/login");
      } else if (command == "userCenter") {
        this.$router.push({name: 'userCenter', params: {
          resName: this.resName
        }});
      }
    }
    // ...mapActions(['changeData'])
  }
};
</script>

<style>
@media screen and (max-width: 768px) {
}
ul {
  list-style: none;
  height: 100%;
  margin: 0;
}
a {
  text-decoration: none;
  color: #000;
}
ul > li > a {
  padding: 0 20px;
  color: #eee;
}
a:hover {
  color: #81c120;
}
ul li {
  float: left;
  height: 100%;
  line-height: 60px;
}
ul.login {
  float: right;
}
.el-dropdown-link {
  position: relative;
  color: #fff;
  cursor: pointer;
  vertical-align: middle;
}
.el-dropdown-menu {
  top: 55px !important;
  height: 40px;
  line-height: 40px;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>

