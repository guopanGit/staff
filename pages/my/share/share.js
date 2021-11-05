// 分享我们.js
import {
  showToastƒ
} from '../../../utils/utils';

Page({
  data: {
    navData: {},
    channel: {

    }
  },
  onLoad(options) {
    let pages = getCurrentPages().length;
    let navData = {
      title: '分享我们',
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

  onShareAppMessage() { }
})