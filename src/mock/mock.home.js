// import {restUrl as from '@/config'
import Mock from 'mockjs'

var Random = Mock.Random
const arrRegionId = ['10320000', '10320100', '10320200', '10320500', '10320600', '10320700', '10320800', '10321000', '10321100', '10321200', '10321300', '10900051']
export default {
  '/drms-project-management/homePage/commuQuestion': {
    successful: true,
    code: '200',
    message: '成功',
    data: {
      'arr|50': [{
        'username': '@name()',
        'time': Random.now(),
        'answer|0-100': 100,
        'dec': '@cparagraph(2)',
        'status|1-2': true
      }
      ]
    }
  },
  '/drms-publicdata/baseData/queryOrgTree': {
    code: '200',
    message: '成功',
    successful: true,
    data: {
      'children|10': [{
        'children|10': [{
          children: [],
          data: {
            'code|1': arrRegionId,
            'id|1': arrRegionId,
            name: '@province',
            'parentId|1': arrRegionId,
            'type|2-4': 4
          }
        }],
        'data': {
          'code|1': arrRegionId,
          'id|1': arrRegionId,
          name: '@province',
          'parentId|1': arrRegionId,
          'type|2-4': 4
        }
      }],
      data: {
        'code|1': arrRegionId,
        'id|1': arrRegionId,
        name: '@province',
        'parentId|1': arrRegionId,
        'type|2-4': 4
      }
    }
  },
  '/drms-project-management/homePage/queryLoad': {
    successful: true,
    code: '200',
    message: '成功',
    data: {
      'currentBaseLine|1000-1500': [{
        key: '@datetime',
        'value|0-10000.0-10': 1
      }],
      'currentLoad|1000-1500': [{
        key: '@datetime',
        'value|0-10000.0-10': 1
      }],
      'yesterdayLoad|1000-1500': [{
        key: '@datetime',
        'value|0-10000.0-10': 1
      }]
    }
  },
  '/drms-project-management/homePage/queryClientOnlineInfo': {
    successful: true,
    code: '200',
    message: '成功',
    'data|5-8': [{
      'clientSum|1-200': 200,
      'offlineSum|1-200': 200,
      'onlineSum|1-200': 200,
      'manufacturer|1-200': 200,
      manufacturerName: '@city',
      'value|0-10000.0-10': 1
    }]
  },
  '/tenant/delete': {
    successful: true
  }
}
