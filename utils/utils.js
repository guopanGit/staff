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
export function ajaxPromise(url, data, method, ) {
    // 请求判断类型
    if (method) {
        method = 'POST'
    } else {
        method = 'GET'
    }

    return new Promise((resolve, rejected) => {
        tt.request({
            url,
            data,
            header: {
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
 * 获取位置
 */
export function getLocation() {
    return new Promise((resolve, rejected) => {
        tt.getSetting({
            success: (res) => {
                if (res.authSetting['scope.userLocation']) {
                    tt.getLocation({
                        success: (res) => {
                            let { latitude, longitude } = res;
                            let data = `${longitude},${latitude}`
                            let url = `https://restapi.amap.com/v3/geocode/regeo?key=d4ad4c1303994f5f7dc20ef93b2d2b79&location=${data}`
                            tt.request({
                                url,
                                header: {
                                    "content-type": "application/json",
                                },
                                success: (res) => {
                                    let { province, city, district } = res.data.regeocode.addressComponent;
                                    let location = `${province} ${city} ${district}`
                                    if (city.length == 0) {
                                        location = `${province} ${district}`
                                    }
                                    let data = { province, city, district, location }
                                    resolve(data)
                                },
                                fail: (res) => {
                                    rejected(res)
                                }
                            })

                        }
                    })
                } else {
                    tt.openSetting({
                        success: (res) => {
                            if (res.authSetting['scope.userLocation']) {
                                tt.getLocation({
                                    success: (res) => {
                                        let { latitude, longitude } = res;
                                        let data = `${longitude},${latitude}`
                                        let url = `https://restapi.amap.com/v3/geocode/regeo?key=d4ad4c1303994f5f7dc20ef93b2d2b79&location=${data}`
                                        tt.request({
                                            url,
                                            header: {
                                                "content-type": "application/json",
                                            },
                                            success: (res) => {
                                                let { province, city, district } = res.data.regeocode.addressComponent;
                                                let location = `${province} ${city} ${district}`
                                                if (city.length == 0) {
                                                    location = `${province} ${district}`
                                                }
                                                let data = { province, city, district, location }
                                                resolve(data)
                                            },
                                            fail: (res) => {
                                                rejected(res)
                                            }
                                        })

                                    }
                                })
                            }
                        }
                    })
                }
            }
        })
        return

    })

}

/**
 * 弹框封装 
 */
export function showToast(title, icon) {
    if (!icon) {
        icon = 'none'
    }

    tt.showToast({
        title,
        icon,
        duration: 1500
    })
}

/**
 * 查询网络
 */

export function getType() {
    return new Promise((resolve) => {
        tt.getNetworkType({
            success(res) {
                let networkType = res.networkType;
                if (networkType == 'unknown') {
                    networkType = 'none'
                }

                if (networkType == 'none') {
                    tt.showToast({
                        title: '请检查网络',
                        icon: 'fail',
                        duration: 1500
                    })
                    resolve(networkType)
                } else {
                    resolve(networkType)
                }
            },
        })
    })
}