// 精选.js

import {
  getType
} from '../../utils/utils'

Page({
  data: {
    navData: {
      title: '精选'
    },
    type: true,
    height: 0,
    index: 0,
    title: 1,
    oldTop: 0,
    isFixed: false,
    imgUrls: [
      '/image/grop.jpg',
      '/image/grop.jpg',
      '/image/grop.jpg',
      '/image/grop.jpg'
    ]

  },
  onLoad(options) {
    let pages = getCurrentPages().length;
    let navData = {
      title: '精选',
      pages,
      bgcolor: "#3D74F3",
      color: '#fff'
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
  currentChange(e) {
    let index = e.detail.current;
    this.setData({
      index
    })
  },

  switch(e) {
    let title = e.currentTarget.dataset.val
    this.setData({
      title
    })
  },

  toProject(e){
    tt.navigateTo({
      url: '/pages/select/project/project'
    })
  },

  getDetails(e){
    tt.navigateTo({
      url: '/pages/select/course/course'
    })
  },

  // 固定元素
  onPageScroll(e) {
    let query = tt.createSelectorQuery();
    query.select(".title").boundingClientRect((res) => {
      let {height, oldTop, isFixed} = this.data;
      let {top} = res;
      if (top <= height * 2 + 24) {
        isFixed = true;
        this.setData({
          oldTop: e.scrollTop
        })
      } else if (e.scrollTop < oldTop) {
        isFixed = false
      }
      this.setData({
        isFixed
      })
    })
    query.exec();
  }

})