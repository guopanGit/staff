// 精选.js

import {
 getType
} from '../../utils/utils'

Page({
  data: {
    navData:{
      title:'精选'
    },
    type:true,
    index:0,
    title:1,
    imgUrls:[
      '/image/grop.jpg',
      '/image/grop.jpg',
      '/image/grop.jpg',
      '/image/grop.jpg'
    ]
     
  },
  onLoad (options) {
    let pages = getCurrentPages().length; 
    let navData = {
      title:'精选',
      pages,
      bgcolor: "#3D74F3",
      color:'#fff'
    }
    let height = getApp().globalData.height

    // 获取网络状态
    getType()
    .then((res) => {
      let type = false;
      if(res == 'none'){
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
  currentChange(e){
   let index = e.detail.current;
   this.setData({
    index
   })
  },

  switch(e){
  let title = e.currentTarget.dataset.val
  console.log(title)
   this.setData({
    title
   })
  }

})