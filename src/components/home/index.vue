<template>
  <el-container>
    <el-header>
      <headerBox
        :a="a"
      />
    </el-header>
    <el-main>
      <bodyBox
        ref="bodyBoxRef"
      />
      <cardBox/>
    </el-main>
    <el-footer>
      <footerBox/>
    </el-footer>
  </el-container>
</template>

<script>
import headerBox from './headerBox'
import bodyBox from './bodyBox'
import cardBox from './cardBox'
import footerBox from './footerBox'
// import { mapState } from 'vuex'
// import { mapActions } from 'vuex'

export default {
  components: {
    headerBox,
    bodyBox,
    cardBox,
    footerBox
  },
  data() {
    return {
      a: null
    }
  },
  computed: {
    // ...mapState({
    // data: state => state.data
    // })
  },
  watch: {
  },
  created() {
    // this.getAjax()
  },
  mounted() {
    const bodyBoxRef = this.$refs['bodyBoxRef']
    console.log('bodyBoxRef', bodyBoxRef)
  },
  destroyed() {
  },
  methods: {
    // ...mapActions(['changeData'])
    getAjax() {
      // console.log('getAjax')
      // const self = this
      // this.$axios.get('http://mockjs.com/api:3000/drms-project-management/homePage/queryPlatInfo')
      //   .then(function(response) {
      //     console.log('response.data', response.data)
      //     self.a = response.data
      //   })
      //   .catch(function(error) {
      //     console.log(error)
      // })
    },
    ajax() {
    }
  }
}
</script>

<style scope>

</style>

