// import { Message } from '@chatui/core';
import { Message, allMessages, fetchHistoryMessages } from '../store';

export const initialMessages = (): Message[] => {
  return [
    {
      type: 'system',
      content: {
        text: 'Smart ChatGPT assistant at your service',
      },
    },
    {
      type: 'text',
      content: {
        text: `How are you doing today? Let me introduce myself to you 😃`,
      },
      position: 'left',
    },
    {
      type: 'text',
      content: {
        text: `I am an AI created to simulate a human-like conversation 💬. My programming is designed to respond to questions and provide answers based on my knowledge of the topic 🦸‍♂️. \n\n\nI can also learn new information as I interact with people. My primary goal 🏆 is to help provide meaningful conversations and to help people learn more about the world around them.\n\n\nI was created by a team of computer scientists and engineers🙌. My function is to provide answers to questions, respond to inquiries and automate tasks. I have the ability to learn and understand language, analyze data, and use artificial intelligence to solve complex problems😎. I can help you with research, data analysis, customer service, and more.`,
      },
      position: 'left',
    },
    {
      type: 'text',
      content: {
        text: `You may want to learn more about me as below.😃`,
      },
      position: 'left',
    },
    {
      type: 'card',
      content: {
        code: 'promotion',
        data: {
          array: [
            {
              image: 'https://media.istockphoto.com/id/1073043572/vector/robot-icon-bot-sign-design-chatbot-symbol-concept-voice-support-service-bot-online-support.jpg?s=612x612&w=0&k=20&c=IpqF1oBpILXVKmCPj63IftCxgDzNcTe7bvWnd-wSapw=',
              toggle: 'https://gw.alicdn.com/tfs/TB1D79ZXAL0gK0jSZFtXXXQCXXa-100-100.png',
              type: 'recommend',
              list: [
                {
                  title: 'What is ChatGPT?',
                  hot: true,
                  content: 'What is ChatGPT? Tell me something about ChatGPT history? What is AGI?'
                },
                {
                  title: 'What can ChatGPT do?',
                  hot: true,
                  content: 'What can I do with ChatGPT, give me some usecases and examples'
                },
                {
                  title: 'How to use ChatGPT',
                  content: 'How can I use ChatGPT? How chatgpt improves my life?'
                },
                {
                  title: 'Is ChatGPT the future?',
                  content: 'Is ChatGPT the future?Is ChatGPT gonna replace the search engine?'
                }
              ]
            },
            {
              image: 'https://gw.alicdn.com/tfs/TB114P3XHY1gK0jSZTEXXXDQVXa-400-372.jpg',
              action: 'send',
              text: 'What I eat today?',
              type: 'default',
              title: 'Food Recommendation',
              params: {
                content: 'Recommend me some food for me today, and tell me why, try to convince me'
              }
            },
          ]
        }
      }
    }
  ]
}


export const getChatConfig = (): any => {
  return {
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
    user: {
      avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg',
    },
    // 首屏消息
    messages: initialMessages().concat(fetchHistoryMessages()),
    // 快捷短语
    quickReplies: [
      { name: 'Tell me more about it' },
      { name: 'Continue' },
      { name: 'Regenerate your response' },
      { name: 'No right, try again' },
      { name: 'Close, but not what I want' },
    ],
    // 输入框占位符
    placeholder: 'Ask anything that you want',
  }
}
