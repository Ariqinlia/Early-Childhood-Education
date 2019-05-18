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
      cardContent: []
    }
  },
  computed: {
    // ...mapState({
    //   data: state => state.data
    // })
  },
  watch: {
    cardContent(newValue){
      const { cards } = this
      let card
      for (let i = 1; i <= newValue.length; i++) {
        card = require(`../../../assets/product${i}.jpg`)
        cards.push(card)
      }
    }

  },
  created() {
    this.init()
  },
  mounted() {
  },
  methods: {
    init() {
      this.$axios.post('/api/user/product').then( res => {
        res.data.forEach((element,index) => {
          let {pro_dec:content,pro_price:dec} = element
          this.cardContent.push({dec,content})
        });
      })
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
