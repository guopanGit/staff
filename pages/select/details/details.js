// 项目详情/details.js
import {
  getType,
  showToast
} from "../../../utils/utils";

let video = undefined;

Page({
  data: {
    navData: {
      title: '项目详情'
    },
    type: false,
    height: 0,
    isVideo:true,
    video1: 'https://img0.baidu.com/it/u=481245303,1865125205&fm=26&fmt=auto',
    video2: 'https://bpic.wotucdn.com/12/91/66/38bOOOPICff.mp4',
    video: 'https://video1.rfstock.com/083292435_main_xl.mp4',
    current: 0
  },
  onLoad(options) {
    let pages = getCurrentPages().length;
    let navData = {
      title: '项目详情',
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
  onReady() {
    //
    let isVideo = this.data.isVideo;
    if (isVideo){
      video = tt.createVideoContext('myVideo')
    }
  },


  // 视频方法
  videoPlan(e) {
    let {currentTime, duration} = e.detail;
    let current = this.data.current
    duration = Math.floor(duration);
    currentTime = Math.floor(currentTime);
    if (currentTime - current > 1) {
      video.seek(current)
    } else {
      this.setData({
        current: currentTime,
        duration
      })
    }

  },

  pauseVido() {
    showToast('暂停播放')
  },

  onHide(){
    let isVideo = this.data.isVideo;
    if (isVideo) {
      showToast('暂停播放')
      video.stop()
    }
  },

  onUnload(){
    let isVideo = this.data.isVideo;
    if (isVideo) {
      showToast('暂停播放')
      video.stop()
    }
  }
})