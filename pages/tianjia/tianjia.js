//index.js
//获取应用实例
const app = getApp()
var index=0;
var index1=0;
var date;
var name;
var wid='';
//Page()这个方法是必须有的，里面放置js对象，用于页面加载的时候，呈现效果
//data: {},数据对象，设置页面中的数据，前端可以通过读取这个对象里面的数据来显示出来。
Page({
  data: {
    //设置初始值
    wid:'',
    array: ['本部', '大兴', '出差', '无锡','深圳','请假','工博'],
    objectArray: [
      {
        id: 0,
        name: '本部'
      },
      {
        id: 1,
        name: '大兴'
      },
      {
        id: 2,
        name: '出差'
      },
      {
        id: 3,
        name: '无锡'
      },
      {
        id: 4,
        name: '深圳'
      },
      {
        id: 5,
        name: '请假'
      },
      {
        id: 6,
        name: '工博'
      }
    ],
    index:0,

    array1: ['本部','大兴','出差','无锡','深圳','请假','工博'],
    objectArray1: [
      {
        id: 0,
        name: '本部'
      },
      {
        id: 1,
        name: '大兴'
      },
      {
        id: 2,
        name: '出差'
      },
      {
        id: 3,
        name: '无锡'
      },
      {
        id: 4,
        name: '深圳'
      },
      {
        id: 5,
        name: '请假'
      },
      {
        id: 6,
        name: '工博'
      }
    ],
    index1:0,
    customItem: '全部'
  },

  onShow:function(){
    var that=this;
    wx.getStorage({
      key: 'wid',
      success: function(res) {
        wid=res.data;
        console.log('一出现就获取到的wid'+res.data);
        that.setData({
          wid: res.data
        })
      },
    })
  },
  //表单提交按钮
  //formSubmit: function  小程序中方法都是 方法名:function()，其中function可以传入一个参数，作为触发当前时间的对象
  //这里的e，就是当前触发事件的对象，类似于html onclick=“foo(this)”this对象，小程序封装了许多内置的调用方法，e.detail.value.mobile 就是当前对象name=”mobile”的对象的值e.detail.value.mobile.length就是这个值的长度
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value.id)
  
    console.log('form发生了submit事件，携带数据为：', index, index1, date, wid);
    var that=this;
   
    wx.request({
      
      url: "https://ssl.goduoduo.wang/order.php/Index/insert",
      data: {
        index: this.data.index,
        index1: this.data.index1,
        date: this.data.date,
        name: "123",
        wid: this.data.wid 
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/json'
      }, // 设置请求的 header
      success: function (res) { 
        // success
        if (res.data.res==true){wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000}
        )
        } if (res.data.res == false) {
          wx.showToast({
            title: '错误',
            icon: 'none',
            duration: 2000
          }
          )
        }//wx.hideToast();
      
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

  //普通选择器的点击事件
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  
  //日期选择器
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  //时间选择器
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
})
  