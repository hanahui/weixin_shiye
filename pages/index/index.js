//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: '小程序开发',
    url: "../../img/story.jpg"
  },
  //事件处理函数
  onlbtn: function (options) {
    wx.navigateTo({
      url: '../level/level'
      // url: '../grade/grade'
    })
    // console.log(options);
  },
  onLoad: function () {
  }
})
