<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
// import { mapActions } from 'vuex'
export default {
  name: 'App',
  computed: {
    // ...mapState({
    //   data: state => state.data
    // })
  },
  created() {
    // console.log('created')
    // 在页面加载时读取sessionStorage里的状态信息
    // if (sessionStorage.getItem('vueStoreState')) {
    //   this.$store.replaceState(
    //     Object.assign(
    //       {},
    //       this.$store.state,
    //       JSON.parse(sessionStorage.getItem('vueStoreState'))
    //     )
    //   )
    // }

    // window.addEventListener('beforeunload', () => {
    //   sessionStorage.setItem('vueStoreState', JSON.stringify(this.$store.state))
    // })
  },
  methods: {
    // ...mapActions(['changeData'])
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  min-width: 400px;
}
.el-header {
  background-color: #237995;
}
</style>
