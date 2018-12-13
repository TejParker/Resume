//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    strArray: [
      [
        {
          str: '彭于晏',
          styleClass: 'textH1'
        },
        {
          str: '男 | 36岁（1982年3月24日）',
          styleClass: ''
        },
        {
          str: '中国台湾影视男演员、歌手',
          styleClass: ''
        },
        {
          str: '香港电影金像奖',
          styleClass: ''
        },
        {
          str: '台湾电影金马奖',
          styleClass: ''
        },
        {
          str: '大众电影百花奖',
          styleClass: ''
        },
        {
          str: '华语电影传媒大奖',
          styleClass: ''
        },
        {
          str: '福布斯中国名人榜第46名',
          styleClass: ''
        },
        {
          str: '-> 阳光',
          styleClass: ''
        },
        {
          str: '-> 帅气',
          styleClass: ''
        },
        {
          str: '-> 真挚',
          styleClass: ''
        },
        {
          str: '-> 幽默',
          styleClass: ''
        },
        {
          str: '联系方式： 186-9148-7859',
          styleClass: ''
        },
        {
          str: 'Email: laplace1015@outlook.com',
          styleClass: ''
        }
      ],
      [
        {
          str: '最新作品',
          styleClass: 'textH1'
        },
        {
          str: '<<邪不压正>>',
          styleClass: ''
        },
        {
          str: '彭于晏 饰 李天然',
          styleClass: ''
        },
        {
          str: '习武少年，公开身份是协和医院医生。',
          styleClass: ''
        },
        {
          str: '和朱潜龙师出同门，却结下血海深仇。',
          styleClass: ''
        },
        {
          str: '15年后，李天然在美特训练变身“李小龙”。',
          styleClass: ''
        },
        {
          str: '领受任务归国，同时也为私仇而来。',
          styleClass: ''
        },
        {
          str: '幕后花絮',
          styleClass: 'textH1'
        },
        {
          str: '彭于晏和廖凡在开机之前进入成家班的训练基地，接受一个多月的封闭式训练，每天拉筋练功夫。两人最后的一场大决战戏份，拍了二十几天，不是用武术招式，完全是生死肉搏。',
          styleClass: ''
        }
      ],
      [
        {
          str: '简介',
          styleClass: 'textH1'
        },
        {
          str: '温哥华大学 | 商科',
          styleClass: ''
        },
        {
          str: '彭于晏出生于单亲家庭，自小父母离异，13岁随家人移民加拿大。他并不喜欢读书，却考上了温哥华最好的大学，读商科。他说，其实我一直知道，前途与爱好是两回事。他爱漫画，爱篮球，但在看不到前途的时候，他从不执著。',
          styleClass: ''
        }
      ],
      [
        {
          str: '洪金宝  | 义父',
          styleClass: ''
        }
      ],
      [
        {
          str: '梁家辉  | "舅父"',
          styleClass: ''
        }
      ],
      [
        {
          str: '余文乐  | 好"基友"',
          styleClass: ''
        }
      ]

    ]

    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  onLoad: function () {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },

  onDialer: function(e){
    // console.log("onDialer......!");
    wx.makePhoneCall({
      phoneNumber: app.globalData.phoneNumber,
    });
  }
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
