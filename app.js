App({
    onLaunch: function () {
        var logs = my.getStorageSync({ key: 'logs' }).data || [];
        logs.unshift(Date.now());
        my.setStorageSync({
            key: 'logs',
            data: logs
        });
    },

    getUserInfo: function (cb) {
        var that = this
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo);
        } else {
            my.getAuthCode({
                scopes: "auth_user",
                success: function () {
                    my.getAuthUserInfo({
                        success: function (res) {
                            that.globalData.userInfo = res;
                            typeof cb == "function" && cb(that.globalData.userInfo);
                        }
                    })
                }
            });
        }
    },

    globalData: {
        userInfo: null
    }
})
