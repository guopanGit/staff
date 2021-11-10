// 项目详情/project.js
import {
  ajaxPromise,
  showToast,
  getNetworkType, getType
} from '../../../utils/utils';

Page({
  data: {
    navData: {
      title: '项目详情'
    },
    type: false,
    height: 0,
    mack: false
  },
  onLoad() {
    let pages = getCurrentPages().length;
    let height = getApp().globalData.height
    let navData = {
      title: '项目详情',
      pages,
      bgcolor: "#3D74F3",
      color: '#fff'
    }

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

  // 去项目详情
  toDetails(){
    tt.navigateTo({
      url:'/pages/select/details/details'
    })
  },

  // 立即咨询
  consult() {
    showToast('立即咨询')
  },

  // 获取资料
  getData() {
    showToast('获取资料')
  },

  showMack() {
    let mack = this.data.mack;
    this.setData({
      mack: true
    })
  },

  hideMack() {
    let mack = this.data.mack;
    this.setData({
      mack: false
    })
  }
})