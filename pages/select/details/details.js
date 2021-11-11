// 项目详情/details.js
import {
  getType,
  showToast
} from "../../../utils/utils";

let video = undefined;

let audio = undefined;

let Interval = null;

Page({
  data: {
    navData: {
      title: '项目详情'
    },
    type: false,
    height: 0,
    isVideo: true,
    video1: 'https://img0.baidu.com/it/u=481245303,1865125205&fm=26&fmt=auto',
    video2: 'https://bpic.wotucdn.com/12/91/66/38bOOOPICff.mp4',
    video: 'https://video1.rfstock.com/083292435_main_xl.mp4',
    audioSrc: 'https://other-web-rh01-sycdn.kuwo.cn/899bab98c2cf9afe181a3d3ae4f43753/618cd7f6/resource/n2/37/91/3028208183.mp3',
    current: 0, // 当前播放时间
    nav: 2,
    show: false,
    duration: 0,
    minute: '0:0',
    start: 0,
    startTime: '0:0',
    showPlay: false, //播放icon
    showStop: false, //暂停icon
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
    let {isVideo} = this.data;
    if (isVideo) {
      video = tt.createVideoContext('myVideo')
    } else {
      audio = tt.createInnerAudioContext();
      let {audioSrc} = this.data
      audio.src = audioSrc;
      setTimeout(() => {
        let duration = Math.floor(audio.duration);
        let minute = `${Math.floor(duration / 60)}:${duration % 60}`
        this.setData({
          duration,
          minute
        })
      }, 500)

    }
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

  cutItem() {
    showToast('切换')
    this.setData({
      ['navData.title']: '行业趋势'
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

  // 音频
  audioChange(e) {
    let val = e.detail.value;
    let {duration} = this.data
    audio.seek(val)
    Interval = setInterval((res) => {
      let item = duration - val;
      let minute = `${Math.floor(item / 60)}:${item % 60}`
      this.setData({
        startTime: minute
      })
    }, 1000)

  },

  audioChanging() {
    clearInterval(Interval)
  },

  showPlay() {
    let isPlay = audio.paused;
    if (!isPlay) {
      this.setData({
        showStop: true
      })
      setTimeout((res) => {
        this.setData({
          showStop: false
        })
      }, 2000)
    } else {
      this.setData({
        showPlay: true
      })
      setTimeout((res) => {
        this.setData({
          showPlay: false,
          showStop: false
        })
      }, 2000)
    }

  },

  // 开始播放
  audioPlay() {
    audio.play();
    audio.onPlay(() => {
      Interval = setInterval((res) => {
        let duration = Math.floor(audio.currentTime);
        let minute = `${Math.floor(duration / 60)}:${duration % 60}`
        this.setData({
          startTime: minute,
          start: duration
        })
      }, 1000)
    })
    audio.onWaiting(() => {
      clearInterval(Interval)
    })
    audio.onEnded(() => {
      clearInterval(Interval)
    })
    audio.onError(() => {
      clearInterval(Interval)
    })
    this.setData({
      showPlay: false,
    })
  },

  // 暂停播放
  audioStop() {
    audio.pause();
    clearInterval(Interval)
    this.setData({
      showStop: false,
    })
  },


  onHide() {
    let isVideo = this.data.isVideo;
    if (isVideo) {
      showToast('暂停播放')
      video.stop()
    } else {
      audio.pause();
      audio.offPlay()
      audio.offWaiting()
      audio.offEnded()
      audio.offError()
      clearInterval(Interval)
    }
  },

  onUnload() {
    let isVideo = this.data.isVideo;
    if (isVideo) {
      showToast('暂停播放')
      video.stop()
    } else {
      audio.destroy()
      clearInterval(Interval)
    }
  }
})