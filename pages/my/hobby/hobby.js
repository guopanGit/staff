// 我的创业测试.js
Page({
  data: {
    userInfo:{}
  },
  onLoad(){
    let userInfo = tt.getStorageSync('userInfo');
    console.log(userInfo)
    console.log('1')
    this.setData({
      userInfo 
    })
  },

  onReady(){
    tt.setNavigationBarTitle({
      title: "我的创业测试",
     })
     tt.setNavigationBarColor({
      frontColor: "#000000",
      backgroundColor: "#3d74f3"
     })
  },
})