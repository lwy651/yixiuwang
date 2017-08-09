//获取应用
Page({
    data: {
        imgUrls: [
            '../../images/banner.jpg',
            '../../images/time.jpg',
            '../../images/time.jpg'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        imageBanner: '../../images/bannerItem.jpg',
        cardData: [
            {
                title: "家电维修",
                sub: "最专业的团队",
                color:'#FF9700',
                icon: "../../images/weixiu.svg",
                url:'../repairpage/repairpage',
                style:''
            },
            {
                title: "维修保养",
                sub: "保洁延长寿命",
                color:'#F5785D',
                icon: "../../images/huishou.svg",
                url:'../repairpage/repairpage',
                style:'hid_right_border'
            },
            {
                title: "节能回收",
                sub: "闲置也有价值",
                color:'#FED826',
                icon: "../../images/qingjie.svg",
                url:'../repairpage/repairpage',
                style:'hid_bottom_border'
            },
            {
                title: "敬请期待",
                sub: "",
                color:'#A2CF26',
                icon: "",
                url:'',
                style:'hid_bottom_border hid_right_border'
            }
        ]
    },
    gotoUrl: function (event) {
        if(!event.currentTarget.dataset.url||event.currentTarget.dataset.url=="")
            return;
        wx.navigateTo({
            url: event.currentTarget.dataset.url,
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
    },
    gotoSearch:function(event){
      wx:wx.navigateTo({
        url: '../search/search',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
})