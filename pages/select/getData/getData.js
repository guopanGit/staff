// 获取资料/getData.js
import {
  getType,
  formatTime,
  showToast
} from "../../../utils/utils";

let Interval = undefined;

Page({
  data: {
    navData: {
      title: '获取资料'
    },
    porch:0,
    type: false,
    height: 0,
    name: '',
    picker: '请选择沟通时间',
    pickerTime: [],
    phone: '',
    verify: '',
    timer: '获取验证码',
    textarea: '',
    pickerVal: ''
  },
  onLoad(options) {
    let porch = options.type
    let pages = getCurrentPages().length;
    let height = getApp().globalData.height
    let navData = {
      title: '获取资料',
      pages,
      bgcolor: "#fff",
      color: '#333'
    }

    if (porch == 0) {
      navData.title = '立即咨询'
    }

    // 获取网络状态
    getType()
        .then((res) => {
          let type = false;
          if (res == 'none') {
            navData.bgcolor = '#fff'
            navData.color = '#333'
          } else {
            type = true
          }
          this.setData({
            navData,
            height,
            type
          })
        })

    // 沟通时间
    let arr = []
    // 拼接天
    let arr1 = ['日', '一', '二', '三', '四', '五', '六']
    let arr2 = ['今天', '明天', '后天']
    let week = new Date().getDay()
    for (let i = 0; i < arr1.length; i++) {
      if (i > 2) {
        if (week >= 7) {
          week = 0
        }
        arr2.push(`周${arr1[week]}`)
      }
      week = week + 1
    }

    // 拼接时间
    let arr3 = [];
    let arr4 = [
      '20：00 - 22：00',
      '18：00 - 20：00',
      '16：00 - 18：00',
      '14：00 - 16：00',
      '12：00 - 14：00',
      '10：00 - 12：00',
    ]
    let myDate = new Date().getHours() + '.' + new Date().getMinutes();
    myDate = Math.round(myDate)
    let a = 0
    switch (myDate) {
      case 10:
        a = 5
        break;
      case 11:
        a = 5
        break;
      case 12:
        a = 4
        break;
      case 13:
        a = 4
        break;
      case 14:
        a = 3
        break;
      case 15:
        a = 3
        break;
      case 16:
        a = 2
        break;
      case 17:
        a = 2
        break;
      case 18:
        a = 1
        break;
      case 19:
        a = 1
        break;
      case 20:
        a = 0
        break;
      case 21:
        a = 0
        break;
      case 22:
        a = -1
        break;
    }
    if (a >= 0) {
      for (let i = 0; i < arr4.length; i++) {
        if (a < 0) {
          break
        } else if (arr4.length > a) {
          arr3.push(arr4[a])
          a = a - 1
        }
      }
      arr.push(arr2)
      arr.push(arr3)
    } else {
      arr2.splice(0, 1)
      let arr1 = [
        '10：00 - 12：00',
        '12：00 - 14：00',
        '14：00 - 16：00',
        '16：00 - 18：00',
        '18：00 - 20：00',
        '20：00 - 22：00',
      ]
      arr.push(arr2)
      arr.push(arr1)
    }

    this.setData({
      pickerTime: arr,
      porch
    })
  },

  // 获取输入的姓名
  setName(e) {
    let name = e.detail.value;
    this.setData({
      name
    })
  },

  // 清空输入的姓名
  emptyName() {
    this.setData({
      name: ''
    })
  },

  // 修改时间
  columnchange(e) {
    let arr = this.data.pickerTime
    let column = e.detail.column;
    let arr1 = [
      '10：00 - 12：00',
      '12：00 - 14：00',
      '14：00 - 16：00',
      '16：00 - 18：00',
      '18：00 - 20：00',
      '20：00 - 22：00',
    ]

    if (column == 0) {
      arr[1] = arr1
    }
    this.setData({
      pickerTime: arr
    })
  },

  // 确定时间
  setPicker(e) {
    let arr = this.data.pickerTime
    let a = e.detail.value[0]
    let b = e.detail.value[1]
    let date = new Date()

    let time = date.getTime()
    date = date.setTime(((24 * 3600000) * a) + time)


    let pickerVal = formatTime(date, 3)
    let picker = `${arr[0][a]}/${arr[1][b]}`

    this.setData({
      pickerVal,
      picker
    })
  },

  emptyPicker() {
    this.setData({
      picker: '请选择沟通时间'
    })
  },

  // 获取输入的手机号
  setPhone(e) {
    let phone = e.detail.value;
    this.setData({
      phone
    })
  },

  // 清空输入的手机号
  emptyPhone() {
    this.setData({
      phone: ''
    })
  },

  // 获取输入的验证码
  getVerify(e) {
    let verify = e.detail.value;
    this.setData({
      verify
    })
  },

  // 获取验证码
  emptyVerify() {
    let {timer, phone} = this.data;
    if (phone == '') {
      showToast('请输入手机号')
      return
    }
    let isPhone = /^[1]([3-9])[0-9]{9}$/;
    if (!isPhone.test(phone)) {
      showToast('输入的手机号不正确')
      return
    }


    if (timer === '获取验证码') {
      let val = 60
      Interval = setInterval(() => {
        if (val > 1) {
          val = val - 1;
          this.setData({
            timer: `${val}S`
          })
        } else {
          clearInterval(Interval)
          this.setData({
            timer: '获取验证码'
          })
        }
      }, 1000)
    } else {
      showToast('验证码已发送')
      return false
    }
  },

  // 输入的问题
  setIssue(e) {
    let textarea = e.detail.value;
    this.setData({
      textarea
    })
  },

  // 获取资料
  getData() {
    showToast('获取资料')
  },

  // 去咨询
  toRefer(){
    showToast('马上咨询')
  }

})