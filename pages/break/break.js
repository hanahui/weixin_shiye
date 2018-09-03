
"pages/break/break",






// pages/break/break.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Collected: false,
    num: 1,
    level: {
      url1: "../../img/article1.jpg",
      url2: "../../img/article2.jpg",
      url3: "../../img/article3.jpg",
      url4: "../../img/article4.jpg",
    },
    urls: "../../img/begin.jpg",
    list: {

    }
  },
  logBtn: function (options) {
    console.log('跳转页面');
    // wx.switchTab({
    //   url: '../home/home',
    // })
    wx.navigateTo({
      url: '../grade/grade',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  // onCollectionTap: function (e) {
  //   // console.log(e);
  // 后期扩展写法
  //   console.log('图片切换');
  //   this.setData({
  //     num: e.target.dataset.num
  //   })
  // },
  onCollectionTap: function (event) {
    console.log('图片切换');
    // console.log(event);
    var postCollected = true;
    //更新Data的数据绑定变量,从而实现图片切换
    this.setData({
      Collected: postCollected, //当前的collected为postCollected
    });
  },
  onhome: function () {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})