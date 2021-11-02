// 项目浏览记录.js

 import {
   showToast
 } from '../../../utils/utils';

Page({
  data: {

  },
  onLoad(options) {
    tt.setNavigationBarTitle({
      title: "项目浏览记录",
     })
  },

  toDetails(e){
    console.log(e)
    let val = e.currentTarget.dataset.val;
    console.log(val)
    showToast('项目详情')
   }
})