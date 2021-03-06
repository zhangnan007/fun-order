Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPacking: false, // 是否被选中 
    banners: [],
    nearShops: [],
  },
  /**
   * 店铺列表点击事件
   */
  shopOnclick: function (event) {
    var that = this;
    var diningTypeCode = 1;
    if (that.data.isPacking) {
      diningTypeCode = 2;
    }
    var groupId = event.currentTarget.dataset.groupid;
    var shopId = event.currentTarget.dataset.shopid;
    var list = that.data.banners;
    wx.navigateTo({
      url: '../menu/menu?gId=' + groupId + '&sId=' + shopId + '&type=' + diningTypeCode,
    })
  },
  /**
   * 扫码点餐
   */
  scanTowCode: function (event) {
    // 拉起微信扫码
    wx.scanCode({
      // onlyFromCamera: true,
      scanType: "qrCode",
      success: function (data) {
        wx.navigateTo({
          url: '../menu/menu?content=' + data.result,
        });
      }
    });
  },
  /**
   * 切换就餐类型选中样式
   */
  changeStyle: function (event) {
    var that = this;
    var temPack = that.data.isPacking;
    if (temPack) {
      temPack = false;
    } else {
      temPack = true;
    }
    that.setData({
      isPacking: temPack
    });
  },
  /**
   * 不支持提示
   */
  notSupportHint: function () {
    wx.showModal({
      title: "提示",
      content: "暂不支持该就餐类型",
      showCancel: false,
      confirmText: "知道了",
      confirmColor: "#d81e06"
    })
  },
  /**
   * 获取openId
   * */
  getOpenId: function () {
    wx.login({
      success: function (data) {
        console.log(data)
        if (data.code) {
          wx.request({
            url: 'http://localhost:8080/reqThird/getOpenId',
            method: 'post',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
              code: data.code
            },
            success: function (data) {
              console.log(data);
              if (data.code == 0) {
                wx.setStorageSync('funOrderOpenIdKey', data.data);
              }
            }
          })
        }
      }
    });
  },

  /**
   * 获取首页banner
   */
  getIndexBanner: function (that) {
    wx.request({
      url: 'http://localhost:8080/platform/getBanners',
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          banners: res.data.data,
        });
      },
      fail: function (res) {
      }
    });
  },
  /**
   * 获取用户当前位置 
   */
  getCurrentLocation: function (that) {
    wx.getLocation({
      success: function (data) {
        console.log(data);
        // 获取附近餐厅
        wx.request({
          url: 'http://localhost:8080/platform/getNearShops',
          data: {
            latitude: data.latitude,
            longitude: data.longitude
          },
          method: 'post',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
            that.setData({
              nearShops: res.data.data,
            });
          },
          fail: function (res) {
          }
        })
      },
      fail: function (data) {
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 获取首页banner图
    that.getIndexBanner(that);
    // 获取当前位置
    that.getCurrentLocation(that);
    // 获取并缓存openId
    that.getOpenId();
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