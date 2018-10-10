const express = require('express');
const db = require('./db');

// 添加路由选择
// 定义状态码 这个随意定义
const apiRouter = express.Router();

// 获取news数据
apiRouter.get('/api/news', (req, res) => {
  res.json({
    code: 0,
    data: db.news,
  });
});
// 我的页面
apiRouter.get('/api/selfInfo', (req, res) => {
  res.json({
    code: 0,
    data: db.selfInfo,
  });
});

// 获取已经绑定的店铺数据
apiRouter.get('/api/salesman/shops', (req, res) => {
  res.json({
    code: 0,
    data: db.bindedshops,
  });
});
// 获取未绑定的店铺数据
apiRouter.get('/api/unbindedshops', (req, res) => {
  res.json({
    code: 0,
    data: db.unbindedshops,
  });
});
// 店铺驳回
apiRouter.get('/api/rebut', (req, res) => {
  res.json({
    code: 0,
    data: db.rebut,
  });
});
// 关于销售数据页面的相关逻辑
apiRouter.get('/api/shop/sales', (req, res) => {
  res.json({
    code: 0,
    data: db.saleList,
  });
});
// 获取销售页面数据
apiRouter.get('/api/shop/sales-detail', (req, res) => {
  // console.log(req);
  console.log(req.query);
  console.log(req.params);

  if (req.query.tabIndex === 'first') {
    res.json({
      code: 0,
      data: db.saleListDetail,
    });
  }

  if (req.query.tabIndex === 'second') {
    res.json({
      code: 0,
      data: db.saleListDetailSecond,
    });
  }
});

apiRouter.post('/api/saleCondition', (req, res) => {
  res.json({
    code: 0,
    data: db.saleList,
  });
});

// 店铺申请活动列表
apiRouter.get('/api/activity/shops', (req, res) => {
  res.json({
    code: 0,
    data: db.activityList,
  });
});
// 店铺申请活动，详情
apiRouter.get('/api/activity/detail', (req, res) => {
  res.json({
    code: 0,
    data: db.activitydetail,
  });
});
// 店铺申请活动，编辑页面
apiRouter.post('/api/activity/apply', (req, res) => {
  res.json({
    code: 0,
    data: db.activityApply,
  });
});

/**
 * faq相关接口定义
 */
// tab栏目
apiRouter.get('/api/faq/tab', (req, res) => {
  res.json({
    code: 0,
    data: [{
      tabName: '掌柜宝',
      id: 101,
    }, {
      tabName: '行者任务',
      id: 111,
    }, {
      tabName: '新手任务群',
      id: 112,
    }, {
      tabName: '慧眼',
      id: 121,
    }, {
      tabName: '地勤',
      id: 222,
    }, {
      tabName: '亰牛',
      id: 333,
    }],
  });
})
// 列表
apiRouter.get('/api/tip/list', (req, res) => {
  res.json({
    code: 0,
    data: db.faqList,
  });
})
// 详情
apiRouter.get('/api/tip/detail', (req, res) => {
  res.json({
    code: 0,
    data: {
      title: '新手任务编辑足足',
      editor: '路飞',
      content: '<h2>大航海时代<small>One Piece</small></h2><p>路飞，需要树立真正的威望，即使为此凿沉一条船</p><img src="//img30.360buyimg.com/mobilecms/jfs/t7456/278/3117158829/193596/b83e8de4/5a309dfeNc73f05c2.jpg" alt=""><p>路飞，是一个有着远大抱负的战略家，也是一个猜忌多疑的阴谋家。这才是他的真实形象路飞，是一个有着远大抱负的战略家，也是一个猜忌多疑的阴谋家。这才是他的真实形象路飞，是一个有着远大抱负的战略家，也是一个猜忌多疑的阴谋家。这才是他的真实形象路飞，是一个有着远大抱负的战略家，也是一个猜忌多疑的阴谋家。这才是他的真实形象路飞，是一个有着远大抱负的战略家，也是一个猜忌多疑的阴谋家。这才是他的真实形象路飞，是一个有着远大抱负的战略家，也是一个猜忌多疑的阴谋家。这才是他的真实形象路飞，是一个有着远大抱负的战略家，也是一个猜忌多疑的阴谋家。这才是他的真实形象路飞，是一个有着远大抱负的战略家，也是一个猜忌多疑的阴谋家。这才是他的真实形象</p>'
    },
  });
})

// 推荐商品清单
apiRouter.post('/api/shoprecommend/qryRecommendList', (req, res) => {
  res.json({
    "code": "0",
    "success": true,
    "longTime": 1519472182069,
    "data": [{
      "id": 1,
      "listName": "测试清单",
      "listDesc": "推荐商品1月",
      "goods": [{
        "goodsName": "Huggies好奇超厚倍柔婴儿湿巾（增厚型）80抽补充装",
        "picUrl": "//img11.360buyimg.com/n7/jfs/t3835/273/362528027/116235/3a7ee966/580de280N479a1bfe.jpg!q70.webp",
        "price": 0.0,
        "scale": "1*18",
        "salecount": 0
      }, {
        "goodsName": "HERMES 爱马仕 多彩丝巾 主色蓝 by女款",
        "picUrl": "//img11.360buyimg.com/n7/jfs/t3835/273/362528027/116235/3a7ee966/580de280N479a1bfe.jpg!q70.webp",
        "price": 0.0,
        "scale": "1*1",
        "salecount": 0
      }],
      "goodsCount": 2
    },{
      "id": 2,
      "listName": "测试清单2222",
      "listDesc": "推荐商品222月",
      "goods": [{
        "goodsName": "Huggies好奇超厚倍柔婴儿湿巾（增厚型）80抽补充装",
        "picUrl": "//img11.360buyimg.com/n7/jfs/t3835/273/362528027/116235/3a7ee966/580de280N479a1bfe.jpg!q70.webp",
        "price": 0.0,
        "scale": "1*18",
        "salecount": 0
      }, {
        "goodsName": "HERMES 爱马仕 多彩丝巾 主色蓝 by女款",
        "picUrl": "//img11.360buyimg.com/n7/jfs/t3835/273/362528027/116235/3a7ee966/580de280N479a1bfe.jpg!q70.webp",
        "price": 0.0,
        "scale": "1*1",
        "salecount": 0
      }],
      "goodsCount": 2
    }]
  })
})
// 查询清单商品
apiRouter.post('/api/shoprecommend/qryRecommendGoodsList', (req, res) => {
  res.json({
      "code": "0",
      "success": true,
      "longTime": 1519472182069,
      "data": {
        "id": 1,
        "listName": "测试清单",
        "listDesc": "推荐商品1月",
        "goods": db.qryRecommendList.goods,
        "goodsCount": 2,
        "page": 1
      }
    }
  );
});
//  查询推荐商品
// 输入参数：
// shopType:店铺类型
// goodsType:一级品类
// sku：商品sku
// sort：(salecount[销量]、salemoney[销售额])统一按照销量排序
// page：页码
// pagesize：每页条数
apiRouter.post('/api/shoprecommend/qry/recommendGoods', (req, res) => {
    res.json({
      "code": "0",
      "success": true,
      "longTime": 1519472182069,
      "data": {
        "goods": db.qryRecommendList.goods,
        "goodsCount": 2,
        "page":1
      }
    })
});
// 保存清单
apiRouter.post('/api/shoprecommend/save/saveList', (req, res) => {
  res.json({
    "code": "0",
    "success": true,
    "longTime": 1519472182069,
    "data": {
      "id": 18881222
    },
    "message": "操作成功"
  });
});
// 删除清单
apiRouter.post('/api/shoprecommend/oper/del/delist', (req, res) => {
  res.json({
    "code": "0",
    "success": true,
    "longTime": 1519472182069,
    "data": {},
    "message": "操作成功"
  });
});
// 编辑清单
apiRouter.post('/api/shoprecommend/save/updateList', (req, res) => {
  res.json({
    "code": "0",
    "success": true,
    "longTime": 1519472182069,
    "data": {},
    "message": "操作成功"
  });
});

// 保存清单商品
apiRouter.post('/api/shoprecommend/save/listGoods', (req, res) => {
  res.json({
    "code": "0",
    "success": true,
    "longTime": 1519472182069,
    "data": {
      "id": 12121212
    },
    "message": "操作成功"
  });
});

// 店铺查询
apiRouter.post('/api/shoprecommend/qry/shop', (req, res) => {
  res.json({
    "code": "0",
    "success": true,
    "longTime": 1519472182069,
    "data": {
      "page": 1,
      "totalrows": 20,
      "shops": db.qryRecommendList.shops
    },
    "message": "操作成功"
  });
});

// 清单分享
apiRouter.post('/api/shoprecommend/oper/sendMsg', (req, res) => {
  res.json({
    "code": "0",
    "success": true,
    "longTime": 1519472182069,
    "data": {
      "id": 12121212
    },
    "message": "操作成功"
  });
});

// 删除清单
apiRouter.post('/api/shoprecommend/del/listgoods', (req, res) => {
  res.json({
    "code": "0",
    "success": true,
    "longTime": 1519472182069,
    "data": {
      "id": 12121212
    },

    "message": "操作成功"
  });
});

// 查询店铺类型、一级品类
// 编辑清单
apiRouter.post('/api/shoprecommend/qry/dim', (req, res) => {
  res.json({
    "code": "0",
    "success": true,
    "longTime": 1519472182069,
    "data": {
      "shopType":[{"shopTypeId":1111,"shopTypeName":"便利店"}],
      "goodsType":[{"categoryFirstId":1111,"categoryFirstName":"烟酒"}],
      "orderFields":[{"fieldid":"salecount","fieldname":"销量"},{"fieldid":"saleamt","fieldname":"销售额"}]
    },
    "message": "操作成功"
  });
});

module.exports = apiRouter;
