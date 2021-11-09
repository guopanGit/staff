// 我要入驻.js

import {
    getLocation,
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
            title: '项目入驻',
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
    location() {
        // 获取当前定位位置
        getLocation().then((res) => {
            let {location} = res
            this.setData({
                location
            })
        })
    }
})