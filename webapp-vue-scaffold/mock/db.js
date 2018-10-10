/**
 * mock数据库
 */
const Mock = require('mockjs');

const mockDate = {
  // 测试数据hello
  news: Mock.mock({
    'data|3': [{
      'id|+1': 1,
      url: '@url',
      domain: '@domain',
      email: '@email',
      paragraph: '@paragraph',
      sentence: '@sentence',
    }],
  }),
  // 我的页面
  selfInfo: Mock.mock({
    data: [{
      id: 1,
      name: 'QWer',
      erp: 'zttttt@jd.com',
      avatar: '',
      dept: 'ddd',
      qrCode: 'jd',
      mobile: '13678789876',
      email: 'qwer@jd.com',
    }],
  }),
  // 绑定
  bindedshops: Mock.mock({
    'data|10': [{
      'id|+1': 1,
      shoperName: '@cname',
      shopName: '@csentence(3, 5)',
      shopNum: '@zip',
      shopAdd: '@county(true)',
      shopTel: '199199199199',
    }],
  }),
  // 等待绑定
  unbindedshops: Mock.mock({
    shops:
      [{
        shopId: 1,
        bossName: '@cname',
        address: '@county(true)',
        shopTel: '199199199199',
      },
    {
        shopId: 122,
        bossName: '@cname',
        address: '@county(true)',
        shopTel: '199199199199',
      },
    {
        shopId: 133,
        bossName: '@cname',
        address: '@county(true)',
        shopTel: '199199199199',
      },
    {
        shopId: 133,
        bossName: '@cname',
        address: '@county(true)',
        shopTel: '199199199199',
      }],
    page:1,
    totalPage:10,
    rows:10,
  }),
   // 店铺驳回
  rebut: Mock.mock({
    data: {
    rejectOptions: [
      {
        "code": -1,
        "title": "个人注册",
        "desc": "个人注册"
      },
      {
        "code": -2,
        "title": "店铺认证信息填写错误",
        "desc": "店铺认证信息填写错误"
      },
      {
        "code": -3,
        "title": "批发非零售终端",
        "desc": "批发非零售终端"
      },
      {
        "code": -4,
        "title": "其他"
      }
    ],
    rejectPrompting: "您是否确认此店铺不符合掌柜宝规定，并进行驳回处理?"
  }
}),
  // 销售数据
  saleList: Mock.mock({
    'data|20': [{
      'id|+1': 1,
      name: '@csentence(4, 10)',
      'saleNum|100-10000': 200,
      'orderNum|100-10000': 100,
    }],
  }),
  // 单个数据id查询,销售数据详情
  saleListDetail: Mock.mock({
    'data|20': [{
      'id|+1': 1,
      img: '//img12.360buyimg.com/n7/jfs/t6040/274/6185651744/120003/c3d4f729/59717a72Nf4b0c520.jpg!q80.webp',
      name: '@csentence(4, 10)',
      code: '@zip',
      'saleNum|100-10000': 200,
      'orderNum|100-10000': 100,
    }],
  }),
  saleListDetailSecond: Mock.mock({
    'data|20': [{
      'id|+1': 100,
      img: '//img30.360buyimg.com/mobilecms/jfs/t5692/265/5328840828/99118/1fb83e35/595f32edN98971192.jpg!q80.webp',
      name: '@csentence(4, 10)',
      code: '@zip',
      'saleNum|100-10000': 200,
      'orderNum|100-10000': 100,
    }],
  }),
//  店铺申请
  activityList: Mock.mock({
    'activityShops|10': [{
      "shopId|+10": 10,
      "activityNumber": 2009,
      "bossName": "@cname",
      "address": "@county(true)",
      "mobile": "@zip()",
      "shopName": "@ctitle(3, 7)",
      "shopType": "@pick([0, 1, 2])",
      "shopTypeName": '@pick(["创业店", "形象店", "合作"])',
      "shopArea": "-4",
      "gmv": 12,
      "applyTime": "17-10-12 03:02",
      "auditTime": "17-10-12 03:02"
    }],
    "totalPage": 3,
    "page": 1,
    "totalRows": 30,
    "rows": 10,
  }),
  //  店铺申请
  activitydetail: Mock.mock({
      "shopId": 9002,
      "activityNumber": 2009,
      "bossName": "@cname",
      "address": "@county(true)",
      "mobile": "@zip()",
      "shopName": "@ctitle(3, 7)",
      "shopType": "@pick([0, 1, 2])",
      "shopTypeName": "@pick(['创业店', '形象店', '合作'])",
      "shopArea": "-4",
      "state": "@pick([2, 3, 4])",
      "gmv": 12,
      "applyTime": "17-08-12 03:02",
      "auditTime": "17-09-12 03:02",
      "passTime": "17-10-12 03:02",
      "images": {
        "1": "//img30.360buyimg.com/mobilecms/jfs/t9352/220/2342204999/64819/8f245c32/59cb6b5bNde637398.jpg!q70.webp",
        "2":"//img30.360buyimg.com/mobilecms/jfs/t9352/220/2342204999/64819/8f245c32/59cb6b5bNde637398.jpg!q70.webp",
        "3": "//img30.360buyimg.com/mobilecms/jfs/t9352/220/2342204999/64819/8f245c32/59cb6b5bNde637398.jpg!q70.webp",
      }
  }),
  //  店铺申请post
  activityApply: Mock.mock({
    'data': {
      'state': 'ok'
    },
  }),

  // fqs列表
  faqList: Mock.mock({
    'activityShops|20': [{
      "id|+1": 1,
      "title": "@ctitle(10, 30)",
      "activityNumber": 2009,
      "bossName": "@cname",
      "address": "@county(true)",
      "mobile": "@zip()",
      "shopName": "@ctitle(3, 7)",
      "shopType": "@pick([0, 1, 2])",
      "shopTypeName": '@pick(["创业店", "形象店", "合作"])',
      "shopArea": "-4",
      "gmv": 12,
      "applyTime": "17-10-12 03:02",
      "auditTime": "17-10-12 03:02"
    }],
    "totalPage": 3,
    "page": 1,
    "totalRows": 30,
    "rows": 10,
  }),


  // 商品列表
  qryRecommendList: Mock.mock({
    'goods|20': [{
      "id|+1": 1,
      "goodsName": "Huggies好奇超厚倍柔婴儿湿巾（增厚型）80抽补充装",
      "picUrl": "//img11.360buyimg.com/n7/jfs/t3835/273/362528027/116235/3a7ee966/580de280N479a1bfe.jpg!q70.webp",
      "price": 0.0,
      "scale": "1*18",
      "salecount": 0
    }],
    'shops|20': [{
      "id|+1": 1,
      "shopName": "@cname",
      "name": "李三",
      "phone": "@zip()",
      "address": "@county(true)"
    }]
  })
};

// export default mockDate;

module.exports = mockDate;
