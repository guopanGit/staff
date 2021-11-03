App({
  onLaunch (options) {
     // 获取导航栏高度
    tt.getSystemInfo({
      success: (res) => {
        this.globalData.height = res.statusBarHeight
      }
    })
    // 检查更新
    const updateManager = tt.getUpdateManager();
    updateManager.onCheckForUpdate((res) =>{
      if(res.hasUpdate){
        updateManager.onUpdateReady((res) => {
         tt.showModal({
          title: "更新提示",
          content: "新版本已经准备好，是否重启小程序？",
          success: (res) => {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate();
            }
          }
         })
        })
      }
    })
    
  },
  globalData: {
    height: 0,
  }
})
