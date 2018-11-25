// pages/guanzhu/guanzhu.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    guanzhu_list:"",
  
  },
 /**
   * 鼠标点击图片页面跳转
   */
  to_list:function(){
    wx.navigateTo({
      url: '../list/list'
    })
  },

  /*
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('come')
  
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
    var that=this;
    var id;
    wx.getStorage({
      key: 'id',
      success: function(res) {
        console.log('关注页面获取卡号'+res.data);
        wx.request({
          url: "https://ssl.goduoduo.wang/order.php/index/getguanzhu",
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: {
            'content-type': 'application/json'
          }, // 设置请求的 header
          data: {
            id: res.data
          },
          success: function (res) {
            console.log(res.data.data);
            that.setData({
              'guanzhu_list': res.data.data
            });
          },
          fail: function () {
            // fail
            // wx.hideToast();
          },
          complete: function () {
            // complete
          }

        })
      },
    })
   
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