let douban_api = "https://api.douban.com/v2/movie/top250";
Page({
    data:{
      "loading": "加载中...",
      "movies": []
    },
    onLoad: function(){
      let that = this;
      wx.showToast({
        title: '加载中...',
        icon: 'loading',
        duration: 1000
      })
      wx.request({
        url: douban_api,
        data:{},
        header:{
          "content-type":"json"
        },
        success: function(res){
              console.log(res.data);
              let allmovies = res.data;
              that.setData({
                "loading": allmovies.title,
                "movies" : allmovies.subjects
              })
              
        }
      })

      
    }
})
