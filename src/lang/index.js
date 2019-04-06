import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en'
import eleEn from 'element-ui/lib/locale/lang/en'
import zh from './zh'
import eleZh from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  // this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    en: {
      ...en, // 英文语言包
      ...eleEn // 英文语言包
    },
    zh: {
      ...zh, // 中文语言包
      ...eleZh // 中文语言包
    }
  }
})
export default i18n
