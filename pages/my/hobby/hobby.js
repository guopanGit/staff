// 我的创业测试.js

import {
    ajaxPromise,
    showToast,
    getNetworkType
} from '../../../utils/utils';

Page({
    data: {
        userInfo: {}
    },
    onLoad() {
        let userInfo = tt.getStorageSync('userInfo');
        let pages = getCurrentPages().length;
        let navData = {
            title: '我的创业测试',
            pages,
            bgcolor: "#3d74f3",
            color: '#fff'
        }
        let height = getApp().globalData.height
        this.setData({
            navData,
            height,
            userInfo
        })
    },

    // 去测试
    toTest() {
        tt.navigateTo({
            url: '/pages/test/test'
        })
    }
})