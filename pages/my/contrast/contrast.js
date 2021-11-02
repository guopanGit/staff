// 同行业对比.js
import {
  showToast
} from '../../../utils/utils';

Page({
  data: {

  },
  onLoad(options) {
    tt.setNavigationBarTitle({
      title: "同业对比记录",
     })
  },

  toDetails(e){
    console.log(e)
    let val = e.currentTarget.dataset.val;
    console.log(val)
    showToast('对比结果')
   }
})