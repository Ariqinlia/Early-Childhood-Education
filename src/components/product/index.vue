<template>
  <el-container>
    <el-header>
      <headerBox
      />
    </el-header>
    <el-main>
      <proCardBox/>
      <productBox/>
    </el-main>
    <el-footer>
      <footerBox/>
    </el-footer>
  </el-container>
</template>

<script>
import headerBox from '../home/headerBox'
import proCardBox from './proCardBox'
import productBox from './productBox'
import footerBox from '../home/footerBox'
export default {
  components: {
    headerBox,
    proCardBox,
    productBox,
    footerBox
  }
}
</script>

<style lang="scss">

</style>
