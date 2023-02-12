let config = {
  navbar: {
    // logo: 'data:image/png;base64,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',
    title: 'ChatGpt 智能小助理',
  },
  // 头像白名单
  avatarWhiteList: ['knowledge', 'recommend'],
  // 机器人信息
  robot: {
    avatar:
      'data:image/png;base64,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',
  },
  // 首屏消息
  messages: [
    {
      type: 'system',
      content: {
        text: '智能助理进入对话，为您服务',
      },
    },
    {
      type: 'text',
      content: {
        text: '浙江智能助理为您服务，请问有什么可以帮您？',
      },
    },
    {
      type: 'card',
      content: {
        code: 'switch-location',
      },
    },
    {
      type: 'card',
      content: {
        code: 'promotion',
        data: {
          array: [
            {
              image: '//alime-base.oss-cn-beijing.aliyuncs.com/avatar/alime-base.oss-cn-beijing-internal.aliyuncs.com1569811067816-首页推荐卡底图（售前）.jpg',
              toggle: 'https://gw.alicdn.com/tfs/TB1D79ZXAL0gK0jSZFtXXXQCXXa-100-100.png',
              type: 'recommend',
              list: [
                {
                  title: '收到商品不新鲜怎么办？',
                  hot: true,
                  content: '收到商品不新鲜怎么办？'
                },
                {
                  title: '怎么改配送时间/地址/电话？',
                  hot: true,
                  content: '配送时间/地址/电话错了，怎么修改'
                },
                {
                  title: '我的订单什么时间配送',
                  content: '我的订单什么时间配送'
                },
                {
                  title: '已下单，还能临时加/减商品吗？',
                  content: '已下单，还能临时加/减商品吗？'
                }
              ]
            },
            {
              image: 'https://gw.alicdn.com/tfs/TB114P3XHY1gK0jSZTEXXXDQVXa-400-372.jpg',
              action: 'send',
              text: '点此学习美食做法',
              type: 'default',
              title: '热门菜谱',
              params: {
                content: '热门菜谱'
              }
            },
            {
              image: 'https://gw.alicdn.com/tfs/TB1rsT0Xxv1gK0jSZFFXXb0sXXa-400-358.jpg',
              action: 'send',
              text: '看看你家的天气吧',
              type: 'default',
              title: '天气查询',
              params: {
                content: '天气查询'
              }
            }
          ]
        }
      }
    }
  ],
  // 快捷短语
  quickReplies: [
    { name: '健康码颜色' },
    { name: '入浙通行申报' },
    { name: '健康码是否可截图使用' },
    { name: '健康通行码适用范围' },
    { name: '最美战疫人有哪些权益' },
    { name: '我要查社保' },
    { name: '办理居住证需要什么材料' },
    { name: '公共支付平台' },
    { name: '浙江省定点医院清单' },
    { name: '智能问诊' },
  ],
  // 输入框占位符
  placeholder: '输入任何您想办理的服务',
  // 侧边栏
  // sidebar: [
  //   { code: 'hello', data: {} },
  //   {
  //     code: 'promotion',
  //     data: {
  //       array: [
  //         {
  //           image: 'https://gw.alicdn.com/tfs/TB114P3XHY1gK0jSZTEXXXDQVXa-400-372.jpg',
  //           action: 'send',
  //           text: '点此学习美食做法',
  //           type: 'default',
  //           title: '热门菜谱',
  //           params: {
  //             content: '热门菜谱'
  //           }
  //         },
  //         {
  //           image: 'https://gw.alicdn.com/tfs/TB1rsT0Xxv1gK0jSZFFXXb0sXXa-400-358.jpg',
  //           action: 'send',
  //           text: '看看你家的天气吧',
  //           type: 'default',
  //           title: '天气查询',
  //           params: {
  //             content: '天气查询'
  //           }
  //         }
  //       ]
  //     }
  //   },
  //   {
  //     code: 'slot',
  //     data: {
  //       hideShortcuts: true,
  //       list: [
  //         {
  //           title: '社保卡'
  //         },
  //         {
  //           title: '参保证明打印'
  //         },
  //         {
  //           title: '失业保险'
  //         },
  //         {
  //           title: '工伤保险'
  //         },
  //         {
  //           title: '养老保险'
  //         },
  //       ]
  //     }
  //   },
  //   {
  //     code: 'knowledge',
  //     data: {
  //       text: '内容（支持富文本）'
  //     }
  //   },
  //   {
  //     code: 'sidebar-suggestion',
  //     data: [
  //       {
  //         label: '疫情问题',
  //         list: [
  //           '身边有刚从湖北来的人，如何报备',
  //           '接触过武汉人，如何处理？',
  //           '发烧或咳嗽怎么办？',
  //           '去医院就医时注意事项',
  //           '个人防护',
  //           '传播途径',
  //           '在家消毒',
  //         ],
  //       },
  //       {
  //         label: '法人问题',
  //         list: [
  //           '企业设立',
  //           '企业运行',
  //           '企业变更',
  //           '企业服务',
  //           '企业注销',
  //           '社会团体',
  //           '民办非企业',
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     code: 'sidebar-tool',
  //     title: '常用工具',
  //     data: [
  //       {
  //         name: '咨询表单',
  //         icon: 'clipboard-list',
  //         url:
  //           'http://www.zjzxts.gov.cn/wsdt.do?method=suggest&xjlb=0&ymfl=1&uflag=1',
  //       },
  //       {
  //         name: '投诉举报',
  //         icon: 'exclamation-shield',
  //         url: 'http://www.zjzxts.gov.cn/wsdt.do?method=suggest&xjlb=1',
  //       },
  //       {
  //         name: '办事进度',
  //         icon: 'history',
  //         url:
  //           'http://www.zjzwfw.gov.cn/zjzw/search/progress/query.do?webId=1',
  //       },
  //     ],
  //   },
  //   {
  //     code: 'sidebar-phone',
  //     title: '全省统一政务服务热线',
  //     data: ['12345'],
  //   },
  // ],
}

export default config