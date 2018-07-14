// pages/seach/seach.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchShops: [],
    diningTypeCode: 1 // 就餐类型，默认为1，1堂食，2到店自提，3预约，外卖
  },
  diningTypeOnClick: function (event) {
    var that = this;
    that.setData({
      diningTypeCode: event.currentTarget.dataset.diningTypeCode
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5afb0355fa8a1e7a7397ec92/example/queryNearShops',
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: {
        currentPosition: 111
      },
      success: function (res) {
        that.setData({
          searchShops: res.data.data,
        });
      },
      fail: function (res) {
      }
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