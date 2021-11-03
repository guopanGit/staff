// 我的创业测试.js

import {
  ajaxPromise,
  showToast,
  getNetworkType
} from '../../../utils/utils';

Page({
  data: {
    userInfo:{}
  },
  onLoad(){
    let userInfo = tt.getStorageSync('userInfo');
    console.log(userInfo)
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

  // 去测试
  toTest() {
    tt.navigateTo({
      url:'/pages/test/test'
    })
  }
})