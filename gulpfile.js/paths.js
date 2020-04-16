// 路径管理
let paths = {
    css: {
        src: 'src/css/*.css',
        dest: 'dist/css/'
    },
    less: {
        src: ['src/less/*.less', '!src/less/global.less'],
        dest: 'src/css/'
    },
    js: {
        src: ['src/js/*/*.js','src/js/*.js'],
        dest: 'dist/js/'
    },
    html: {
        src: 'src/*.html',
        dest: 'dist/'
    },
    img: {
        src: 'src/assets/img/*',
        dest: 'dist/assets/img/'
    },
    assets: {
        src: 'src/assets/*',
        dest: 'dist/assets/'
    },
    ts: {
        src: 'src/ts/*.ts',
        dest: 'src/js/'
    }
}
module.exports = paths