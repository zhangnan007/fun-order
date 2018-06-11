Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentFoodTitle:"foodTitle" + 0, // 当前选中菜品类型
    currentFood: "food" + 0, // 当前选中右侧菜品详情
    foodHeiCount: 0,// 右侧区域总高度
    totalPrice:0,
    foodNum:0,
    shopCartCount:0,
    banners: [],
    foodTypes: [],
    foods: [],
    foodsHeights:[] // 菜单右侧分类高度
  },
  /**
 * 右侧菜单明细滚动事件
 */
  foodOnScroll: function (event) {
    // 锁定上下文
    let that = this;
    // 获取右侧计算好的菜品高度
    var foodhs = that.data.foodsHeights;
    // 右侧菜品信息数据占用总高度
    var heiCount = that.data.foodHeiCount;
    // 累计高度
    var num = 0;
    // 选中菜品类型索引
    var checkedFoodTypeIndex;
    // 循环菜品高度
    for(var index in foodhs){
      var hitem = foodhs[index];
      if (num == 0) {
        num = hitem;
      }
      var scrollTop = event.detail.scrollTop;
      if (num < scrollTop){
        if (index == 0){
          continue;
        }
        num = num + parseFloat(hitem);
        if (num >= scrollTop){
          checkedFoodTypeIndex = index;
          break;
        }
      } else {
        checkedFoodTypeIndex = index;
        break;
      }
    }
    console.log("height: " + num + " scroll top: " + scrollTop);
    console.log("checked index: " + checkedFoodTypeIndex);
    // 修改左侧菜品分类顶端位置
    that.setData({
      currentFood: "food" + checkedFoodTypeIndex
    });
    // 调用修改菜单分类选中样式函数
    that.updateLeftFoodTypeChecked(checkedFoodTypeIndex);
  },
  /**
   * 修改左侧菜品类型选中样式
   */
  updateLeftFoodTypeChecked(checkedIndex){
    let that = this;
    // 当前元素下标
    var index = parseInt(checkedIndex);
    // 后一项元素下标
    var afIndex = 1 + index;
    // 前一项元素下标
    var beIndex = index === 0 ? 0 : index - 1;
    var tempFoodTypes = that.data.foodTypes;
    for (var currIndex in tempFoodTypes) {
      // 当前元素
      var item = tempFoodTypes[currIndex];
      // 设置备选元素前后节点border样式
      if (currIndex == beIndex) {
        item.isUBottom = true;
        item.isUTop = false;
      } else if (currIndex == afIndex) {
        item.isUTop = true;
        item.isUBottom = false;
      } else {
        item.isUBottom = false;
        item.isUTop = false;
      }
      // 设置被选元素样式
      if (currIndex == index) {
        item.isChecked = true;
      } else if (item.isChecked) {
        item.isChecked = false;
      }
    };
    that.setData({
      foodTypes: tempFoodTypes
    });
    return {
      currentFoodTitle: "foodTitle" + index
    };
  },
  /**
   * 菜品左侧菜品分类点击事件
   */
  foodTypeOnClick: function(event){
    let that = this;
    var index = event.currentTarget.dataset.index;
    var data = that.updateLeftFoodTypeChecked(index);
    that.setData({
      currentFoodTitle: data.currentFoodTitle
    });
  },
  /**
   * 展示菜品详情
   */
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
        // 隐藏动画加载中效果
        wx.hideToast();
        // 为菜单类型和菜品明细联动做准备
        // 1.获取设备屏幕高度
        wx.getSystemInfo({
          success: function (result) {
            var winHeight = result.windowHeight * 0.69; // 获取屏幕可用高度
            // 获取右侧菜品分类部分的高度3%
            var foodTitleHeight = Number(winHeight * 0.03);
            // 获取右侧菜品详情部分单个菜品的高度20% 
            var foodDetailHeight = Number(winHeight * 0.2);
            // 声明临时容器
            var heights = new Array();
            // 获取菜品详情数据
            var foods = that.data.foods;
            var heiCount = that.data.foodHeiCount;
            // 循环右侧菜品详情
            for (var index in foods) {
              var food = foods[index];
              // 计算右侧单个菜品类型的总高度(N个菜品详情+1个菜品类型标题)
              var conHeight = Number(food.foodsIntro.length * foodDetailHeight + foodTitleHeight);
              // 记录到集合容器中，顺序与左侧菜品类型保持一致
              heights.push(conHeight);
              // 计算总高度
              heiCount = Number(heiCount + conHeight);
            };
            // 存储全局数据
            that.setData({
              foodsHeights: heights,
              foodHeiCount: heiCount
            });
          }
        });
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