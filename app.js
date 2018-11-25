//add one line
var that = this;
//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var that = this;
    console.log("onLuanc");

    // 登录
    wx.login({//login流程
      success: function (res) {//登录成功
        if (res.code) {
          var code = res.code;
          wx.getUserInfo({//getUserInfo流程
            success: function (res2) {//获取userinfo成功
              //console.log(res2);

              var encryptedData = encodeURIComponent(res2.encryptedData);//一定要把加密串转成URI编码
              var iv = res2.iv;
              //请求自己的服务器
              var signature = res2.signature;
              var rawData = res2.rawData;

              var that = this;
              wx.request({
                url: "https://ssl.goduoduo.wang/order.php/login/checkLogin",
                data: {
                  code: code,
                  encryptedData: res2.encryptedData,
                  signature: signature,
                  rawData: rawData,
                  iv: iv
                },
                method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                header: {
                  'content-type': 'application/json'
                }, // 设置请求的 header
                success: function (res) {
                  var dayone, daysev;
                  dayone = res.data.dayone,
                  daysev = res.data.daysev,
                    console.log('日期' + res.data.dayone);
                 
                    // success
                    wx.hideToast();
                    wx.setStorage({
                      key:'dayone',
                      data:res.data.dayone
                    }),
                      wx.setStorage({
                        key: 'id_own',
                        data: res.data.data[0].card
                      }),
                
                      wx.setStorage({
                        key: 'id',
                        data: res.data.data[0].card
                      }),
                      wx.setStorage({
                        key: 'daysev',
                        data: res.data.daysev
                      }),            
                    wx.setStorage({
                      key: 'wid',
                      data: res.data.wid,
                    }),  
                      wx.setStorage({
                      key: 'input[0].am1',
                      data: res.data.data[0].am1,
                      }), wx.setStorage({
                      key: 'input[0].am2',
                      data: res.data.data[0].am2,
                      }), wx.setStorage({
                      key: 'input[0].am3',
                      data: res.data.data[0].am3,
                      }), wx.setStorage({
                      key: 'input[0].am4',
                      data: res.data.data[0].am4,
                      }), wx.setStorage({
                      key: 'input[0].am5',
                      data: res.data.data[0].am5,
                      }), wx.setStorage({
                        key: 'input[0].pm1',
                        data: res.data.data[0].pm1,
                      }), wx.setStorage({
                        key: 'input[0].pm2',
                        data: res.data.data[0].pm2,
                      }), wx.setStorage({
                        key: 'input[0].pm3',
                        data: res.data.data[0].pm3,
                      }), wx.setStorage({
                        key: 'input[0].pm4',
                        data: res.data.data[0].pm4,
                      }), wx.setStorage({
                        key: 'input[0].pm5',
                        data: res.data.data[0].pm5,
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
              // Login(code, encryptedData, signature, rawData,iv);
            }
          })

        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });

  },
  onPullDownRefresh() {
  },
  globalData: {
    userInfo: null,
    wid: "",
    name: "",
    id:"",
    dayone: null,
    daysev: null,
   
  }
})
