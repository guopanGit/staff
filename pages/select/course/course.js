// 课程介绍/course.js
import {
  getType,
  showToast
} from "../../../utils/utils";

Page({
  data: {
    navData: {
      title: '课程介绍'
    },
    height: 0,
    type: true,

  },
  onLoad(options) {
    let pages = getCurrentPages().length;
    let navData = {
      title: '课程介绍',
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

  // 去看看项目
  toProject() {
    tt.navigateTo({
      url: '/pages/select/project/project'
    })
  },

  // 开播提醒
  msgWarn() {
    showToast('订阅提醒')
  },

  lookVideo(){
    tt.navigateTo({
      url: '/pages/my/course/video/video'
    })
  },

  getMe(){
    showToast('购买')
  },

  // 去直播
  broadcastRoom() {
    console.log(1111);
    showToast('123')
    tt.setClipboardData({
      data: '直播链接',
      success: (res) => {
        console.log(res);
      }
    })
  }
})