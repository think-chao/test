// pages/list/list.js
var collectionStatus = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collectionStatus: 0,
    leader_list:null,
    _this:null
  },

  onLoad:function (options) {
    var id_own;
    var _this=this;
    var leader_list;
    wx.getStorage({
      key: 'id_own',
      success: function (res) {
        id_own = res.data;
        console.log('onLoad取数据'+res.data);
        wx.request({
          url: "https://ssl.goduoduo.wang/order.php/index/list_leader",
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          data: {
            id_own: id_own
          },
          header: {
            'content-type': 'application/json'
          }, // 设置请求的 header
          success: function (res) {
            console.log(res.data.data);
            _this.setData({
              'leader_list': res.data.newStatus,
              'card_list': res.data.card,
              'guanzhu_list': res.data.guanzhu
            });
            console.log('领导list数据:' + leader_list)
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
   
    // Login(code, encryptedData, signature, rawData,iv);
  },

  list_add:function (e){
    var ep = e.target.id;
    var id_own;
    wx.getStorage({
      key: 'id_own',
      success: function(res) {
        id_own=res.data;
        console.log(res.data);
      },
    })
    console.log(ep);
    if (true) {
      var that = this;
      wx.showModal({
        title: '确认',
        content: '确定关注',
        success: function (res) {
          if (res.confirm) {
            wx.request({
              url: "https://ssl.goduoduo.wang/order.php/index/guanzhu",
              method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
              data: {
                id: ep,
                id_own:id_own
                
              },
              header: {
                'content-type': 'application/json'
              }, // 设置请求的 header
              success: function (res) {
                console.log(res.data.newStatus);
                that.setData({
                  'leader_list': res.data.newStatus,
                  'card_list':res.data.card,
                  'guanzhu_list':res.data.guanzhu
                })
              },
              fail: function () {
                // fail
                // wx.hideToast();
              },
              complete: function () {
                // complete
              }
            })
          }
        }
      })
    }
    else {
    }

  },
  /**
    * 鼠标点击触发收藏操作
    */
  list_del: function (e) {
    var ep = e.target.id;
    var id_own;
    wx.getStorage({
      key: 'id_own',
      success: function (res) {
        id_own = res.data;
        console.log(res.data);
      },
    })
    console.log(ep);
    if (true) {
      var that = this;
      wx.showModal({
        title: '确认',
        content: '确定不再关注此人',
        success: function (res) {
          if (res.confirm) {
            wx.request({
              url: "https://ssl.goduoduo.wang/order.php/index/quguan",
              method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
              data:{
                 id: ep,
                 id_own: id_own
              },
              header: {
                'content-type': 'application/json'
              }, // 设置请求的 header
              success: function (res) {
                console.log(res.data.newStatus);
               that.setData({
                 'leader_list': res.data.newStatus,
                 'card_list': res.data.card,
                 'guanzhu_list': res.data.guanzhu
                })
              },
              fail: function () {
                // fail
                // wx.hideToast();
              },
              complete: function () {
                // complete
              }
            })
          }
        }
      })
    }
    else {
    }

  },

})