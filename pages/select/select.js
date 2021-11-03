// 精选.js

import {
 getType
} from '../../utils/utils'

Page({
  data: {
    navData:{
      title:'精选'
    },
    type:false
  },
  onLoad (options) {
    getType()
    .then((res) => {
      if(res == 'none'){
       this.setData({
        type:false
       })
       return
      } else {
        this.setData({
          type:true
         })
      }
    })
    let pages = getCurrentPages().length; 
    let navData = {
      title:'精选',
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