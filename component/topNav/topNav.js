// 头部导航组件.js

const app = getApp();

Component({
  properties: {
    // define headerText property to use in custom component
    navData: {
      type: Object,
      value: {},
      observer(newVal, oldVal) {
        this.setData({
          navData: newVal
        })
      }
    }
  },
  data: {
    height: 0,
    bottom: 0,
    navData: {},
    isHome: 0,
    isReturn: 0
  },
  methods: {
    // 返回上一页
    return() {
      tt.navigateBack()
    },

    // 返回首页
    toHome() {
      tt.switchTab({
        url: '/pages/select/select'
      })
    },

    // 返回项目详情
    toAppoint() {
      tt.redirectTo({
        url: 'xiangmuxiangqing'
      })
    }
  },

  attached() {

    // 设置导航高度
    this.setData({
      height: app.globalData.height,
      bottom: app.globalData.bottom,
    })
  },
  ready() {
    let route = getCurrentPages()['0'].route;
    let isHome = 0;
    let isReturn = 0;
    if (route == 'xiangmuxiangqing') {
      isReturn = 1
    }
    if (route == 'pages/my/my') {
      isHome = 1
    } else if (route == 'pages/collect/collect') {
      isHome = 1
    } else if (route == 'pages/select/select') {
      isHome = 1
    }
    this.setData({
      isHome,
      isReturn
    })
  }
});