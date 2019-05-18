<template>
  <div class="problemDec">
    <div class="dec">
      <label for="problem-dec">问题描述</label>
      <textarea
        id="problem-dec"
        cols="130"
        rows="20"
        placeholder="在这里输入您的问题"
        v-model="form.dec"
        style="vertical-align:top"/>
    </div>
    <el-button
      type="primary"
      @click="submit(resName)"
      round>提交问题</el-button>
  </div>
</template>

<script>
export default {
  created() {
  },
  data() {
    return {
      resName: sessionStorage.getItem('ms_username'),
      // dec: '',
      form: {
        // username: sessionStorage.getItem('ms_username'),
        // time: '',
        // answer: 0,
        dec: '',
        // status: 0
      }
    }
  },
  methods: {
    submit(username) {
      if(username === null) {
        console.log('请登录')
        this.$notify({
          type:'warning',
          message:'请登录',
          showClose:false,
          onClick:()=>{
            this.$router.push({name:'login'})
          }
        })

      }else {
        this.$axios
          .post('/api/user/addQuestion',JSON.stringify({username,dec:this.form.dec}))
          .then(res => {
            this.$router.push('/commu')
          // console.log('question res:',res)
        })
      }
      
    }
  },
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
.el-button--primary {
  width: 20%;
  margin: 0 auto;
}
</style>
