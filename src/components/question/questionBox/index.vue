<template>
  <div class="problemDec">
    <div class="dec">
      <label for="problem-dec">问题描述</label>
      <!-- <el-textarea
        id="problem-dec"
        colps="130"
        rows="20"
        placeholder="在这里输入您的问题"
      style="vertical-align:top"></el-textarea>-->
      <!-- <el-input
        :autosize="{minRows:2,maxRows:4}"
        v-model="textarea3"
        type="textarea"
        placeholder="有没有想法呢？急需您的回答"
      ></el-input>-->
      <!-- <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input> -->
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
