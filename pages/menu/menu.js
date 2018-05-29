Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalPrice:0,
    foodNum:0,
    shopCartCount:0,
    banners: [],
    foodTypes: [],
    foods: []
  },
  /**
   * 菜品左侧菜品分类点击事件
   */
  foodTypeOnClick: function(event){
    let that = this;
    let index = event.currentTarget.id;
    var tempFoodTypes = that.data.foodTypes;
    for (var tempIndex in tempFoodTypes){
      if (tempIndex == index){
        tempFoodTypes[index].isChecked = true;
      } else if (tempFoodTypes[tempIndex].isChecked){
        tempFoodTypes[tempIndex].isChecked = false;
      }
    }
    this.setData({
      foodTypes: tempFoodTypes
    });
  },
  showFoodDetail: function (event) {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.showToast({
      title: '加载中。。。',
      icon: 'loading',
      duration:0,
      mask:true
    });
    // 获取banners图
    wx.request({
      url: 'https://easy-mock.com/mock/5afb0355fa8a1e7a7397ec92/example/findBanners',
      method:'POST',
      header:{
        'content-type': 'application/json' // 默认值
      },
      data:{
        groupID:111
      },
      success:function(res){
        that.setData({
          banners: res.data.data,
        });
      },
      fail:function(res){
      }
    })
    // 发送请求
    wx.request({
      url: 'https://easy-mock.com/mock/5afb0355fa8a1e7a7397ec92/example/findShopMenu',
      method:'POST',
      data:{
        groupID:11,
        shopID:112
      },
      header:{
        'Accept': 'application/json'
      },
      success:function(res){
        that.setData({
          foodTypes: res.data.data.foodTypes,
          foods: res.data.data.foods
        });
      }, 
      fail:function(){
        // 提示获取菜品失败
      },complete:function(){
        wx.hideToast();
      }
    });
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