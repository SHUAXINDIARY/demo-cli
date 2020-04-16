# demo-cli

-----------------------

## 项目描述
- 解决不使用SPA应用框架脚手架时，还可以使用CSS预处理器、ES6语法、TS的一个脚手架
- [文档:暂时](https://shuaxindiary.github.io/2020/04/11/%E5%85%B6%E4%BB%96/demo-cli/#more)
## 适用场景
- 学习TS/ES6/LESS
- 做一些传统前端页面开发提升效率

## 支持功能

### 开发环境
- 支持热刷新
- 支持LESS(选用)
- 支持ES6(模块化系统不支持)
- 支持TS(选用)
- 增加AMD模块化支持(1.1.0支持)
- 增加until.js(自己封装的一些常用工具函数)

### 生产环境
- 支持HTML/CSS/js压缩去除注释
- 支持图片压缩

## 食用指南

### 环境配置
```shell
# 下载本lci
git clone xxx
# 本地全局安装gulp
npm i gulp -g
# 安装cli依赖
npm i 
```
### 开发/打包
```shell
# 在cli根目录操作
# 开发 
npm run dev
# 打开 http://localhost:8080/index.html



# 打包生成可直接部署的dist目录
npm run build
```

### 目录说明
```js
+ src---开发目录
   + assets---存放其他资源：resetcss、图标等
   + css---样式文件
   + js----js代码
   + less--less文件(可选：不使用无视即可)
   + ts----ts文件(可选：不使用无视即可)
   - index.html---src根目录存放页面文件
- babelrc---babel配置(可自定义参考官方配置)
+ gulpfile.js---gulp配置目录
   - index.js---入口文件
   - Tasks.js---任务方法文件
   - paths.js---打包入口/出口路径
- tsconfig.json--ts配置文件(可自定义参考)
- config.json----配置项目环境：例如是否使用ts/less、配置本地服务器信息
```

- [config配置本地服务器指南](https://www.npmjs.com/package/gulp-connect)

- [ts配置](https://typescript.bootcss.com/tsconfig-json.html) 

### less和ts说明
>less
- 如果使用less，链接引入时应引入css目录下同名css文件
- 开发环境下会自动转换less文件到css目录
- 实例
```html
...
<!-- 作用该页的样式文件为demo.less -->
<link rel="stylesheet" href="./css/demo.css">
...
```

>ts
- 使用同上
- 关于tsconfig配置，这里使用的gulp-typescript插件，具体配置支持情况查看官方文档 [gulp-typescript](https://www.npmjs.com/package/gulp-typescript)
