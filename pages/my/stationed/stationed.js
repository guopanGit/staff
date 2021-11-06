// 我要入驻.js

import {
    showToast
} from '../../../utils/utils';

Page({
    data: {
        navData: {},
        userData: {
            title: ''
        },
        height: 0,
        color: 'c6',
        location: '请输入所在城市'
    },
    onLoad(options) {
        tt.showShareMenu()
        let pages = getCurrentPages().length;
        let navData = {
            title: '我要入驻',
            pages,
            bgcolor: "#fff",
            color: '#333',
        }
        let height = getApp().globalData.height
        this.setData({
            navData,
            height
        })
        this.location()
    },
    // 获取当前定位位置
    location() {
        tt.getLocation({
            success: (res) => {
                let { latitude, longitude } = res;
                //  坐标逆转换
                showToast('浙江省 杭州市 余杭区', )
                this.setData({
                    location: '浙江省 杭州市 余杭区',
                    color: 'c3'
                })
            }
        })
    },

    //  选择城市
    bindChange(e) {
        let arr = new Set(e.detail.value);
        let location = Array.from(arr);
        this.setData({
            location,
            color: 'c3'
        })
    },
    // 重新授权
    getLocation() {
        tt.getSetting({
            success: (res) => {
                let val = res.authSetting['scope.userLocation'];
                if (!val) {
                    tt.openSetting({
                        success: () => {
                            this.location()
                        }
                    })
                }
            },
            fail: (res) => {
                console.log(res)
            }
        });
    }
})