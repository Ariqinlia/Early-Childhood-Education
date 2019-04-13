<template>
  <el-container>
    <el-header>
      <headerBox/>
    </el-header>
    <el-main>
      <informationBox/>
    </el-main>
    <el-footer>
      <footerBox/>
    </el-footer>
  </el-container>
</template>

<script>
import headerBox from '../home/headerBox'
import informationBox from './informationBox'
import footerBox from '../home/footerBox'
export default {
  components: {
    headerBox,
    informationBox,
    footerBox
  }
}
</script>

<style>

</style>
