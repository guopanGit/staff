// 创业测试.js

import {
    showToast,
    getLocation
} from '../../utils/utils'

Page({
    data: {
        navData: {},
        height: 0,
        num: 1,
        title: '您预计开展创业的城市是哪?',
        location: '选择您的创业城市',
        two: ['投资回报快', '投资回报快', '风险稳定高', '投资收益高'],
        three: ['5万-10万', '10万-15万', '15万-20万', '20万-25万'],
        four: [
            {val: '快递', checked: false},
            {val: '快递', checked: false},
            {val: '快递', checked: false},
            {val: '快递', checked: false},
            {val: '互联网', checked: false},
            {val: '互联网', checked: false},
            {val: '互联网', checked: false},
            {val: '互联网', checked: false},
            {val: '智能教育', checked: false},
            {val: '智能教育', checked: false},
        ],
        oneInx: -1,
        twoInx: -1,
        threeInx: -1,
        fourInx: []
    },
    onLoad(options) {
        let pages = getCurrentPages().length;
        let navData = {
            title: '项目喜好测试',
            pages,
            bgcolor: "#3d74f3",
            color: '#fff'
        }
        let height = getApp().globalData.height;
        getLocation().then((res) => {
            let {location} = res
            this.setData({
                location
            })
        })

        this.setData({
            navData,
            height
        })
    },
    location() {
        getLocation().then((res) => {
            let {location} = res
            this.setData({
                location
            })
        })
    },

    //  选择城市
    bindChange(e) {
        let arr = new Set(e.detail.value);
        let location = Array.from(arr);
        location = location.join(' ')
        console.log(location)
        this.setData({
            location
        })
    },
    oneAlone(e) {
        let {twoInx} = this.data;
        let {inx} = e.currentTarget.dataset;
        if (twoInx == inx) {
            return
        }
        this.setData({
            twoInx: inx
        })
    },
    twoAlone(e) {
        let {threeInx} = this.data;
        let {inx} = e.currentTarget.dataset;
        if (threeInx == inx) {
            return
        }
        this.setData({
            threeInx: inx
        })
    },
    checkbox(e) {
        let {four, fourInx} = this.data;
        let {inx} = e.currentTarget.dataset;
        if (fourInx.indexOf(four[inx]) == -1) {
            if (fourInx.length >= 5) {
                showToast('最多选择五项')
                return
            }
            fourInx.push(four[inx])
        } else {
            fourInx.splice(fourInx.indexOf(inx), 1)
        }
        if (four[inx].checked) {
            four[inx].checked = false;
        } else {
            four[inx].checked = true;
        }
        this.setData({
            four,
            fourInx
        })
    },
    next() {
        let {num, threeInx, twoInx, location} = this.data

        if (num == 1 && location == '选择您的创业城市') {
            showToast('请选择您的创业城市')
            return
        } else if (num == 2 && twoInx == -1) {
            showToast('至少选择一项')
            return
        } else if (num == 3 && threeInx == -1) {
            showToast('至少选择一项')
            return
        }

        num = num + 1;
        let title = '';
        if (num > 4) {
            return
        }
        if (num == 2) {
            title = '创业项目您更喜欢？'
        } else if (num == 3) {
            title = '您能接受创业成本区间？'
        } else if (num == 4) {
            title = '您感兴趣的行业是什么？'
        }
        this.setData({
            num,
            title
        })
    },
    // 获取结果
    getResult() {
        let {fourInx} = this.data;
        if (fourInx.length < 1) {
            return
        }
        showToast('huoqujieguo')
    }
})