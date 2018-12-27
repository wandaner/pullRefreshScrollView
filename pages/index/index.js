//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    datas:[]
  },
 
  onLoad: function () {
    this.scroll = this.selectComponent('.scorllStyle');
    this.scroll.resetFooter();
    this.scroll.dataEmpty();
  },

  _pullAndRefresh(){
    setTimeout(()=>{
      this.scroll.stopRefresh();
    },3000)
  },
  _loadMore(){
    setTimeout(() => {
      this.scroll.noMore();
    }, 3000)
  }
})
