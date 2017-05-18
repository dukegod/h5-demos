//模拟接口1
Mock.mock('page', {
    'name': '@name()',
    'age|1-100': 100,
    'color': '@color'
});

//模拟接口2
Mock.mock('/Apage', {
    'username':'li jie',
    'datetime':'2016-09-12',
    'tooken'  : '123456789000zmx'
});


//模拟接口3
Mock.mock('/Bpage', {
    'id': 'zx001',
    'title':'中关村软件园',
    'address': '北京市海淀区'
});
