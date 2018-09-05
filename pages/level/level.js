// pages/level/level.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  tagge:false,
   url:'../../img/map.jpg',
   urls:'../../img/button.png',
   urlx:{
     set:'../../img/settings.png',
     break:'../../img/break_model.png',
     leam:'../../img/learn_model.png'
   },
   pag:{
     set:'../set/set',
     break:'../break/break',
     learn:'../learn/learn'
   }
  },
  onltagge:function(){
    let teg = this.data.tagge;
    // console.log(this.data.tagge);
    teg = !teg
    this.setData({
      tagge:teg
    })  
  },
  onlset: function () {
    console.log('options');
    wx.navigateTo({
      url: '../set/set'
    })
  },

  onlbreak:function() {
    wx.navigateTo({
      url: '../break/break',
    })
  },

  onllearn:function(){
    wx.navigateTo({
      url: '../learn/learn',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
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