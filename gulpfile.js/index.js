const { parallel, series } = require('gulp')
const Tasks = require('./Tasks')
// 判断生产/开发环境
if (process.env.NODE_ENV === 'development') {
    console.log('开发环境');
    exports.dev = series(Tasks.server, Tasks.listen)

} else {
    console.log('开始打包');
    exports.build = series(Tasks.clean,  parallel(Tasks.html, Tasks.css, Tasks.js, Tasks.img, Tasks.assets))
}

