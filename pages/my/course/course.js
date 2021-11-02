// 我的课程.js
import {
  showToast
} from "../../../utils/utils";

Page({
  data: {
   list:[{a:1},{a:2},{a:3},{a:4},{a:5},{a:6}]
  },
  onLoad(options) {
    tt.setNavigationBarTitle({
      title: "我的课程",
     })
  },
  getDetails(e){
   console.log(e)
   let val = e.currentTarget.dataset.val;
   console.log(val)
   showToast('课程详情')
  }
})