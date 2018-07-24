// pages/orderDetail/orderDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodDetail: {
      "totalPrice": 100.0,
      "totalNum": 10,
      "totalPackingCharge": 10.0,
      "foodList": [{
        "foodName": "凉面",
        "isSetMeal": false,   //是否套餐
        "originalPrice": 10.0,
        "price": 8.0,
        "num": 2,
        "spec": "小份",
      }, {
        "foodName": "1号套餐",
        "isSetMeal": true,
        "originalPrice": 10.0,
        "price": 8.0,
        "num": 1,
        "spec": "小份",
        "sonFoods": "豆浆 x1，油条 x1，茶叶蛋 x1"
      }, {
        "foodName": "凉面",
        "isSetMeal": false,   //是否套餐
        "originalPrice": 10.0,
        "price": 8.0,
        "num": 2,
        "spec": "小份",
      }, {
        "foodName": "1号套餐",
        "isSetMeal": true,
        "originalPrice": 10.0,
        "price": 8.0,
        "num": 1,
        "spec": "小份",
        "sonFoods": "豆浆 x1，油条 x1，茶叶蛋 x1"
      }, {
        "foodName": "凉面",
        "isSetMeal": false,   //是否套餐
        "originalPrice": 10.0,
        "price": 8.0,
        "num": 2,
        "spec": "小份",
      }, {
        "foodName": "1号套餐",
        "isSetMeal": true,
        "originalPrice": 10.0,
        "price": 8.0,
        "num": 1,
        "spec": "小份",
        "sonFoods": "豆浆 x1，油条 x1，茶叶蛋 x1"
      }, {
        "foodName": "凉面",
        "isSetMeal": false,   //是否套餐
        "originalPrice": 10.0,
        "price": 8.0,
        "num": 2,
        "spec": "小份",
      }, {
        "foodName": "1号套餐",
        "isSetMeal": true,
        "originalPrice": 10.0,
        "price": 8.0,
        "num": 1,
        "spec": "小份",
        "sonFoods": "豆浆 x1，油条 x1，茶叶蛋 x1"
      }]
    }
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