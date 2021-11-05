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
    },
    // 保存图片
    save() {
        tt.getSetting({
            success: (res) => {
                let state = res.authSetting['scope.album']
                if (!state) {
                    tt.openSetting()
                } else {
                    let url = this.data.imgUrl;
                    tt.downloadFile({
                        url,
                        success: (res) => {
                            let filePath = res.tempFilePath;
                            tt.saveImageToPhotosAlbum({
                                filePath,
                                success: (res) => {
                                    showToast('保存成功', 'success')
                                },
                                fail: (res) => {
                                    showToast('保存失败', 'fail')
                                },
                            })

                        },
                        fail: () => {
                            showToast('保存失败', 'fail')
                        }
                    })
                }
            }
        })
    }
})