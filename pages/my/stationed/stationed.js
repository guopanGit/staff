// 我要入驻.js

import {
  showToast
} from '../../../utils/utils';

Page({
    data: {
     imgUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F1910011G64AT2-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638421644&t=9020d2e206b9739b0ce1e36000e00504'
    },
    onLoad(options) {
      tt.showShareMenu({})
    },
    onReady(){
     tt.setNavigationBarTitle({
       title: "我要入驻",
      })
      tt.setNavigationBarColor({
        frontColor: "#000000",
        backgroundColor: "#3d74f3"
       })
    },
    // 保存图片
    save(){
    tt.getSetting({
      success: (res) => {
        let state = res.authSetting['scope.album']
        if(!state){
          tt.openSetting()
        } else {
          let url = this.data.imgUrl;
          tt.downloadFile({
            url,
            success:(res) => {
              let filePath = res.tempFilePath;
             tt.saveImageToPhotosAlbum({
               filePath,
               success: (res) => {
                 showToast('保存成功','success')
               },
               fail: (res) => {
                 showToast('保存失败','fail')
               },
             })
     
            },
            fail: () => {
             showToast('保存失败','fail')
            }
          })
        }
      }
    })
    }
  })