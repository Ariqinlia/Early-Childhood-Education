import Mock from 'mockjs'
import all from './mock.all'
import { mockDomain } from '@/config'

Mock.setup({
  timeout: '500-2000'
})

// var Random = Mock.Random
Object.keys(all).map(url => {
  Mock.mock(`${mockDomain}${url}`, all[url])
  // all是一个数组,url是配置的接口,all[url]指的是这个url接口下配置的value
  console.log(all)
  console.log('url:', url)
  console.log('all[url]:', all[url])
  // console.log('random:', Random.name())
})
