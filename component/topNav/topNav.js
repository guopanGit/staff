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
        let color = '#fff';
        if(newVal.color){
          color = newVal.color
        }
        console.log(color)
        this.setData({
          navData: newVal,
          color
        })
      }
    }
  },
  data: {
    height: '',
    navData:{},
    color:'#fff'
  },
  methods: {
    // Component internal method
    customMethod: function () {},
  },

    attached () {
      // 设置导航高度
      this.setData({
        height: app.globalData.height
      })
    }
});