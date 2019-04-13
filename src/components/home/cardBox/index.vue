<template>
  <div>
    <el-row>
      <h3>让孩子尽情探索</h3>
      <el-col
        v-for="(card, index) in cards"
        :span="6"
        :key="card"
        :offset="index > 0 ? cards.length : 0">
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="hover">
          <img
            :src="card"
            class="image">
          <div style="padding: 14px;">
            <span>{{ cardContent[index].title }}</span>
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
          title: '育乐',
          dec: '从0岁到3岁',
          content: '根据宝宝的月龄特点分为六个阶段。课程提供适龄有趣的游戏，帮助家长发现孩子的兴趣，让宝宝在过程中不断探索自己的能力，如空间感、对自己身体的控制等，从中体验到尝试、失败、成功的快乐。'
        },
        {
          title: '音乐',
          dec: '从6个月到5岁',
          content: '不同音乐风格、乐器的使用，结合听、唱、舞蹈动作和即兴表演，鼓励并激发孩子与生俱来的音乐潜能，让家长掌握与孩子共同探索音乐的方式，见证孩子从吸收到表达的音乐之路。'
        },
        {
          title: '艺术',
          dec: '从18个月到5岁',
          content: '别出心裁的艺术工具、意想不到的艺术材料和妙趣横生创作过程丰富孩子对自我和环境的表达和探索，进而提高孩子的表达力、专注力、动手及审美能力，打破家长对传统艺术的理解。'
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
      for (let i = 1; i <= 3; i++) {
        card = require(`../../../assets/card${i}.png`)
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

  .image {
    width: 100%;
    display: block;
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
</style>
