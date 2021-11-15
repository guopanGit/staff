// /Users/mac/Documents/work/staff/参谋/pages/collect/collect.js
import {showToast} from "../../utils/utils";

Page({
  data: {
    height: 0,
    list: 6
  },
  onLoad(options) {
    let pages = getCurrentPages().length;
    let navData = {
      title: '收藏',
      pages,
      bgcolor: "#3d74f3",
      color: '#fff'
    }
    let height = getApp().globalData.height
    this.setData({
      navData,
      height
    })
  },

  toDetails(e) {
    let val = e.currentTarget.dataset.val;
    console.log(val)
    tt.navigateTo({
      url: '/pages/select/project/project'
    })
  },

  toContrast(){
    showToast('去对比')
  },
  // 下拉刷新
  onPullDownRefresh() {
    tt.stopPullDownRefresh();
  },
})