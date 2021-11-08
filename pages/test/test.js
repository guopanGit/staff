// 创业测试.js

import {
    showToast,
    getLocation
} from '../../utils/utils'

Page({
    data: {
        navData: {},
        height: 0,
        num: 4,
        title: '您预计开展创业的城市是哪?',
        two: ['投资回报快', '投资回报快', '风险稳定高', '投资收益高'],
        three: ['5万-10万', '10万-15万', '15万-20万', '20万-25万'],
        four: ['智能教育', '快递', '互联网', '智能教育', '互联网', '智能教育',
            '智能教育', '互联网', '快递', '互联网', '快递', '快递',
        ],
        oneInx: -1,
        twoInx: -1,
        threeInx: -1,
        fourInx: [],
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
            let { location } = res
            showToast(location)
        })

        this.setData({
            navData,
            height
        })
    },
    oneAlone(e) {
        let { twoInx } = this.data;
        let { inx } = e.currentTarget.dataset;
        if (twoInx == inx) {
            return
        }
        this.setData({
            twoInx: inx
        })
    },
    twoAlone(e) {
        let { threeInx } = this.data;
        let { inx } = e.currentTarget.dataset;
        if (threeInx == inx) {
            return
        }
        this.setData({
            threeInx: inx
        })
    },
    checkbox(e) {
        let { fourInx } = this.data;
        let { inx } = e.currentTarget.dataset;


        console.log(threeInx.indexOf(index))
        console.log(fourInx, inx)

    },
    next() {
        let { num, oneInx, twoInx } = this.data

        // if (num == 1 && oneInx == -1) {
        //     showToast('没有您喜欢的吗？')
        //     return
        // } else if (num == 2 && twoInx == -1) {
        //     showToast('没有您喜欢的吗？')
        //     return
        // }

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
    }
})