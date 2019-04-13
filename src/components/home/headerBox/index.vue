<template>
  <div>
    <ul>
      <li><a href="#/">首页</a></li>
      <li><a href="#/info">幼儿早教</a></li>
      <li><a href="#/commu">交流圈</a></li>
      <li><a href="#/product">商品推荐</a></li>
    </ul>
    <ul class="login">
      <li><a href="#/login">登录</a></li>
      <li><a href="#/register">注册</a></li>
    </ul>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
// import { mapActions } from 'vuex'
export default {
  filters: {
    headerFilter(value) {
    }
  },
  props: {
    a: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  computed: {
    cloneA() {
      return this.a + 1
    }
    // ...mapState({
    //   data: state => state.data
    // })
  },
  watch: {
    a(newValue, oldValue) {
      console.log('watch newValue', newValue)
      console.log('watch oldValue', oldValue)
    }
  },
  created() {

  },
  mounted() {
    console.log('headerBox a', this.cloneA)
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    // ...mapActions(['changeData'])
    as() {
    }
  }
}
</script>

<style>

@media screen and (max-width: 768px) {
}
ul {
  list-style: none;
  height: 100%;
  margin: 0;
}
a{
  text-decoration: none;
  color: #000;
}
ul>li>a {
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
</style>

