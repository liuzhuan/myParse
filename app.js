App({
  onLaunch: function () {
    // 调用API从本地缓存中获取数据
    var logs = my.getStorageSync({ key: 'logs' }).data || []
    logs.unshift(Date.now())
    my.setStorageSync({
      key: 'logs', 
      data: logs
    });
  },
  
  getUserInfo:function(cb){
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      my.getAuthCode({
        scopes: "auth_user",
        success: function () {
          my.getAuthUserInfo({
            success: function (res) {
              that.globalData.userInfo = res;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  
  globalData:{
    userInfo:null
  }
})
