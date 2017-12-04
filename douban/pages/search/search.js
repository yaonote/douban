let douban_api = "https://api.douban.com/v2/movie/top250";
Page({
  data: {
    "loading": "输入搜索内容",
    "movies": []
  },
  onLoad: function () {
    let that = this;
   
    wx.request({
      url: douban_api,
      data: {},
      header: {
        "content-type": "json"
      },
      success: function (res) {
        console.log(res.data);
        let allmovies = res.data;
        that.setData({         
          "movies": allmovies.subjects
        })

      }
    })


  }
})
