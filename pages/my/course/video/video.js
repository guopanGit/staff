// 我的课程/video.js

import {
  getType,
  showToast
} from "../../../../utils/utils";

let video = undefined;


Page({
  data: {
    navData: {
      title: '课程回放'
    },
    type: false,
    height: 0,
    video1: 'https://img0.baidu.com/it/u=481245303,1865125205&fm=26&fmt=auto',
    video2: 'https://bpic.wotucdn.com/12/91/66/38bOOOPICff.mp4',
    video: 'https://video1.rfstock.com/083292435_main_xl.mp4',
    current: 0, // 当前播放时间
    nav: 2,
    show: false
  },
  onLoad(options) {
    let pages = getCurrentPages().length;
    let navData = {
      title: '课程回放',
      pages,
      bgcolor: "#fff",
      color: '#333'
    }
    let height = getApp().globalData.height

    // 获取网络状态
    getType()
        .then((res) => {
          console.log(res);
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
  onReady() {
      video = tt.createVideoContext('myVideo')
  },

  // 切换内容
  cutNav(e) {
    let {nav} = e.currentTarget.dataset;
    let old = this.data.nav;
    if (nav === old) {
      return
    }
    this.setData({
      nav
    })
  },

  isShow() {
    let show = this.data.show;
    this.setData({
      show: !show
    })
  },


  // 视频方法
  videoPlan(e) {
    let {currentTime,} = e.detail;
    this.setData({
      current: currentTime,
    })

  },

  pauseVido() {
    showToast('暂停播放')
  },

  onHide() {
    showToast('暂停播放')
    video.stop()
  },

  onUnload() {
    showToast('暂停播放')
    video.stop()
  },
 // 分享
  onShareAppMessage() {}
})