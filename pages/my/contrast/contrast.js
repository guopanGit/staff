// 同行业对比.js
import {
  getType,
  showToast
} from '../../../utils/utils';

Page({
  data: {
    navData: {},
    type: false
  },
  onLoad(options) {
    let pages = getCurrentPages().length;
    let navData = {
      title: '行业对比记录',
      pages,
      bgcolor: '#fff',
      color: '#333'
    }
    let height = getApp().globalData.height
    // 获取网络状态
    getType()
        .then((res) => {
          let type = false;
          if (res == 'none') {
            navData.bgcolor = '#fff'
            navData.color = '#333'
          } else {
            type = true
          }
          this.setData({
            navData,
            height,
            type
          })
        })
  },

  toDetails(e) {
    console.log(e)
    let val = e.currentTarget.dataset.val;
    console.log(val)
    showToast('对比结果')
  }
})