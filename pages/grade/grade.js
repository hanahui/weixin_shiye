// pages/grade/grade.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shiju: [
      '静夜思',
      {title:'登黄鹤楼',shi:'故人西辞黄鹤楼'},
      '悯农',
      '长恨歌',
      '鹅鹅鹅',
      '后庭花',
      '忆江南'
    ],
    indicatorDots: false, //是否显示面板指示点
    autoplay: false, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
    num: 1 ,
    swiperCurrent:0,
    imgurl:{
      url1:'../../img/time.png',
      url1n: '../../img/time_no.png',
      url2: '../../img/tips_yes.png',
      url2n:'../../img/tips_no.png',   
      url3:'../../img/wrong.png',
      url3n: '../../img/wrong_no.png',
      url4:'../../img/result.png',
      url4n:'../../img/result_no.png'
    },
    imgtitle:'../../img/slider_ver.png',
    imgnext:'../../img/jiantou.png',
    imgshouzhi: '../../img/shouzhi.png',
    time:[
      { url1:'../../ img / time.png', txt: '十五秒时间'},
      { url1:'../../img/time_no.png', txt:'十秒钟的时间'}
    ],
    tips:[
      {url2: '../../img/tips_yes.png', txt: '有线索',},
      {url2: '../../img/tips_no.png', txt: '无线索',},
      {}
    ],
    wrong:[
      { txt: '不带干扰字', url3:'../../img/wrong.png'},
      { txt: '带一个干扰字', url3:'../../img/wrong_no.png'},
      { txt: '带二个干扰字', url3: '../../img/wrong.png'},
      { txt: '带三个干扰字', url3: '../../img/wrong.png'},
      { txt: '带四个干扰字', url3: '../../img/wrong.png'},
      { txt: '带五个干扰字', url3: '../../img/wrong.png'},
      { txt: '带六个干扰字', url3: '../../img/wrong.png'}
    ],
    result:{
      one:'六局一胜',
      two: '六局二胜',
      three: '六局三胜',
      four: '六局四胜',
      five: '六局五胜',
      six: '六局六胜'
    },
  
  },
// 加载页面先获取用户数据
// 根据用户数据显示上次通关状态
// 修改下面计数器的初始状态
  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function (options) {
    // console.log('跳转到游戏页面');
  },
  // 点击特效函数
  // onltime:function(){
    // 计数器
    // let a = stop;
    // 点击一次加一
    // 根据计数器的值来显示选则的时间
    // 最多点击n次，否则计数器清零
  // },
  swiperChange: function (e) {
    console.log(e);
    this.setData({
      swiperCurrent: e.detail.current   //获取当前轮播图片的下标
    })
  },

  onlbtn: function (e) {
     // console.log(this);
    console.log(e);
    this.setData({
      num: e.target.dataset.num
    }); 
  },
  onlbtnhome: function () {
    console.log('跳转到游戏页面');
    wx.reLaunch({
      url: '../home/home',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    }) 
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