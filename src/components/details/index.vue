<template>
  <el-container>
    <el-header>
      <headerBox/>
    </el-header>
    <el-main>
      <detailsBox/>
    </el-main>
    <el-footer>
      <footerBox/>
    </el-footer>
  </el-container>
</template>

<script>
import headerBox from '../home/headerBox'
import detailsBox from './detailsBox'
import footerBox from '../home/footerBox'
export default {
  components: {
    headerBox,
    detailsBox,
    footerBox
  }
}
</script>

<style lang="scss">

</style>
