// 联系我们.js
import {
    showToast
} from '../../../utils/utils';

Page({
    data: {
        navData: {}
    },
    onLoad(options) {
        let pages = getCurrentPages().length;
        let navData = {
            title: '联系我们',
            pages,
            bgcolor: '#fff',
            color: '#333'
        }
        let height = getApp().globalData.height
        this.setData({
            navData,
            height
        })
    },
    makePhone(e) {
        tt.makePhoneCall({
            phoneNumber: '19919951645'
        })
    }
})