export interface Message {
  type: 'system' | 'text' | 'card';
  content: { [key: string]: any } | {
    text: string
  }
}

const fetchHistoryMessages = (): Message[] => {
  let storedMessages = localStorage.getItem('messages')
  return storedMessages ? JSON.parse(storedMessages) : []
}

const initialMessages = (): Message[] => {
  return [
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
  ]
}

const historyMessages = fetchHistoryMessages()
const allMessages: Message[] = historyMessages ? historyMessages : initialMessages()

let chatConfig = {
  navbar: {
    title: 'ChatGpt Smart Assistant',
  },
  // 头像白名单
  avatarWhiteList: ['knowledge', 'recommend'],
  // 机器人信息
  robot: {
    avatar:
      'data:image/png;base64,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',
  },
  // 首屏消息
  messages: allMessages,
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
}

export { chatConfig, allMessages }
