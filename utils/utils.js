/**
 * 数字前面自动补齐0
 */
 export function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }

/**
 * 时间格式化函数
 * @date 传入日期对象
 * @dateTime 日期类型(日期/日期+时间)
 */
 export function formatTime(date, dateTime, divide) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
  
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
  
    // 分隔符
    if (!divide) {
      divide = '-'
    }
  
    // 日期 + 时间
    if (dateTime == 5) {
      return [year, month, day].map(formatNumber).join(divide) + ' ' + [hour, minute].map(formatNumber).join(':');
    } else if (dateTime == 2) {
      return [minute, second].map(formatNumber).join(':');
    } else {
      return [year, month, day].map(formatNumber).join(divide);
    }
  }

 /**
 * 发送请求Promise封装
 * @url 请求地址
 * @data 请求参数
 * @method 请求类型
 */
export function ajaxPromise (url, data, method,){
 // 请求判断类型
 if (method) {
    method = 'POST'
  } else {
    method = 'GET'
  }

  return new Promise ((resolve, rejected) => {
      tt.request({
          url,
          data,
          header:{
            "content-type": "application/json",
          },
          method,
          success: (res) => {
            resolve(res.data)
          },
          fail: (res) => {
            rejected(res)
          }
      })
  })
}

 /**
 * 弹框封装 
 */

 export function showToast(title,icon){
     if (!icon) {
        icon = 'none'
     }

    tt.showToast({
        title,
        icon,
        duration: 1500
    })
 }