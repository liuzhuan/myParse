myParse 是基于开源软件 [wxParse](https://github.com/icindy/wxParse) 的一款富文本解析组件，适用于支付宝小程序。

具体修改内容参见蚂蚁金服开发者社区的文章：[《支付宝富文本解析组件》](https://openclub.alipay.com/read.php?tid=8707&fid=66&ant_source=zsearch)。

# myParse - 支付宝小程序富文本解析组件

支持 Html 及 markdown 转 axml 可视化。作用是将 Html/Markdown 转换为支付宝小程序的可视化方案。

## 特性

| 支持特性        | 实验功能           | ToDo  |
| ------------- |-------------| -----|
| - [x] HTML的大部分标签解析 | [x] 小表情emjio | [x] table标签 |
| - [x] 内联style          | [x] a标签跳转   |               |
| - [x] 标签Class          | [x] 动态添加    |               |
| - [x] 图片自适应规则       |               |                |
| - [x] 图片多图片预览      |                |               |
| - [x] 模版层级可扩展性    |                |               |
| - [x] 多数据循环方式      |                |  |
| - [x] 内联style         |                |   |
|         |                |   |

## 感谢

[@icindy](https://github.com/icindy) | [@stonewen](https://github.com/stonewen)| [@Daissmentii](https://github.com/Daissmentii)        | [@wuyanwen](https://github.com/wuyanwen)           | [@vcxiaohan](https://github.com/vcxiaohan)  |

## 基本使用方法

### 1. Copy文件夹 `myParse`

```
- myParse/
  -myParse.js(必须存在)
  -html2json.js(必须存在)
  -htmlparser.js(必须存在)
  -showdown.js(必须存在)
  -myDiscode.js(必须存在)
  -myParse.axml(必须存在)
  -myParse.acss(必须存在)
  -emojis(可选)
```

### 2. 引入必要文件

```js
// 在使用的 View 中引入 myParse 模块
var MyParse = require('../../myParse/myParse.js');
```

```js
// 在使用的 acss 中引入 myParse.acss,可以在app.acss
@import "/myParse/myParse.wxss";
```

### 3. 数据绑定

```js
var article = '<div>我是HTML代码</div>';
/**
* MyParse.myParse(bindName , type, data, target,imagePadding)
* 1.bindName绑定的数据名(必填)
* 2.type可以为html或者md(必填)
* 3.data为传入的具体数据(必填)
* 4.target为Page对象,一般为this(必填)
* 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
*/
var that = this;
MyParse.myParse('article', 'html', article, that, 5);
```

### 4. 模版引用

```xml
<!-- 引入模板 -->
<import src="你的路径/myParse/myParse.wxml"/>
<!-- 这里data中article为bindName -->
<template is="myParse" data="{{myParseData:article.nodes}}"/>
```
