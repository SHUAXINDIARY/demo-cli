// 指定路径 这里指定后，后面所有模块加载模块都不需要再一次指定路径
require.config({
    // 定义模块路径
    baseUrl: 'js',
    paths: {
        until: 'until',
    }
})
// 添加要加在的模块
require(['until'], function (Until) {
    Until.test()
})