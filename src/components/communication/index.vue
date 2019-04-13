<template>
  <el-container>
    <el-header>
      <headerBox/>
    </el-header>
    <el-main>
      <communicationBox/>
    </el-main>
    <el-footer>
      <footerBox/>
    </el-footer>
  </el-container>
</template>

<script>
import headerBox from '../home/headerBox'
import communicationBox from './communicationBox'
import footerBox from '../home/footerBox'
export default {
  components: {
    headerBox,
    communicationBox,
    footerBox
  }
}
</script>

<style>

</style>
