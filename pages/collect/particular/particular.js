// 项目分析结果/particular.js
import {getType} from "../../../utils/utils";

Page({
  data: {
    height: 0,
    type: false,
    show: false
  },
  onLoad(options) {
    let pages = getCurrentPages().length;
    let navData = {
      title: '项目基本信息对比',
      pages,
      bgcolor: "#fff",
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

  // 切换分类
  showClassify() {
    this.setData({
      show: true
    })
  },

  switch(e){
    this.setData({
      show: false
    })
  }
})