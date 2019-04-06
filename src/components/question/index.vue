<template>
  <el-container>
    <el-header>
      <headerBox/>
    </el-header>
    <el-main>
      <questionBox/>
    </el-main>
    <el-footer>
      <footerBox/>
    </el-footer>
  </el-container>
</template>

<script>
import headerBox from '../home/headerBox'
import questionBox from './questionBox'
import footerBox from '../home/footerBox'
export default {
  components: {
    headerBox,
    questionBox,
    footerBox
  }
}
</script>

<style lang="scss">

</style>
