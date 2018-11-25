const app = getApp()
var wid;
Page({

  data: {
    input: [
      { "am1": "未定" },
      { "pm1": "未定" },
      { "am2": "未定" },
      { "pm2": "未定" },
      { "am3": "未定" },
      { "pm3": "未定" },
      { "am4": "未定" },
      { "pm4": "未定" },
      { "am5": "未定" },
      { "pm5": "未定" }
    ],
    listData: [
      { "code": "上午", "text": "大兴", },
      { "code": "下午", "text": "本部", }
    ]
  },
  onLoad: function (options) {
    console.log('进入index onLoad');
    var that = this;           
                    // success
                    //wx.hideToast();
                    wx.getStorage({
                      key: 'dayone',
                      success: function(res) {
                        that.setData({
                          'dayone': res.data
                        })
                      },
                    }),
               
                      wx.getStorage({
                        key: 'daysev',
                        success: function (res) {
                          that.setData({
                            'daysev': res.data
                          })
                        },
                      }),
                      wx.getStorage({
                        key: 'input[0].am1',
                        success: function(res) {
                          
                          that.setData({
                            'input[0].am1': res.data
                         }) },
                      }),
                        wx.getStorage({
                          key: 'input[0].am2',
                          success: function (res) {

                            that.setData({
                              'input[0].am2': res.data
                            })
                          },
                        }),
                        wx.getStorage({
                          key: 'input[0].am3',
                          success: function (res) {

                            that.setData({
                              'input[0].am3': res.data
                            })
                          },
                        }),
                        wx.getStorage({
                          key: 'input[0].am4',
                          success: function (res) {

                            that.setData({
                              'input[0].am4': res.data
                            })
                          },
                        }),
                        wx.getStorage({
                          key: 'input[0].am5',
                          success: function (res) {

                            that.setData({
                              'input[0].am5': res.data
                            })
                          },
                        }),
                        wx.getStorage({
                          key: 'input[0].pm1',
                          success: function (res) {

                            that.setData({
                              'input[0].pm1': res.data
                            })
                          },
                        }),
                        wx.getStorage({
                          key: 'input[0].pm2',
                          success: function (res) {

                            that.setData({
                              'input[0].pm2': res.data
                            })
                          },
                        }),
                        wx.getStorage({
                          key: 'input[0].pm3',
                          success: function (res) {

                            that.setData({
                              'input[0].pm3': res.data
                            })
                          },
                        }),
                        wx.getStorage({
                          key: 'input[0].pm4',
                          success: function (res) {

                            that.setData({
                              'input[0].pm4': res.data
                            })
                          },
                        }),
                        wx.getStorage({
                          key: 'input[0].pm5',
                          success: function (res) {

                            that.setData({
                              'input[0].pm5': res.data
                            })
                          },
                        })
                        
                 //如果在sucess直接写this就变成了wx.request()的this了.必须为getdata函数的this,不然无法重置调用函数                                    
             
              // Login(code, encryptedData, signature, rawData,iv);
  
  },
  onShow :function(){
    console.log("onshow");
    var wid;
    var that =this;
    wx.getStorage({
      key: 'wid',
      success: function(res) {
        wid=res.data;
        console.log('0000000000000' + wid);
        wx.request({
          url: "https://ssl.goduoduo.wang/order.php/index/update",

          data: {
            wid: wid
          },
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: {
            'content-type': 'application/json'
          }, // 设置请求的 header
          success: function (res) {

            // success
            wx.hideToast();
            console.log('服务器返回' + res.data.data.wid);
            that.setData({//如果在sucess直接写this就变成了wx.request()的this了.必须为getdata函数的this,不然无法重置调用函数                      
              'input[0].am1': res.data.data[0].am1,
              'input[0].am2': res.data.data[0].am2,
              'input[0].am3': res.data.data[0].am3,
              'input[0].am4': res.data.data[0].am4,
              'input[0].am5': res.data.data[0].am5,
              'input[0].pm1': res.data.data[0].pm1,
              'input[0].pm2': res.data.data[0].pm2,
              'input[0].pm3': res.data.data[0].pm3,
              'input[0].pm4': res.data.data[0].pm4,
              'input[0].pm5': res.data.data[0].pm5
            })
            wx.stopPullDownRefresh();

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
  onPullDownRefresh() {

    var that = this;
    wx.getStorage({
      key: 'wid',
      success: function (res) {
        console.log('res....' + res.data);
        wid = res.data;
        console.log(wid);
      },
    })
    
    //wx.showNavigationBarLoading()
  },
}
)