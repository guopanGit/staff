// /Users/mac/Documents/work/staff/参谋/pages/my/my.js

import {
  ajaxPromise,
  showToast,
} from '../../utils/utils';

Page({
  data: {
    avatarUrl:'',
    nickName:''
  },
  onLoad(){
    tt.getUserInfo({
      success:(res) => {
        console.log(res);
        let userInfo = res.userInfo;
        // 获取appid 待补充
        console.log(userInfo);
        this.setData({
          avatarUrl: userInfo.avatarUrl,
          nickName: userInfo.nickName,
        })
      },
      fail:(res) => {
        console.log(res)
        this.setData({
          avatarUrl: '',
          nickName: '请授权',
        })
      }
    });
  },
  onReady(){
    tt.setNavigationBarTitle({
      title: "我的",
     })
     tt.setNavigationBarColor({
      frontColor: "#000000",
      backgroundColor: "#3d74f3"
     })
  },
  islogin(){
    tt.getSetting({
      success: (res) =>{
         let val = res.authSetting['scope.userInfo'];
         if(!val){
          tt.openSetting({
            success: (res) =>{
              tt.getUserInfo({
                success:(res) => {
                  console.log(res);
                  let userInfo = res.userInfo;
                  console.log(userInfo);
                  // 获取appid 待补充
                  this.setData({
                    avatarUrl: userInfo.avatarUrl,
                    nickName: userInfo.nickName,
                  })
                }
              });
            }
          })
         }
       }
    });
  },
  toDetails(e){
   let val = e.currentTarget.dataset.val
   if(val == '1'){
    showToast('我也入驻')
   } else if(val == '2'){
    showToast('我的课程')
   }else if(val == '3'){
    showToast('去同行业对比')
  }else if(val == '4'){
    showToast('项目浏览记录')
  }else if(val == '5'){
    showToast('测测我的创业喜好')
  }else if(val == '6'){
    showToast('分享我们')
  }
   }
})