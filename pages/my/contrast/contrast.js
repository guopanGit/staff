// 同行业对比.js
import {
  showToast
} from '../../../utils/utils';

Page({
  data: {
    navData:{}
  },
  onLoad(options) {
    let pages = getCurrentPages().length; 
    let navData = {
      title:'同业对比记录',
      pages,
      bgcolor : '#fff',
      color : '#333'
    }
    let height = getApp().globalData.height
    this.setData({
      navData,
      height
    })
  },

  toDetails(e){
    console.log(e)
    let val = e.currentTarget.dataset.val;
    console.log(val)
    showToast('对比结果')
   }
})