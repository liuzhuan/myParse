var MyParse = require('../../myParse/myParse.js');
Page({
    data: {},
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        var that = this;
        var aHrefHrefData = '<div style="color:red;text-align:center;padding:20px;"><a href="https://weappdev.com/index.html">点击我，可以跳转</a></div>';
        MyParse.myParse('aHrefHrefData', 'html', aHrefHrefData, that);

        var emojisData = '<div style="color:red;text-align:center;padding:20px;">我带有小表情[00][01][02][03]</div>';
        MyParse.myParse('emojisData', 'html', emojisData, that);
    },

    insertNodeTap: function (e) {
        var that = this;
        var insertData = '<div style="color:red;text-align:center;padding:20px;">我是一个被插入的元素</div>';
        MyParse.myParse('insertData', 'html', insertData, that);
    },

    myParseTagATap: function (e) {
        var href = e.currentTarget.dataset.src;
        console.log(href);
    }
})
