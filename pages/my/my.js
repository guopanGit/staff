// pages/my/my.js

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
        tt.setStorageSync('userInfo', userInfo);
        this.setData({
          avatarUrl: userInfo.avatarUrl,
          nickName: userInfo.nickName,
        })
      },
      fail:(res) => {
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
    tt.navigateTo({
      url:'/pages/my/stationed/stationed'
    })
   } else if(val == '2'){
    tt.navigateTo({
      url:'/pages/my/course/course'
    })
   }else if(val == '3'){
    tt.navigateTo({
      url:'/pages/my/contrast/contrast'
    })
  }else if(val == '4'){
    tt.navigateTo({
      url:'/pages/my/record/record'
    })
  }else if(val == '5'){
    tt.navigateTo({
      url:'/pages/my/hobby/hobby'
    })
  }else if(val == '6'){
    tt.navigateTo({
      url:'/pages/my/share/share'
    })
  }
   }
})