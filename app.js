//app.js
const AV = require('./utils/av-weapp-min');

// LeanCloud 应用的 ID 和 Key
AV.init({
  appId: 'nWWN6Dpt603K5RWOWPp3Lbhh-gzGzoHsz',
  appKey: '4qKjHph1foiYeusWApsY5FxQ',
});

App({
  onLaunch: function () {
    console.log('asd');
    AV.User.loginWithWeapp().then(user => {
      this.globalData.user = user.toJSON();
      //console.log(this.globalData.user);
    }).catch(console.error);
  },
  globalData: {
    user: null
  },
  getuser: function () {
    if (this.globalData.user) {
      return this.globalData.user;
    }
    else {
      AV.User.loginWithWeapp().then(user => {
        this.globalData.user = user.toJSON();
        //console.log(this.globalData.user);
        return user;
      }).catch(console.error);
    }
  }
})