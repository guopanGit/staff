// 项目浏览记录.js

 import {
   showToast
 } from '../../../utils/utils';

Page({
  data: {
    height:0
  },
  onLoad(options) {
    let pages = getCurrentPages().length; 
    let navData = {
      title:'项目浏览记录',
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
    let val = e.currentTarget.dataset.val;
    console.log(val)
    showToast('项目详情')
   }
})