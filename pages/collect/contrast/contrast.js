// 发起对比/contrast.js
import {getType, showToast} from "../../../utils/utils";

Page({
  data: {
    height: 0,
    type: false,
    list: [
      {val: 1, checked: false},
      {val: 2, checked: false},
      {val: 3, checked: false},
      {val: 4, checked: false},
      {val: 5, checked: false},
      {val: 6, checked: false}
    ],
    checked: []
  },
  onLoad(options) {
    let pages = getCurrentPages().length;
    let navData = {
      title: '发起对比',
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

  // 选择对比
  setContrast(e) {
    let index = e.currentTarget.dataset.inx;
    let {list, checked} = this.data;
    if (checked.length == 0) {
      checked.push(list[index])
      list[index].checked = true;
    } else if (checked.indexOf(list[index]) == -1 && checked.length < 2) {
      checked.push(list[index])
      list[index].checked = true;
    } else if (checked.indexOf(list[index]) != -1) {
      checked.splice(checked.indexOf(index), 1)
      list[index].checked = false;
    } else {
      showToast('最多支持两个对比')
    }
    this.setData({
      list,
      checked
    })
  },

//  发起对比
  beginContrast() {
    let {checked} = this.data;
    if (checked.length < 2) {
      showToast('请选择两个对比')
      return false
    } else {
      tt.navigateTo({
        url: '/pages/collect/result/result'
      })
    }
  }
})