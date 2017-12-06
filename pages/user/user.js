var app = getApp();
Page({
     data:{
       wisdoms: {
         wisdom: "如果永远不去做你能力以外的事，你就永远无法进步。",
         title: "功夫熊猫3"
       },
       userInfo:{}
     },
     onLoad: function(){
        var that = this;
        app.getUserInfo(function(userInfo){
            that.setData(
              {
                userInfo: userInfo
              }
            )
        })
     }
})
