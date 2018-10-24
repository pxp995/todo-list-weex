# Introduction

This boilerplate is targeted towards large, serious projects and assumes you are somewhat familiar with Webpack and `weex-loader`. 

## Quickstart

To use this template, scaffold a project with [weexpack v1.1.1+](https://github.com/weexteam/weex-pack).

``` bash
$ npm install -g weex-toolkit
$ weex create my-project # default will create the webpack template
$ cd my-project && npm start
```

## How to use less/sass/pug

Take `sass` for example:

```
$ npm i node-sass sass-loader --save
```

Then, you just need to change the `style` tag as: `<style lang="sass"><style>`.

## How to create your own template

See [How-to-create-your-own-template](https://github.com/weex-templates/How-to-create-your-own-template).

## 环境搭建问题

把项目下载下来到能运行安卓avd版本，期间遇到很多环境问题（话说文档写的也太简陋了吧..），大多是android studio的问题。[解决传送门](https://mobilesite.github.io/2017/12/17/weex-enviroment/),基本上遇到的问题这里都有提到。

## 项目运行启动

* 先配置启动android studio的虚拟机 avd
* npm run start 启动web应用
* npm run android 启动安卓应用
* cd src/assets/  http-server 启动静态资源库

项目基本框架搭建完毕，接下去都是搬砖实现功能，前期实现起来发现weex并不好用，不打算深入学习了。。只做了解。
