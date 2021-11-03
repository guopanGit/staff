// 头部导航组件.js

const app = getApp();

Component({
  properties: {
    // define headerText property to use in custom component
    navData:{
      type: Object,
      value: {},
      observer(newVal, oldVal){
        this.setData({
          navData: newVal
        })
      }
    }
  },
  data: {
    height: 0,
    bottom: 0,
    navData:{}
  },
  methods: {
    // Component internal method
    return (e) {
      console.log(e)
      tt.navigateBack()
    },
  },

    attached () {
      // 设置导航高度
      this.setData({
        height: app.globalData.height,
        bottom: app.globalData.bottom
      })
    }
});