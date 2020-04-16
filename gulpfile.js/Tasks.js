const { dest, src, watch } = require('gulp')
// 编译less
const less = require('gulp-less')
// 压缩图片
const imagemin = require('gulp-imagemin');
// 删除文件
const del = require('del')
// 压缩html
const miniFyHTML = require('gulp-html-minifier-terser')
// 压缩css
const minifyCSS = require('gulp-csso')
// 合并文件
// const concat = require('gulp-concat');
// 压缩js
const uglify = require('gulp-uglify')
// 转换es6
const babel = require('gulp-babel');
// 编译ts
const ts = require('gulp-typescript')
// 生成版本号
// const rev = require('gulp-rev')
// 替换版本号
// const rPlace = require('gulp-rev-replace')
const connect = require('gulp-connect');
const config = require('../config.json')
const paths = require('./paths')
// 任务
let Tasks = {
    css() {
        if (process.env.NODE_ENV === 'development') {
            console.log(`process.env.NODE_ENV=${process.env.NODE_ENV}`)
            return src(paths.css.src)
                .pipe(connect.reload());
        } else {
            return src(paths.css.src)
                .pipe(minifyCSS())
                .pipe(dest(paths.css.dest))
        }
    },
    less() {
        return src(paths.less.src)
            .pipe(less())
            // 生成版本号
            // .pipe(rev())
            .pipe(dest(paths.less.dest))
            .pipe(connect.reload());
        // 输出版本号文件
        // .pipe(rev.manifest())
        // .pipe(dest('src/'))
    },
    js() {
        if (process.env.NODE_ENV === 'development') {
            return src(paths.js.src)
                .pipe(babel())
                .pipe(connect.reload());
        } else {
            return src(paths.js.src)
                .pipe(babel())
                .pipe(uglify())
                .pipe(dest(paths.js.dest))
        }
    },
    html() {
        if (process.env.NODE_ENV === 'development') {
            return src(paths.html.src)
                .pipe(connect.reload());

        } else {
            return src(paths.html.src)
                .pipe(miniFyHTML({ collapseWhitespace: true }))
                .pipe(dest(paths.html.dest))
        }

    },
    img() {
        return src(paths.img.src)
            .pipe(imagemin())
            .pipe(dest(paths.img.dest))
    },
    assets() {
        return src(paths.assets.src)
            .pipe(dest(paths.assets.dest))
    },
    ts() {
        return src(paths.ts.src)
            //这里是配置ts编译相关配置，几乎支持ts全部的官方配置(极个别不支持查看gulp-typescript文档)
            .pipe(ts(require('../tsconfig.json')))
            .pipe(dest(paths.ts.dest))
            .pipe(connect.reload());

    },
    clean() {
        return del(['dist']);
    },
    server(done) {
        connect.server(config.server)
        done()
    },
    listen(done) {
        if (config.ts) {
            watch('src/ts/*.ts', Tasks.ts)
        } else {
            watch('src/js/*.js', Tasks.js)
        }
        if (config.less) {
            watch('src/less/*.less', Tasks.less)
        } else {
            watch('src/css/*.css', Tasks.css)
        }
        watch('src/*.html', Tasks.html)
        done()
    }
}
module.exports = Tasks