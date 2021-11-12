// pages/my/my.js

import {
  ajaxPromise,
  showToast,
  getNetworkType
} from '../../utils/utils';

Page({
  data: {
    avatarUrl: '',
    nickName: '未登录',
    navData: {},
    height: 0
  },
  onLoad() {
    let pages = getCurrentPages().length;
    let navData = {
      title: '我的',
      pages,
      bgcolor: "#3d74f3",
      color: '#fff'
    }
    let height = getApp().globalData.height
    this.setData({
      navData,
      height
    })
    this.logoin()
  },
  // 判断是否登录
  islogin() {
    tt.checkSession({
      success: (res) => {
        // 去授权
        this.tologin()
      },
      fail: (res) => {
        // 去登录
        this.logoin()
      },
    })
  },

  logoin() {
    tt.login({
      force: true,
      success: (res) => {
        console.log(res);
        let data = {
          code: res.code,
          iv: '',
          encryptedData: '',
          user_type: 'douyin'
        };
        tt.getUserInfo({
          withCredentials: true,
          success: (res) => {
            console.log(res);
            let userInfo = res.userInfo;
            let url = 'https://api.xiangmucanmou.com/user/auth_login'
            data.iv = res.iv;
            data.encryptedData = res.encryptedData;
            console.log(data);
            ajaxPromise(url,data,'POST').then((res) => {
              console.log(res,'1');
            })
            // 获取appid 待补充
            // console.log(userInfo);
            tt.setStorageSync('userInfo', userInfo);
            this.setData({
              avatarUrl: userInfo.avatarUrl,
              nickName: userInfo.nickName,
            })
          },
          fail: (res) => {
            this.setData({
              avatarUrl: '',
              nickName: '请授权',
            })
          },
        });
      },
      fail: (res) => {
        this.setData({
          avatarUrl: '',
          nickName: '请授权',
        })
      },
    });
  },

  // 去授权
  tologin() {
    tt.getSetting({
      success: (res) => {
        let val = res.authSetting['scope.userInfo'];
        if (!val) {
          tt.openSetting({
            success: (res) => {
              tt.getUserInfo({
                success: (res) => {
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
  toDetails(e) {
    let val = e.currentTarget.dataset.val
    if (val == '1') {
      tt.navigateTo({
        url: '/pages/my/stationed/stationed'
      })
    } else if (val == '2') {
      tt.navigateTo({
        url: '/pages/my/contrast/contrast'
      })
    } else if (val == '3') {
      tt.navigateTo({
        url: '/pages/my/record/record'
      })
    } else if (val == '4') {
      tt.navigateTo({
        url: '/pages/my/course/course'
      })
    } else if (val == '5') {
      tt.navigateTo({
        url: '/pages/my/hobby/hobby'
      })
    } else if (val == '6') {
      tt.navigateTo({
        url: '/pages/my/share/share'
      })
    } else if (val == '7') {
      tt.navigateTo({
        url: '/pages/my/contact/contact'
      })
    }
  }
})