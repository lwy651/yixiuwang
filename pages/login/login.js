const { User } = require('../../utils/av-weapp-min');
const app = getApp();
Page({
  data: {
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    
    console.log(app.globalData.user.mobilePhoneVerified)
    if (!app.globalData.user.mobilePhoneVerified) {
      wx.redirectTo({
        url: '../bindmobile/bindmobile',
        success: function (res) {
          // success
        },
        fail: function (res) {
          // fail
        },
        complete: function (res) {
          // complete
        }
      })
    }
  }
})