var hotMoive =  "https://api.douban.com/v2/movie/in_theaters";
var tomorrowMoive = "https://api.douban.com/v2/movie/coming_soon";
var koubeiMoive = "https://api.douban.com/v2/movie/top250";
var beimeiMoive = "https://api.douban.com/v2/movie/us_box";
Page({
     data:{
          hotmovies: [],
          tomorrowMoives: [],
          koubeiMoives: [],
          beimeiMoives: [],
     },
     onLoad: function(){
       var that = this;
      //  请求正在上映的电影数据
        wx.request({
          url: hotMoive,
          data:{},
          header:{
            "Content-Type": "json"
          },
          success: function(res){
             console.log(res.data)
             that.setData({
               hotmovies: res.data.subjects
             })
             
          }
        })
        // 请求即将上映电影的数据
        wx.request({
          url: tomorrowMoive,
          data: {},
          header: {
            "Content-Type": "json"
          },
          success: function (res) {
            console.log(res.data)
            that.setData({
              tomorrowMoives: res.data.subjects
            })

          }
        })
        // 请求口碑榜的数据
        wx.request({
          url: koubeiMoive,
          data: {},
          header: {
            "Content-Type": "json"
          },
          success: function (res) {
            console.log(res.data)
            that.setData({
              koubeiMoives: res.data.subjects
            })

          }
        })
        // 请求北美票房榜数据
        wx.request({
          url: hotMoive,
          data: {},
          header: {
            "Content-Type": "json"
          },
          success: function (res) {
            console.log(res.data)
            that.setData({
              beimeiMoives: res.data.subjects
            })

          }
        })
     }
})