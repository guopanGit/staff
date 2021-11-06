// 创业测试.js
Page({
    data: {
        navData: {},
        height: 0
    },
    onLoad(options) {
        let pages = getCurrentPages().length;
        let navData = {
            title: '项目喜好测试',
            pages,
            bgcolor: "#3d74f3",
            color: '#fff'
        }
        let height = getApp().globalData.height
        this.setData({
            navData,
            height
        })
    }
})