import React, { useEffect, useState } from 'react';
import Chat, { Bubble, MessageProps, useMessages } from '@chatui/core';
import '@chatui/core/dist/index.css';
import { MaxMessageSize, SERVICE_HOST } from '../const';
import { PARAM_USE_MY_OWN_OPEN_AI_KEY } from '../const';
import { SERVICE_API_CHATV1 } from '../const';
import { SERVICE_API_CHATV2 } from '../const';
import { historyMessages, persistantMessages } from '../store';
import ReactCodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

export interface Message {
  type: 'system' | 'text' | 'card';
  content: { [key: string]: any } | {
    text: string
  } | any,
  position?: 'left' | 'right',
}
interface ChatProUIProps {
  model?: string;
  openAiKey?: string;
}

const ChatProUI: React.FC<ChatProUIProps> = ({
  model,
  openAiKey
}) => {
  const initialMessages: MessageProps[] = [
    {
      _id: Date.now(),
      type: 'system',
      content: {
        text: 'Smart ChatGPT assistant at your service',
      },
      user: { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtB58pBNLqPEtHtiRUdAzttZSWfCUYHaJWsq8pv-UAkF7vKI2IKGEvIbBksy6H69kcHsg&usqp=CAU' },
    },
    {
      _id: Date.now(),
      type: 'text',
      content: {
        text: `How are you doing today? Let me introduce myself to you 😃`,
      },
      user: { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtB58pBNLqPEtHtiRUdAzttZSWfCUYHaJWsq8pv-UAkF7vKI2IKGEvIbBksy6H69kcHsg&usqp=CAU' },
    },
    {
      _id: Date.now(),
      type: 'text',
      content: {
        text: `You may want to learn more about me as below.😃`,
      },
      user: { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtB58pBNLqPEtHtiRUdAzttZSWfCUYHaJWsq8pv-UAkF7vKI2IKGEvIbBksy6H69kcHsg&usqp=CAU' },
    },
    {
      _id: Date.now(),
      type: 'text',
      content: {
        text: `I am an AI created to simulate a human-like conversation 💬. My programming is designed to respond to questions and provide answers based on my knowledge of the topic 🦸‍♂️. \n\n\nI can also learn new information as I interact with people. My primary goal 🏆 is to help provide meaningful conversations and to help people learn more about the world around them.\n\n\nI was created by a team of computer scientists and engineers🙌. My function is to provide answers to questions, respond to inquiries and automate tasks. I have the ability to learn and understand language, analyze data, and use artificial intelligence to solve complex problems😎. I can help you with research, data analysis, customer service, and more.`,
      },
      user: { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtB58pBNLqPEtHtiRUdAzttZSWfCUYHaJWsq8pv-UAkF7vKI2IKGEvIbBksy6H69kcHsg&usqp=CAU' },
    },
    {
      _id: Date.now(),
      type: 'image',
      content: {
        picUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtB58pBNLqPEtHtiRUdAzttZSWfCUYHaJWsq8pv-UAkF7vKI2IKGEvIbBksy6H69kcHsg&usqp=CAU',
      },
    },
  ];

  // 默认快捷短语，可选
  const defaultQuickReplies = [
    {
      icon: 'message',
      name: 'tell me a joke',
      isNew: true,
      isHighlight: true,
    },
    {
      name: 'regenerate your answer',
      isNew: true,
    },
    {
      name: 'Try agian',
      isHighlight: true,
    },
  ];

  // 消息列表
  let { messages, appendMsg, setTyping } = useMessages(initialMessages.concat(historyMessages));
  const [context, setContext] = useState<string>('')

  // 发送回调
  function handleSend(type: string, val: string) {
    if (type === 'text' && val.trim()) {
      // TODO: 发送请求
      const sendMessage: MessageProps = {
        _id: Date.now(),
        type: 'text',
        content: { text: val },
        position: 'right',
        user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
      }
      appendMsg(sendMessage);
      persistantMessages(sendMessage)

      setTyping(true);

      let chatServiceEndpint
      if (window.extensionAPI.settings.get(PARAM_USE_MY_OWN_OPEN_AI_KEY)) {
        chatServiceEndpint = `${SERVICE_HOST}${SERVICE_API_CHATV1}`
      } else {
        chatServiceEndpint = `${SERVICE_HOST}${SERVICE_API_CHATV2}`
      }

      fetch(chatServiceEndpint, {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "Message": val,
          "Context": context,
          "Model": model,
          "OpenAiKey": openAiKey
        })
      }).then(response => response.json()).then(data => {
        console.log(data)
        setContext(data.context)
        const replyMsg: MessageProps = {
          _id: Date.now(),
          type: 'text',
          content: { text: data.content },
          user: { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtB58pBNLqPEtHtiRUdAzttZSWfCUYHaJWsq8pv-UAkF7vKI2IKGEvIbBksy6H69kcHsg&usqp=CAU' },
          position: "left"
        }
        appendMsg(replyMsg)
        persistantMessages(replyMsg)
      })
    }
  }

  // 快捷短语回调，可根据 item 数据做出不同的操作，这里以发送文本消息为例
  function handleQuickReplyClick(item: any) {
    handleSend('text', item.name);
  }

  function renderMessageContent(msg: MessageProps) {
    const { type, content } = msg;

    // 根据消息类型来渲染
    switch (type) {
      case 'text':
        if ((content.text as string).includes('```')) {
          return <ReactCodeMirror value={content.text} extensions={[javascript({ jsx: true })]}></ReactCodeMirror>
        }
        return <Bubble content={content.text} />;
      case 'image':
        return (
          <Bubble type="image">
            <img src={content.picUrl} alt="" />
          </Bubble>
        );
      default:
        return null;
    }
  }

  return (
    <Chat
      // navbar={{ title: 'Roam GPT - Smart Assistant' }}
      messages={messages}
      renderMessageContent={renderMessageContent}
      quickReplies={defaultQuickReplies}
      onQuickReplyClick={handleQuickReplyClick}
      onSend={handleSend}
    />
  );
}

export default ChatProUI