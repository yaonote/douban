var douban_api = "https://api.douban.com/v2/movie/subject/";

Page({
    data:{
      movie:[],
      movieTitle: "就知道你喜欢，嘿嘿 " 
    },
    onLoad: function(params){
      var that = this;
      var url = douban_api + params.id;
      // console.log(url);
      wx.request({
        url: url,
        data:{},
        header:{
          "Content-Type":"json"
        },
        success: function(res){
           console.log(res.data)
           that.setData({
             movie: res.data,
             movieTitle: res.data.title
           })
        },
      })
     
     
    }
})
