<template>
  <div>
    <el-row>
      <h3>让孩子尽情探索</h3>
      <el-col
        v-for="(card, index) in cards"
        :span="6"
        :key="card">
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="hover">
          <img
            :src="card"
            class="img">
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <p>{{ cardContent[index].dec }}</p>
              <p class="content">{{ cardContent[index].content }}</p>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import dateFunc from '@/tools/dateFunc.js'
// import { mapState } from 'vuex'
// import { mapActions } from 'vuex'
export default {
  filters: {
  },
  props: {
  },
  data() {
    return {
      cards: [],
      cardContent: [
        {
          dec: '¥115.00',
          content: '幼儿早教积木米奇妙神奇水果益智拼搭积木车水果积木车3C认证产品'
        },
        {
          dec: '¥638.40',
          content: 'haba幼教配对益智幼教玩具幼儿园早教产品对对乐'
        },
        {
          dec: '¥38.00',
          content: '蒙氏木制投币盒圆球抽屉儿童早教益智学习玩具幼儿1-3岁练习礼物'
        },
        {
          dec: '¥45.00',
          content: '幼儿亲子互动中心 家庭互动阶段早教产品分月龄视频 7-48个月'
        },
        {
          dec: '¥11.02',
          content: '1-100宝宝圆点数学习卡片幼儿童数字认字防水溅早教产品教具'
        },
        {
          dec: '¥15.00',
          content: '幼儿园儿童学前教育早教产品益智类玩具颜色的认识与搭配开发智力'
        }
      ]
    }
  },
  computed: {
    // ...mapState({
    //   data: state => state.data
    // })
  },
  watch: {
  },
  created() {
    this.init()
  },
  mounted() {
  },
  methods: {
    init() {
      const { cards } = this
      let card
      for (let i = 1; i <= this.cardContent.length; i++) {
        card = require(`../../../assets/product${i}.jpg`)
        cards.push(card)
      }
    }
    // ...mapActions(['changeData'])
  }
}
</script>

<style>
  .el-main {
    padding: 0;
  }

  .el-row {
    padding: 20px 80px;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .img {
    width: 100%;
    height: 230px;
    display: block;
  }

  .img:hover {
    transform: scale(1.2);
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  p.content {
    line-height: 20px;
  }

  .el-card {
    height: 433px;
    margin: 20px;
  }
</style>
