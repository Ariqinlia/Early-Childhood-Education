<template>
  <div class="problemDec">
    <div class="dec">
      <label for="problem-dec">问题描述</label>
      <textarea
        id="problem-dec"
        cols="130"
        rows="20"
        placeholder="在这里输入您的问题"
      style="vertical-align:top"/>
    </div>
    <router-link to="/commu">
      <el-button
        type="primary"
        round>提交问题</el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style>
.problemDec {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 80%;
  height: 600px;
  background-color: #ccc;
  margin: 20px auto;
  border: 1px solid #000;
}
</style>
