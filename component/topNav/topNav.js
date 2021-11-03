// 头部导航组件.js

const app = getApp();

Component({
  properties: {
    // define headerText property to use in custom component
    navData:{
      type: Object,
      value: {},
      observer(newVal, oldVal){
        console.log(newVal, oldVal)
        let bgcolor = '#fff';
        let color = '#333';
        let pages = 1;
        if(newVal.color){
          color = newVal.color
        }
        if(newVal.bgcolor){
          bgcolor = newVal.bgcolor
        }
        if(newVal.pages){
          pages = newVal.pages
        }
        newVal.color = color
        newVal.bgcolor = bgcolor
        newVal.pages = pages
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