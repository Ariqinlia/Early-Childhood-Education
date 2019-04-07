<template>
  <div class="com">
    <div class="search">
      <el-input
        v-model="input1"
        placeholder="搜问题找答案"
        clearable/>
      <el-button
        type="primary"
        icon="el-icon-search"
        @click="search">搜索</el-button>
      <router-link to="/question">
        <el-button type="success">我要提问</el-button>
      </router-link>
    </div>
    <div class="search-content">
      <el-tabs
        v-loading.fullscreen="loading"
        :tab-position="tabPosition"
        @tab-click="tabClick">
        <el-tab-pane label="已解决">
          <div
            v-for="(item,index) in solves"
            :key="index">
            <div class="problem">
              <p>
                <router-link to="/details">{{ item.dec }}</router-link>
                <span>{{ item.answer }}个回答</span>
              </p>
              <p>
                <a href="#">{{ item.username }}</a>
                <span>{{ item.time }}</span>
              </p>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="未解决">
          <div
            v-for="(item,index) in unsolves"
            :key="index">
            <div class="problem">
              <p>
                <a href="#">{{ item.dec }}</a>
                <span>{{ item.answer }}个回答</span>
              </p>
              <p>
                <a href="#">{{ item.username }}</a>
                <span>{{ item.time }}</span>
              </p>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
      <el-pagination
        :total="number"
        background
        layout="prev, pager, next"
        @current-change="currentChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      input1: '',
      tabPosition: 'top',
      res: [],
      unproblems: [], // 50
      problems: [], // 50
      unsolves: [],
      solves: [],
      status: true,
      loading: false,
      totalProblems: []
    }
  },
  created() {
    this.loading = true
    this.$axios
      .get(
        'http://mockjs.com/api:3000/drms-project-management/homePage/commuQuestion'
      )
      .then(res => {
        this.loading = false
        const arr = res.data.data.arr
        this.totalProblems = arr
        this.qvfenarr()
        this.tabClick({ index: '0' })
        // this.unproblems = res.data.data.arr
        // this.res = res.data.data
      })
      .catch(error => {
        this.loading = false
        console('error', error)
      })
  },
  methods: {
    // 区分已解决和未解决的数组
    qvfenarr() {
      const { totalProblems: arr } = this
      console.log('arr:', arr)
      this.unproblems.length = 0
      this.problems.length = 0
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].status === false) {
          arr[i].answer = 0
          this.unproblems.push(arr[i])
        } else {
          this.problems.push(arr[i])
        }
      }
      this.renderData()
    },
    // 渲染列表
    renderData() {
      this.solves = this.problems.slice(0, 10)
      this.unsolves = this.unproblems.slice(0, 10)
      // if (this.status) {
      //   this.tabClick({ index: '0' })
      // } else {
      //   this.tabClick({ index: '1' })
      // }
    },
    search() {
      // not search
      if (this.input1 === '') {
        this.qvfenarr()
      } else {
        // search
        this.problems = []
        this.unproblems = []
        this.solves = []
        this.unsolves = []
        for (let i = 0; i < this.totalProblems.length; i++) {
          if (this.totalProblems[i].dec.includes(this.input1)) {
            const item = this.totalProblems[i]
            if (this.totalProblems[i].status === true) { this.problems.push(item) } else {
              this.unproblems.push(item)
            }
          }
        }
        this.renderData()
      }

      // 判断 已解决 未解决
      if (this.status) {
        this.tabClick({ index: '0' })
      } else {
        this.tabClick({ index: '1' })
      }
    },
    tabClick(e) {
      const { index } = e
      // yi jie jue
      if (index === '0') {
        this.number = this.problems.length
        this.status = true
      }
      // wei jie jue
      if (index === '1') {
        this.number = this.unproblems.length
        this.status = false
      }
    },
    currentChange(currentPage) {
      // console.log('currentPage', currentPage)
      // this.qvfenarr()
      // const { problems } = this
      // const { unproblems } = this
      let total
      // 10  - 19  1x
      // this.solves = problems.slice(start, end) // 36
      // console.log(start, end, total)
      if (this.status === false) {
        total = this.unproblems.length
        console.log('unproblems total:', total)
        const start = (currentPage - 1) * 10
        const flag = Math.floor(total / 10) > Math.floor((start / 10))
        const end = flag ? start + 10 : total % 10 + start
        this.unsolves = this.unproblems.slice(start, end)
      } else {
        total = this.problems.length
        console.log('problems total:', total)
        const start = (currentPage - 1) * 10
        const flag = Math.floor(total / 10) > Math.floor((start / 10))
        const end = flag ? start + 10 : total % 10 + start
        this.solves = this.problems.slice(start, end)
        // console.log(start, end, total, Math.floor(total / 10), Math.floor((start / 10)))
      }
    }
  }
}
</script>

<style lang="scss">
.com {
  display: flex;
  padding: 20px 0;
  justify-content: center;
  flex-flow: row wrap;
}
.search {
  display: flex;
  width: 80%;
}
.el-input {
  flex: 5;
}
.search .el-button:nth-child(2) {
  flex: 1;
}
.search-content {
  display: flex;
  width: 78%;
  margin-top: 20px;
  padding: 0 1% 10px;
  border: 1px solid #ccc;
  flex-wrap: wrap;
  justify-content: center;
}
.el-tabs {
  width: 100%;
}
.el-tab-pane {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.el-tab-pane > div {
  width: 100%;
}
.el-tabs__header {
  margin: 0;
}
.problem {
  width: 100%;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-flow: wrap;
}
.problem > p {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.el-pagination {
  margin-top: 10px;
}
</style>
