import Chat, { Bubble, MessageProps, useMessages } from '@chatui/core';
import '@chatui/core/dist/index.css';
import React, { useState } from 'react';
import { historyMessages, persistantMessages } from '../store';
import CodeEidtor from './code-editor';
import { MaxContextMessageSize, PARAM_AI_MODE, PARAM_OPEN_AI_KEY, PARAM_USE_MY_OWN_OPEN_AI_KEY } from '../const';


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
  const robotAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtB58pBNLqPEtHtiRUdAzttZSWfCUYHaJWsq8pv-UAkF7vKI2IKGEvIbBksy6H69kcHsg&usqp=CAU';
  const robotProfileImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtB58pBNLqPEtHtiRUdAzttZSWfCUYHaJWsq8pv-UAkF7vKI2IKGEvIbBksy6H69kcHsg&usqp=CAU';

  const initialMessages: MessageProps[] = [
    {
      _id: Date.now(),
      type: 'system',
      content: {
        text: 'Smart ChatGPT assistant at your service',
      },
      user: { avatar: robotAvatar },
    },
    {
      _id: Date.now(),
      type: 'text',
      content: {
        text: `How are you doing today? Let me introduce myself to you 😃`,
      },
      user: { avatar: robotAvatar },
    },
    {
      _id: Date.now(),
      type: 'text',
      content: {
        text: `You may want to learn more about me as below.😃`,
      },
      user: { avatar: robotAvatar },
    },
    {
      _id: Date.now(),
      type: 'text',
      content: {
        text: `I am an AI created to simulate a human-like conversation 💬. My programming is designed to respond to questions and provide answers based on my knowledge of the topic 🦸‍♂️. \n\n\nI can also learn new information as I interact with people. My primary goal 🏆 is to help provide meaningful conversations and to help people learn more about the world around them.\n\n\nI was created by a team of computer scientists and engineers🙌. My function is to provide answers to questions, respond to inquiries and automate tasks. I have the ability to learn and understand language, analyze data, and use artificial intelligence to solve complex problems😎. I can help you with research, data analysis, customer service, and more.`,
      },
      user: { avatar: robotAvatar },
    },
    {
      _id: Date.now(),
      type: 'image',
      content: {
        picUrl: robotProfileImage,
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
  const [contextMessages, setContextMessages] = useState([])

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

      // below is the public key, may not be stable, better use your own key which can be configured in the config panel
      const publicOpenAiKey = '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'
      const openAiKey = window.extensionAPI.settings.get(PARAM_USE_MY_OWN_OPEN_AI_KEY) ?
        window.extensionAPI.settings.get(PARAM_OPEN_AI_KEY) : publicOpenAiKey
      const model = window.extensionAPI.settings.get(PARAM_AI_MODE) as string

      sendOpenAiChatRequest(openAiKey, model, val);
    }
  }

  function sendOpenAiChatRequest(openAiKey: unknown, model: string, val: string) {
    let endpoint = 'https://api.openai.com/v1/chat/completions';
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openAiKey}`,
      },
      body: JSON.stringify({
        "model": model,
        "messages": contextMessages.concat({ "role": "user", "content": val }),
        max_tokens: 200,
        temperature: 0.7,
        n: 1,
      })
    }).then(response => response.json()).then(data => {
      console.log(data);
      const replyContent = data?.choices[0]?.message?.content;
      setContextMessages(contextMessages.concat(
        [
          { "role": "user", "content": val },
          { "role": "user", "content": replyContent }
        ]).slice(0, MaxContextMessageSize));
      setContext(data.context);
      const replyMsg: MessageProps = {
        _id: Date.now(),
        type: 'text',
        content: { text: replyContent },
        user: { avatar: robotAvatar },
        position: "left"
      };
      appendMsg(replyMsg);
      persistantMessages(replyMsg);
    }).catch(err => {
      console.error(err);
      const replyMsg: MessageProps = {
        _id: Date.now(),
        type: 'text',
        content: {
          text: `Hmmm, something went wrong😢: you may need to check if your settings are configured properly. You maybe have congired to use gpt4 model, but your OpenAiKey doesn't not support gpt4 model.
          `
        },
        user: { avatar: robotAvatar },
        position: "left"
      };
      appendMsg(replyMsg);
    });
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
        return <CodeEidtor code={content?.text}></CodeEidtor>
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
      messages={messages}
      renderMessageContent={renderMessageContent}
      quickReplies={defaultQuickReplies}
      onQuickReplyClick={handleQuickReplyClick}
      onSend={handleSend}
      locale="en-US"
    />
  );
}

export default ChatProUI