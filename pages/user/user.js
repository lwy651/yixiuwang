// pages/user/user.js
const app = getApp();
const AV = require('../../utils/av-weapp-min');

var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;

Page({
  data: {
    web_states: 1,
    getmobiletf: true,
    mobileNum: "",
    code: null
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var user = AV.User.current().toJSON();;
    console.log(user);
    if (user.mobilePhoneVerified) {
      this.setData(
        {
          web_states: 3
        }
      )
    }
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  getyan: function () {
    AV.User.loginWithWeapp().then(user => {
      // 设置并保存手机号
      user.setMobilePhoneNumber(this.mobileNum);
      return user.save();
    }).then(user => {
      // 发送验证短信
      return AV.User.requestMobilePhoneVerify(this.mobileNum);
    }).then({
      // 用户填写收到短信验证码后再调用 AV.User.verifyMobilePhone(code) 完成手机号的绑定
      // 成功后用户的 mobilePhoneVerified 字段会被置为 true
      // 此后用户便可以使用手机号加动态验证码登录了
    }).catch(console.error);
  },
  set_moible: function () {

  },
  bindChange: function (e) {
    this.mobileNum = e.detail.value
    console.log(e.detail.value);
    if (myreg.test(this.mobileNum)) {
      this.setData({
        getmobiletf: false
      })
    }
    else {
      this.setData({
        getmobiletf: true
      })
    }
  },
  codeChange: function (e) {
    this.code = 425689;
    console.log(this.code);
  }
  ,
  mobileVerification: function () {
    console.log(this.code);
    AV.User.verifyMobilePhone(this.code).catch(console.error)
  }
})