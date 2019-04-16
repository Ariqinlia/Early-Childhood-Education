<template>
  <div class="problemsDetails">
    <el-tabs type="border-card">
      <el-tab-pane label="问题详情">
        <div class="content">
          <p>
            <a href="#">username</a>
            <span>time</span>
          </p>
          <p>problem details</p>
          <div>
            <el-input
              :autosize="{ minRows: 2, maxRows: 4}"
              v-model="textarea3"
              type="textarea"
              placeholder="有没有想法呢？急需您的回答">
            </el-input>
          </div>
          <el-button type="primary">提交答案</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="answerDetails">
      <div class="answer">
        <p>
          <a href="#">username</a>
          <span>time</span>
        </p>
        <p>answer</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea3: ''
    }
  }
}
</script>

<style scope>
.problemsDetails {
  width: 80%;
  margin: 0 auto;
}
  .content {
    width: 80%;
    margin: 0 auto;
  }
  .content p:first-child,
  .answer p:first-child {
    display: flex;
    justify-content: space-between;
  }
  .content p:nth-child(2)
  .answer p:nth-child(2) {
    display: flex;
    align-self: flex-start;
  }
  .content .el-textarea__inner {
    width: 90%;
    margin: 20px auto;
  }
  .answerDetails {
    width: 100%;
    border: 1px solid #ccc;
    margin: 20px auto 0;
  }
  .answer {
    width: 80%;
    padding: 10px;
    margin: auto;
    border-bottom: 1px solid #ccc;
  }
</style>
