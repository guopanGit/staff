// 我的课程.js
import {
  showToast
} from "../../../utils/utils";

Page({
  data: {
    navData: {},
    height: 0,
    list: [{a: 1}, {a: 2}, {a: 3}, {a: 4}, {a: 5}, {a: 6}]
  },
  onLoad(options) {
    let pages = getCurrentPages().length;
    let navData = {
      title: '我的课程',
      pages,
      bgcolor: '#fff',
      color: '#333'
    }
    let height = getApp().globalData.height
    this.setData({
      navData,
      height
    })
  },

  // 去我的课程
  getDetails(e) {
    console.log(e)
    let val = e.currentTarget.dataset.val;
    console.log(val)
    tt.navigateTo({
      url: '/pages/my/course/video/video'
    })
  }
})