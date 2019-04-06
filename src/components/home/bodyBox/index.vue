<template>
  <el-carousel
    height="450px"
    indicator-position="none">
    <el-carousel-item
      v-for="(img,index) in imgs"
      :key="index" >
      <img
        :src="img"
        height="450px">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
// import dateFunc from '@/tools/dateFunc.js'
// import { mapState } from 'vuex'
// import { mapActions } from 'vuex'
export default {
  filters: {
  },
  props: {
  },
  data() {
    return {
      imgs: []
    }
  },
  computed: {
    // ...mapState({
    //   data: state => state.data
    // })
  },
  watch: {
  },
  created() {
    this.init()
  },
  mounted() {
  },
  methods: {
    init() {
      const { imgs } = this
      let img
      for (let i = 1; i <= 4; i++) {
        img = require(`../../../assets/ban${i}.jpg`)
        imgs.push(img)
      }
    }
    // ...mapActions(['changeData'])
  }
}
</script>

<style lang='scss'>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
</style>
