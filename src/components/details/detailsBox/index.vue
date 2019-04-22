<template>
  <div class="problemsDetails">
    <el-tabs type="border-card">
      <el-tab-pane label="问题详情">
        <div class="content">
          <p>
            <a href="#">{{ username }}</a>
            <span>{{ time }}</span>
          </p>
          <p>{{ problem_desc }}</p>
          <div>
            <el-input
              :autosize="{ minRows: 2, maxRows: 4}"
              v-model="comments"
              type="textarea"
              placeholder="有没有想法呢？急需您的回答"
            ></el-input>
          </div>
          <el-button type="primary" @click="submitAnswer">提交答案</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="answerDetails">
      <div
        class="answer"
        v-for="(item,index) in answerList"
        :key="index">
        <p>
          <a href="#">{{ item.username }}</a>
          <span>{{ item.c_time }}</span>
        </p>
        <p>{{ item.comments }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      comments: "",
      answerList: []
    };
  },
  created() {
    this.updateComquestion()
    this.showAnswer()
  },
  computed: {
    ...mapState({
      data: state => state.data,
      u_id: state => state.data.u_id,
      q_id: state => state.data.q_id
    }),
    username(){
      console.log('this.$route',this.$route)
      return this.$route.params.username
    },
    problem_desc() {
      return this.$route.params.problem_desc
    },
    time() {
      return this.$route.params.time
    },
    answer() {
      return this.$route.params.answer // 拿到从问题列表传过来的回答数
    }
  },
  methods: {
    submitAnswer() {
      let {u_id,q_id,comments} = this
      this.$axios
          .post('/api/user/problemDetails',JSON.stringify({u_id,q_id,comments}))
          .then(res => {
            alert('操作成功')
            this.comments = ''
            this.updateComquestion()
            this.showAnswer()
        })
    },
    updateComquestion() {
      this.$axios
          .post('api/user/updateComquestion', JSON.stringify({q_id: this.q_id,answer: this.answer}))
          .then(res => {
            console.log('res:', res)
          })
    },
    showAnswer() {
      this.$axios
          .post('/api/user/showAnswer', JSON.stringify({q_id: this.q_id}))
          .then(res => {
            console.log('res.data:', res.data)
            this.answerList = []
            this.answerList = res.data
            // if(this.answer === 0){
            //   this.answerList = []
            // }
          })
    }
  }
};
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
.content p:nth-child(2) .answer p:nth-child(2) {
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
