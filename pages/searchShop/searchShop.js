// pages/searchShop/searchShop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    nearNum:10,
    collectNum:0,
    shops:[{
      address:"西环嘉茂",
      distance:"117米",
      fullAddress:"北京市西城区西直门外大街1号西区商业'凯德MALL'嘉茂购物中心位于西环广场地下一层",
      collectSrc:"../img/weishoucang.png",
      checked:true
    },{
        address: "西直门嘉茂",
        distance: "120米",
        fullAddress: "北京市西城区西直门南大街甲15-6",
        collectSrc: "../img/weishoucang.png",
        checked: false
    },{
        address: "展览路",
        distance: "300千米",
        fullAddress: "北京市西城区西外大街得宝新园14号",
        collectSrc: "../img/weishoucang.png",
        checked: false
    },{
        address: "车公庄",
        distance: "301千米",
        fullAddress: "北京市西城区车公庄大街丙4号一层+二层",
        collectSrc: "../img/weishoucang.png",
        checked: false
    },{
        address: "积水潭",
        distance: "303千米",
        fullAddress: "北京市西城区新街口北大街1号1号楼一层",
        collectSrc: "../img/weishoucang.png",
        checked: false
    }]
  },
  /**
   * 选项卡切换
   */
  switchTabTitle:function(e){
    var that = this;
    if (this.data.currentTab === e.target.dataset.current){
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      });
    }
  },
  /**
   * 滑动切换选项卡
   */
  tabOnChange:function(e){
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
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