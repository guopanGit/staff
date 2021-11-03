// /Users/mac/Documents/work/staff/参谋/pages/collect/collect.js
Page({
  data: {
    navData:{},
    list:0
  },
  onLoad (options) {
    let pages = getCurrentPages().length; 
    let navData = {
      title:'收藏',
      pages,
      bgcolor: "#fff",
      color:'#333'
    }
    let height = getApp().globalData.height
    this.setData({
      navData,
      height
    })
  }
})